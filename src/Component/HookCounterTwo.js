import React, { useState } from 'react'

export default function HookComponentTwo() {

  const [count, setCount] = useState(0);

  const increaseFive = () => {
    for(let i = 1; i <= 5; i++){
      console.log('count', count);
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => increaseFive()}>Increase 5+</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
