import React, { useState, useEffect } from "react";
import useTimer from "../hook/useTimer";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const DEFAULT_COLOR_CHANGE_THRESHOLD = 10;

const Timer = ({ duration, title, nullableColorChangeThreshold }) => {
  const colorChangeThreshold =
    nullableColorChangeThreshold === null ||
    nullableColorChangeThreshold === undefined
      ? DEFAULT_COLOR_CHANGE_THRESHOLD
      : nullableColorChangeThreshold;

  const [timerColor, setTimerColor] = useState("text-green-500");

  const { seconds, start, reset, running, stop } = useTimer({
    initialSeconds: duration,
    initiallyRunning: false,
  });
  const isActive = running;

  useEffect(() => {
    if (isActive && seconds <= colorChangeThreshold) {
      setTimerColor("text-red-500");
    }
  }, [isActive, seconds, colorChangeThreshold]);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className={`text-4xl font-bold ${timerColor}`}>
        {formatTime(seconds)}
      </div>
      <button
        onClick={() => {
          if (isActive) {
            reset();
          } else {
            start();
          }
          setTimerColor("text-green-500");
        }}
        className={`px-4 py-2 ${
          isActive ? "bg-orange-500" : "bg-blue-500"
        } text-white font-semibold rounded`}
      >
        {isActive ? "Restart" : "Start"}
      </button>
      <div className="h-10">
        {isActive && (
          <button
            onClick={() => {
              stop();
              setTimerColor("text-green-500");
            }}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
