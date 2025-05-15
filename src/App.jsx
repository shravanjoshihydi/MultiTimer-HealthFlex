import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TimerForm from "./components/TimerForm";
import TimerList from "./components/TimerList";
import HistoryScreen from "./components/HistoryScreen";
import "./App.css";

const App = () => {
  const [timers, setTimers] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedTimers = localStorage.getItem("timers");
    const savedHistory = localStorage.getItem("history");
    if (savedTimers) setTimers(JSON.parse(savedTimers));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const updateTimer = (id, newProps) => {
    setTimers((prev) =>
      prev.map((timer) => (timer.id === id ? { ...timer, ...newProps } : timer))
    );
  };

  const completeTimer = (id) => {
    const timer = timers.find((t) => t.id === id);
    if (timer) {
      setHistory(prev => {
        const exists = prev.some(item => item.name === timer.name);
        if (exists) return prev;
        const now = new Date().toLocaleString();
        const newHistoryItem = { name: timer.name, completedAt: now, category: timer.category };
        return [...prev, newHistoryItem];
      });
    }
  };

  return (
    <Router>
      <div className="app-container">
        <h1 style={{ marginBottom: "0" }}>Timer Application</h1>
        <h3>Add Name, Duration, Category and Start your timer now...! </h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TimerForm addTimer={(timer) => setTimers([...timers, timer])}/>
                <TimerList timers={timers} updateTimer={updateTimer} completeTimer={completeTimer}/>
              </>
            }
          />
          <Route
            path="/history"
            element={<HistoryScreen history={history} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
