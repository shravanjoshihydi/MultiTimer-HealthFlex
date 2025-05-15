import React from "react";
import "./Congratulations.css";
const Congratulations = ({ name }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h2>Congratulations 🎉🎉</h2>
        <p> You've completed {name}...!</p>
        <p>Keep it up champ...!</p>
      </div>
    </div>
  );
};

export default Congratulations;
