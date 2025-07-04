import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GET, getCurrentDate, POST } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addLocalLog } from "../reducer/logSlice";
import { v4 as uuidv4 } from 'uuid';

interface TimerContextType {
  timers: TimerState;
  activeTimer: TimerType;
  setActiveTimer: (type: TimerType) => void;
  setTimers: React.Dispatch<React.SetStateAction<TimerState>>;
  timersSnapshot: TimerState;
  setTimersSnapshot: (timers: TimerState) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

type TimerState = {
  coding: number;
  interview: number;
  job: number;
};

export const defaultTimer = {
  coding: 3 * 60 * 60,    // 3 hours
  interview: 1 * 60 * 60, // 1 hour
  job: 1 * 60 * 60,      // 1 hour
};

type TimerType = "coding" | "interview" | "job" | null;

const TimerContext = createContext<TimerContextType | undefined>(undefined);

const currentDate = getCurrentDate();

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timers, setTimers] = useState<TimerState>(defaultTimer);
  const [activeTimer, setActiveTimer] = useState<TimerType>(null);
  const [timersSnapshot, setTimersSnapshot] = useState(defaultTimer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let interval = useRef<NodeJS.Timeout>();
  let counter = useRef(0);

  const saveTimerDataToDB = async () => {
    const tasks = {
      coding: timers.coding,
      interview: timers.interview,
      job: timers.job,
    };
    const data = {
      activeTimer,
      date: currentDate,
      tasks,
    };
    
    try {
      // Save to backend
      await POST("dashboard/", data);
      setTimersSnapshot(tasks);

      // Create local log entry
      const logEntry = {
        date: currentDate.toString(),
        tasks,
        totalTime: Object.values(tasks).reduce((a, b) => a + b, 0),
        _id: uuidv4(),
        userId: 'local',
        __v: 0,
        activeTimer: activeTimer || ''
      };
      
      // Update Redux store and localStorage
      dispatch(addLocalLog(logEntry));
    } catch (error) {
      console.error('Error saving timer data:', error);
      // Even if backend fails, save locally
      const logEntry = {
        date: currentDate.toString(),
        tasks,
        totalTime: Object.values(tasks).reduce((a, b) => a + b, 0),
        _id: uuidv4(),
        userId: 'local',
        __v: 0,
        activeTimer: activeTimer || ''
      };
      dispatch(addLocalLog(logEntry));
    }
  };

  useEffect(() => {
    counter.current++;
    if (counter.current > 60) {
      counter.current = 0;
      saveTimerDataToDB();
    }
  }, [timers, counter, activeTimer]);

  useEffect(() => {
    if (activeTimer) {
      interval.current = setInterval(() => {
        setTimers((prevTimers) => {
          const updatedTime = prevTimers[activeTimer] - 1;
          if (updatedTime === 0) {
            // Timer completed, save the final state
            saveTimerDataToDB();
          }
          return {
            ...prevTimers,
            [activeTimer]: updatedTime >= 0 ? updatedTime : 0,
          };
        });
      }, 1000);
    } else {
      if (interval.current) {
        clearInterval(interval.current);
        // Save data when timer is stopped
        saveTimerDataToDB();
      }
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [activeTimer]);

  return (
    <TimerContext.Provider
      value={{
        timers,
        activeTimer,
        setActiveTimer,
        setTimers,
        timersSnapshot,
        setTimersSnapshot,
        loading,
        setLoading,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
