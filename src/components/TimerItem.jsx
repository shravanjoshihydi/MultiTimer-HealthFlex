import React, { useEffect, useState, useRef } from 'react';
import './TimerItem.css';
import Congratulations from "./Congratulations";

const TimerItem = ({ timer, updateTimer }) => {
  const [remaining, setRemaining] = useState(timer.remaining ?? timer.duration);
  const [status, setStatus] = useState(timer.status ?? 'Paused');
  const [activeAlert, setActiveAlert] = useState(false);
  const [name,setName] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    setRemaining(timer.remaining ?? timer.duration);
    setStatus(timer.status ?? 'Paused');
  }, [timer.remaining, timer.status, timer.duration]);

  useEffect(() => {
    if (status === 'Running') {
      intervalRef.current = setInterval(() => {
        setRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setStatus('Completed');
            updateTimer(timer.id, { status: 'Completed', remaining: 0 });
            setName(timer.name);
            setActiveAlert(true);
            setTimeout(()=>{
                setActiveAlert(false);
            },3000);
            return 0;
          }
          updateTimer(timer.id, { remaining: prev - 1 });
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [status]);

  const handleAction = (action) => {
    if (action === 'start') {
      setStatus('Running');
      updateTimer(timer.id, { status: 'Running' });
    }
    if (action === 'pause') {
      setStatus('Paused');
      updateTimer(timer.id, { status: 'Paused' });
    }
    if (action === 'reset') {
      setRemaining(timer.duration);
      setStatus('Paused');
      updateTimer(timer.id, { status: 'Paused', remaining: timer.duration });
    }
  };

  const progress = (remaining / timer.duration) * 100;

  return (
    <div className="timer-item">
      <div className="info">
        <h3>{timer.name}</h3>
        <p>{remaining}s</p>
        <p>Status: {status}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => handleAction('start')}>Start</button>
        <button onClick={() => handleAction('pause')}>Pause</button>
        <button onClick={() => handleAction('reset')}>Reset</button>
      </div>
      {activeAlert && <Congratulations name={name}/>}
    </div>
  );
};

export default TimerItem;