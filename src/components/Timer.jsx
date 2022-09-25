import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

const Timer = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/score`; 
    navigate(path);
  }

  const serialisedState = localStorage.getItem("persistantState");
  const deadline = JSON.parse(serialisedState).quiz.deadline;
  const parsedDeadline = Date.parse(deadline)
  const [time, setTime] = useState(parsedDeadline - Date.now());
  useEffect(() => {
    const interval = setInterval(
        () => setTime(parsedDeadline - Date.now()),
        1000,
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  if (parsedDeadline - Date.now() <= 0 ){
    routeChange()
  } 
  return (
    <div className='text-white py-4'>
      <h1 className='text-2xl text-center'>Time Remaining :</h1>
      <div className="timer text-white flex flex-row justify-center text-2xl">
        {Object.entries({
            Hours: (time / HOUR) % 24,
            Minutes: (time / MINUTE) % 60,
            Seconds: (time / SECOND) % 60,
        }).map(([label, value]) => (
            <div key={label} className="p-4">
                <div className="flex flex-col w-auto text-center">
                    <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <span className="text">{label}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Timer
