import React from "react";
import "./HistoryScreen.css";

const HistoryScreen = ({ history }) => {
  return (
    <div className="history-container">
      <h2>Completed Timers</h2>
      {history.length === 0 ? (
        <p>No timers completed yet.</p>
      ) : (
        <ul className="history-list">
          {history.map((item, index) => (
            <li key={index}>
              🎉 <strong>{item.name} - {item.category}</strong> completed at {item.completedAt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryScreen;
