import React, { useContext } from 'react';
import ContextApi from './Context';

export default function GrandChild() {
  const { setUserName } = useContext(ContextApi);
  return (
    <div>
      <button
        onClick={() => setUserName('Context Provider')}
        className="btn btn-success"
      >
        Change state
      </button>
    </div>
  );
}
