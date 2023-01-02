// Om Ganapathi Siddhi Buddhi
// Omshakthiamma Shivappa
// Vishnu Lakshmi
// Brahama Saraswathi Dakshinamurthy Haygriva
// Sri Venkateshwara Sri Vidya Vijaya Gnana dhyrya Aurogya Samayaspoorthi Lakshmi Devi


import React, { useState, useRef } from "react";

const Timer = () => {


  // const [time, setTime] = useState(25 * 60 * 60 * 1000);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  let minutes, seconds;
  const [sessionLeft, setSessionLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  let timeInterval = useRef(null);

  const handlePlayPause = () => {
    // if (!isRunning) {
    //   // setSessionLeft(sessionLeft * 60 * 60);
    //   timerCalculation(sessionLeft);
    // } else if (isRunning) {
    //   pauseTimer();
    // }
    // timerCalculation();
  }

  // Timer Calculation
  const timerCalculation = (sessionLeft) => {
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      // console.log(sessionLeft)
      [minutes, seconds] = convertToMinutes(sessionLeft);

      console.log(minutes, seconds, sessionLeft);


      for (let i = 0; i <= minutes; i--) {
        if (seconds < 60) {
          seconds = seconds + 1
        }
      }


      console.log(seconds);
      // setSessionLeft(sessionLeft => sessionLeft - 1000);

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
  }

  let convertToMinutes = (sessionLeft) => {

    console.log(sessionLeft)
    // setMinutes(Math.floor(sessionLeft % 3600 / 60));
    // setSeconds(Math.floor(sessionLeft % 60));

    minutes = Math.floor(sessionLeft % 3600 / 60);
    seconds = Math.floor(sessionLeft % 60);

    // setMinutes(50000)
    // setSeconds(500000);
    // setIsRunning(true)

    // return minutes.substr(-2) + ":" + seconds.substr(-2);

    // console.log(min, sec, isRunning);

    // console.log(minutes, seconds);
    return [minutes, seconds]

    // console.log(m + ':' + s);
    // return `${minutes}: ${seconds}`;

  }


  return (
    <section>
      <h2>
        Times
      </h2>
      <h2>  {sessionLeft} React Much Easy to learn and Develop</h2>

      <button onClick={handlePlayPause}>Start</button>

      <button onClick={resetTimer}>Reset</button>

    </section>
  )
}
export default Timer;