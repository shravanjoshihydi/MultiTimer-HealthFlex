import React from "react";
import TimerItem from "./TimerItem";
import "./TimerList.css";

const TimerList = ({ timers, updateTimer, completeTimer }) => {
  const grouped = timers.reduce((acc, timer) => {
    acc[timer.category] = acc[timer.category] || [];
    acc[timer.category].push(timer);
    return acc;
  }, {});

  return (
    <div className="timer-list">
      {Object.keys(grouped).map((cat) => (
        <div key={cat} className="timer-category">
          <div className="category-header">
            <h2>{cat}</h2>
            <div>
              <button
                onClick={() =>
                  grouped[cat].forEach((t) =>
                    updateTimer(t.id, {
                      status: "Running",
                      remaining: t.remaining ?? t.duration,
                    })
                  )
                }
              >
                Start All
              </button>
              <button
                onClick={() =>
                  grouped[cat].forEach((t) =>
                    updateTimer(t.id, {
                      status: "Paused",
                      remaining: t.remaining ?? t.duration,
                    })
                  )
                }
              >
                Pause All
              </button>
              <button
                onClick={() =>
                  grouped[cat].forEach((t) =>
                    updateTimer(t.id, {
                      status: "Paused",
                      remaining: t.duration,
                    })
                  )
                }
              >
                Reset All
              </button>
            </div>
          </div>
          {grouped[cat].map((timer) => (
            <TimerItem key={timer.id} timer={timer} updateTimer={updateTimer} completeTimer={completeTimer}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimerList;
