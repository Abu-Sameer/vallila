import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  let check = '';
  if (counter < 0) {
    check = 'red';
  } else if (counter > 0) {
    check = 'green';
  }

  return (
    <div className="countainer text-center mt-4">
      <h2>Counter</h2>
      <h1 style={{ color: check }}>{counter}</h1>
      <div className="col">
        <button
          onClick={() => setCounter(counter - 1)}
          className="btn btn-outline-danger"
        >
          Decrease
        </button>
        <button
          onClick={() => setCounter(0)}
          className="btn btn-outline-dark mx-4"
        >
          Reset
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          className="btn btn-outline-success"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
