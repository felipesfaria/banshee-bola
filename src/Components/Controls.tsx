import React from 'react';
import { ControlRow } from './ControlRow';

export function Controls({ increment }: { increment: () => void; }) {

  return <div className="controls">
    <ControlRow increment={increment} />
    <ControlRow increment={increment} />
    <ControlRow increment={increment} />
    <ControlRow increment={increment} />
    <ControlRow increment={increment} />
    <ControlRow increment={increment} />
  </div>;
}
