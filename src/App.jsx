import React, { useEffect, useState } from 'react';
import TimerForm from './components/TimerForm';
import TimerList from './components/TimerList';
import './App.css';

const App = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('timers');
    if (saved) setTimers(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
  }, [timers]);

  const updateTimer = (id, newProps) => {
    setTimers(prev => prev.map(timer => timer.id === id ? { ...timer, ...newProps } : timer));
  };

  const updateGroupTimers = (status) => {
    setTimers(prev => prev.map(timer => {
      if (status === 'reset') {
        return { ...timer, status: 'Paused', remaining: timer.duration };
      }
      return { ...timer, status: status };
    }));
  };

  return (
    <div className="app-container">
      <h1>Multi Timer Manager</h1>
      <TimerForm addTimer={timer => setTimers([...timers, timer])} />
      <div className="group-controls">
        <h3>All Groups Timer Controls</h3>
        <button onClick={() => updateGroupTimers('Running')}>Start All</button>
        <button onClick={() => updateGroupTimers('Paused')}>Pause All</button>
        <button onClick={() => updateGroupTimers('reset')}>Reset All</button>
      </div>
      <TimerList timers={timers} updateTimer={updateTimer} />
    </div>
  );
};

export default App;