import { useState } from 'react';
import Counter from './Counter';
import Card from './card/Card';
import StopWatch from './StopWatch';
import Parent from './contextss/Parent';

function App() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const [colored, setColored] = useState('#FFFFFF');

  function handleClick() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setColored((document.body.style.backgroundColor = hexColor));
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  return (
    <div className="container-fluid mb-5">
      <div className="container text-center">
        <h2>Color flipper</h2>
        <ul className=" navbar bg-light rounded shadow px-4 d-flex justify-content-between">
          <li>
            <a href="index">Simple</a>
          </li>
          <li>
            <a href="hex">hex</a>
          </li>
        </ul>
      </div>
      <main>
        <div className="container">
          <h2>
            Background color{' '}
            <span>
              <button
                onClick={handleClick}
                className="btn btn-outline-dark fw-bold"
              >
                Change BG: {colored}
              </button>
            </span>
          </h2>
        </div>
      </main>
      <Counter />
      <Card />
      <StopWatch />
      <Parent />
    </div>
  );
}

export default App;
