import React from 'react';

/**
 * Calculates the percentage of time completed based on timer value and total minutes
 * @param timer Time in seconds
 * @param totalMin Total minutes (default: 120)
 * @returns Percentage completed (0-100)
 */
export const calculatePercent = (timer: number, totalMin: number = 120): number => {
  const completedMin = totalMin - Math.ceil(timer / 60);
  const percent = (completedMin / totalMin) * 100;
  return Math.min(100, Math.round(percent));
};

/**
 * Formats time in seconds to a display string
 * @param time Time in seconds
 * @returns JSX elements with formatted time
 */
export const formatTime = (time: number): React.ReactNode => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <React.Fragment>
      <span className="time-value">{hours.toString()}</span>
      <span className="time-label"> hr </span>
      <span className="time-value">{minutes.toString().padStart(2, "0")}</span>
      <span className="time-label"> min </span>
      <span className="time-value">{seconds.toString().padStart(2, "0")}</span>
      <span className="time-label"> sec</span>
    </React.Fragment>
  );
}; 