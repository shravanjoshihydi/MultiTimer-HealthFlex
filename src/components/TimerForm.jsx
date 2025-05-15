import React, { useState } from 'react';
import './TimerForm.css';

const TimerForm = ({ addTimer }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(30);
  const [category, setCategory] = useState('General');

  const handleSubmit = e => {
    e.preventDefault();
    addTimer({ id: Date.now(), name, duration, category });
    setName('');
    setDuration(30);
  };

  return (
    <form className="timer-form" onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Timer Name" required />
      <input type="number" value={duration} onChange={e => setDuration(Number(e.target.value))} min="1" required />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
      <button type="submit">Add Timer</button>
    </form>
  );
};

export default TimerForm;