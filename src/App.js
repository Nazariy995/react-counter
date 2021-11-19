import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const getBackground = (count) => {
    if (count < 0) {
      return 'red';
    } else if (count > 0) {
      return 'green';
    } else {
      return '#112a42';
    }
  };

  return (
    <div className="container">
      <div className="main">
        <h1 className="header">Counter</h1>
        <h1 style={{ color: getBackground(count) }} className="number">
          {count}
        </h1>
        <div className="buttons">
          <div onClick={() => setCount(count - 1)} className="button">
            Decrease
          </div>
          <div onClick={() => setCount(0)} className="button">
            Reset
          </div>
          <div onClick={() => setCount(count + 1)} className="button">
            Increase
          </div>
        </div>
      </div>
    </div>
  );
}
