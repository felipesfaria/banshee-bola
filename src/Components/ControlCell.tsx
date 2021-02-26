import React, { useState } from 'react';

export function ControlCell({ increment }: { increment: () => void; }) {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    increment();
    setCounter(counter + 1);
  };
  const p = Math.min(25, counter) / 40;
  const background = `rgba(255,0,0,${p})`;
  return <div className="control-cell" onClick={onClick} style={{ background: background }}>{counter}</div>;
}
