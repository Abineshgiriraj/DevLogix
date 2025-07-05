import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Log {
  date: string;
  tasks: {
    coding: number;
    interview: number;
    job: number;
  };
  totalTime: number;
  _id: string;
  userId: string;
  __v: number;
  activeTimer: string;
}

export interface Pagination {
  currentPage: number;
  totalLogs: number;
  totalPages: number;
}

export interface LogsResponse {
  logs: Log[];
  pagination: Pagination;
}

export const defaultPagination: Pagination = {
  currentPage: 0,
  totalLogs: 0,
  totalPages: 0,
};

export interface LogState {
  logs: Log[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}

// Load initial state from localStorage if available
const loadInitialState = (): LogState => {
  try {
    const savedLogs = localStorage.getItem('preparationTimeTrackerLogs');
    if (savedLogs) {
      const parsedLogs = JSON.parse(savedLogs);
      return {
        logs: parsedLogs.logs || [],
        loading: false,
        error: null,
        pagination: parsedLogs.pagination || defaultPagination
      };
    }
  } catch (error) {
    console.error('Error loading logs from localStorage:', error);
  }
  return {
    logs: [],
    loading: false,
    error: null,
    pagination: defaultPagination,
  };
};

export const initialLogState: LogState = loadInitialState();

const saveToLocalStorage = (state: LogState) => {
  try {
    localStorage.setItem('preparationTimeTrackerLogs', JSON.stringify({
      logs: state.logs,
      pagination: state.pagination
    }));
  } catch (error) {
    console.error('Error saving logs to localStorage:', error);
  }
};

const logSlice = createSlice({
  name: "logs",
  initialState: initialLogState,
  reducers: {
    updateLogs: (state, action: PayloadAction<LogsResponse>) => {
      state.logs = action.payload.logs;
      state.pagination = action.payload.pagination;
      saveToLocalStorage(state);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    appendLogs: (state, action: PayloadAction<LogsResponse>) => {
      state.logs = [...state.logs, ...action.payload.logs];
      state.pagination = action.payload.pagination;
      saveToLocalStorage(state);
    },
    appendSearchLogs: (state, action: PayloadAction<LogsResponse>) => {
      state.logs = action.payload.logs;
      state.pagination = action.payload.pagination;
      saveToLocalStorage(state);
    },
    restoreLogs: (state) => {
      state.logs = [];
      state.error = null;
      state.pagination = defaultPagination;
      saveToLocalStorage(state);
    },
    clearLogs: (state) => {
      state.logs = [];
      state.error = null;
      state.pagination = defaultPagination;
      saveToLocalStorage(state);
    },
    addLocalLog: (state, action: PayloadAction<Log>) => {
      const existingLogIndex = state.logs.findIndex(log => log.date === action.payload.date);
      if (existingLogIndex !== -1) {
        state.logs[existingLogIndex] = action.payload;
      } else {
        state.logs.unshift(action.payload);
      }
      state.pagination.totalLogs = state.logs.length;
      saveToLocalStorage(state);
    }
  },
});

export const { 
  updateLogs, 
  setLoading, 
  setError, 
  appendLogs, 
  appendSearchLogs,
  restoreLogs,
  clearLogs,
  addLocalLog
} = logSlice.actions;

export default logSlice.reducer;
