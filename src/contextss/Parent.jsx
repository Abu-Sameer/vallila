import React, { useState } from 'react';
import Childs from './Childs';
import ContextApi from './Context';

export default function Parent() {
  const [userName, setUserName] = useState('Pure State');
  return (
    <ContextApi.Provider value={{ userName, setUserName }}>
      <div className="contnainer text-center">
        <h3>This is the initialState: {userName}</h3>
        <Childs />
      </div>
    </ContextApi.Provider>
  );
}
