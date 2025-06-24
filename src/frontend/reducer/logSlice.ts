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

export const initialLogState: LogState = {
  logs: [],
  loading: false,
  error: null,
  pagination: defaultPagination,
};

const logSlice = createSlice({
  name: "logs",
  initialState: initialLogState,
  reducers: {
    updateLogs: (state, action: PayloadAction<LogsResponse>) => {
      state.logs = action.payload.logs;
      state.pagination = action.payload.pagination;
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
    },
    appendSearchLogs: (state, action: PayloadAction<LogsResponse>) => {
      state.logs = action.payload.logs;
      state.pagination = action.payload.pagination;
    },
    restoreLogs: (state) => {
      state.logs = [];
      state.error = null;
      state.pagination = defaultPagination;
    },
    clearLogs: (state) => {
      state.logs = [];
      state.error = null;
      state.pagination = defaultPagination;
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
  clearLogs 
} = logSlice.actions;

export default logSlice.reducer;
