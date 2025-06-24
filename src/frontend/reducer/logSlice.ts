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

export interface LogState {
  logs: Log[];
  loading: boolean;
  error: string | null;
}

export const initialLogState: LogState = {
  logs: [],
  loading: false,
  error: null,
};

const logSlice = createSlice({
  name: "logs",
  initialState: initialLogState,
  reducers: {
    updateLogs: (state, action: PayloadAction<Log[]>) => {
      state.logs = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    appendLogs: (state, action: PayloadAction<Log[]>) => {
      state.logs = [...state.logs, ...action.payload];
    },
    clearLogs: (state) => {
      state.logs = [];
      state.error = null;
    }
  },
});

export const { updateLogs, setLoading, setError, appendLogs, clearLogs } = logSlice.actions;
export default logSlice.reducer;
