import { useState, useCallback } from "react";
import useSecondsInterval from "./useSecondsInterval";

export const useTimer = ({
  initialSeconds = 0,
  initiallyRunning = false,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const [resetting, setResetting] = useState(false);
  const tick = useCallback(() => {
    if (!running || resetting) {
      return;
    }
    setSeconds((seconds) => {
        if (seconds <= 0) {
            return 0;
        }
        return seconds - 1;
    });
  }, [running, resetting]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setResetting(true);
    setSeconds(initialSeconds);
    setTimeout(() => {
      setResetting(false);
    }, 10);
  };
  const stop = () => {
    pause();
    reset();
  };

  useSecondsInterval(tick);

  return { pause, reset, running, seconds, start, stop };
};

export default useTimer;
