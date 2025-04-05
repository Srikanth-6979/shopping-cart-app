import React from "react";
import { THRESHOLD } from "../data";

const ProgressBar = ({ subtotal }) => {
  const progress = Math.min((subtotal / THRESHOLD) * 100, 100);
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{subtotal >= THRESHOLD ? "You got a free Wireless Mouse!" : `Add ₹${THRESHOLD - subtotal} more to get a free gift!`}</p>
    </div>
  );
};

export default ProgressBar;