import React from 'react';
import logo from './logo.svg';
import './App.css';

import ClassComponent from './Component/ClassCounter';
import HookComponent from './Component/HookCounter';
import HookComponentTwo from './Component/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookComponentTwo />
    </div>
  );
}

export default App;
