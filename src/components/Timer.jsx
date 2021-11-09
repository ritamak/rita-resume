import React, { useEffect, useState } from "react";
import moment from "moment";

const Timer = (props) => {
  const { date } = props;
  const targetTime = moment(date);

  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  let months = timeBetween.months().toString().substring(1);
  let days = timeBetween.days().toString().substring(1);
  let hours = timeBetween.hours().toString().substring(1);
  let minutes = timeBetween.minutes().toString().substring(1);
  let seconds = timeBetween.seconds().toString().substring(1);
  return (
    <>
      <p className="counter">
        <span>{months}m </span>
        <span>{days}d </span>
        <span>{hours}h </span>
        <span>{minutes}min </span>
        <span>{seconds}s ago</span>
      </p>
    </>
  );
};
export default Timer;
