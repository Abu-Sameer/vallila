import React, { useEffect, useState } from 'react';

export default function StopWatch() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
    if (counter > 59) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <div className="text-center my-5">
      <h2>Stop Watch</h2>
      <h1>{counter}</h1>
    </div>
  );
}
