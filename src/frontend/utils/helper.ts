import axios from "axios";

export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const getCurrentDate = () => {
  const date = new Date();
  return date.setHours(0, 0, 0, 0);
};

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const dateString = date.toLocaleDateString("en-GB", options);
  return dateString;
};

export const GET = async (url: string, enableToken: boolean = false) => {
  try {
    let response;
    const config: any = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (enableToken) {
      const tokenData = getLocalStorage("tokenData");
      if (!tokenData) {
        throw new Error("Authentication required. Please log in again.");
      }
      
      try {
        const parsedToken = JSON.parse(tokenData);
        if (!parsedToken.token) {
          throw new Error("Invalid token format");
        }
        config.headers.Authorization = `Bearer ${parsedToken.token}`;
      } catch (e) {
        clearLocalStorage();
        throw new Error("Invalid token data. Please log in again.");
      }
    }

    response = await axios.get(url, config);
    return response?.data;
  } catch (e: any) {
    if (e?.response?.status === 401) {
      clearLocalStorage();
      throw new Error("Session expired. Please log in again.");
    }
    if (e?.response?.status === 404) {
      throw new Error("Resource not found. Please try again later.");
    }
    if (e?.response?.data?.message) {
      throw new Error(e.response.data.message);
    }
    if (e.message) {
      throw new Error(e.message);
    }
    throw new Error("Failed to fetch data. Please check your connection and try again.");
  }
};

export const POST = async (url: string, data: any) => {
  try {
    const tokenData = getLocalStorage("tokenData");
    if (!tokenData) {
      throw new Error("Authentication required. Please log in again.");
    }

    try {
      const parsedToken = JSON.parse(tokenData);
      if (!parsedToken.token) {
        throw new Error("Invalid token format");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${parsedToken.token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(url, data, config);
      return response.data;
    } catch (e) {
      clearLocalStorage();
      throw new Error("Invalid token data. Please log in again.");
    }
  } catch (e: any) {
    if (e?.response?.status === 401) {
      clearLocalStorage();
      throw new Error("Session expired. Please log in again.");
    }
    if (e.message) {
      throw new Error(e.message);
    }
    throw new Error("Failed to send data. Please check your connection and try again.");
  }
};
