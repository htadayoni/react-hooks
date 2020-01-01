import React from 'react';
import logo from './logo.svg';
import './App.css';

import ClassComponent from './Component/ClassCounter';
import HookComponent from './Component/HookCounter';

function App() {
  return (
    <div className="App">
      <HookComponent />
    </div>
  );
}

export default App;
