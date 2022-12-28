
import React, { useState, useRef } from "react";

const Timer = () => {


  const [time, setTime] = useState(25 * 60 * 60 * 1000);
  const [sessionLeft, setSessionLeft] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  let timeInterval = useRef(null);

  const handlePlayPause = () => {
    if (!isRunning) {
      setSessionLeft(sessionLeft * 60 * 1000);
      timerCalculation();
    } else if (isRunning) {
      pauseTimer();
    }
    // timerCalculation();
  }

  // Timer Calculation
  const timerCalculation = () => {
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      let value = convertToMinutes(sessionLeft);
      // console.log(value, sessionLeft);
      setTime(sessionLeft => sessionLeft - 1000);

    }, 1000);

  }

  // Pause Timer

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current)
  }
  // Reset the timer

  const resetTimer = () => {
    clearInterval(timeInterval.current);
    setTime(0)
  }

  let convertToMinutes = (time) => {
    const minutes = Math.floor(time % 3600 / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    // return minutes.substr(-2) + ":" + seconds.substr(-2);

    console.log(minutes, seconds);
    return `${minutes}: ${seconds}`;

  }


  return (
    <section>
      <h2>
        Time
      </h2>
      <h2>  {sessionLeft}</h2>

      <button onClick={handlePlayPause}>Start</button>

      <button onClick={resetTimer}>Reset</button>

    </section>
  )
}
export default Timer;