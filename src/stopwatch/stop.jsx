import React, { useState, useEffect } from "react";
import "./stop.css";

function Stopwatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, mili: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          let { hr, min, sec, mili } = prev;

          mili += 1;
          if (mili > 99) {
            mili = 0;
            sec += 1;
          }
          if (sec > 59) {
            sec = 0;
            min += 1;
          }
          if (min > 59) {
            min = 0;
            hr += 1;
          }

          return { hr, min, sec, mili };
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime({ hr: 0, min: 0, sec: 0, mili: 0 });
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-time">
        {pad(time.hr)}:{pad(time.min)}:{pad(time.sec)}:{pad(time.mili)}
      </h1>
      <div className="stopwatch-buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
