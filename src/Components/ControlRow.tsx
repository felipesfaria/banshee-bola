import React from 'react';
import { ControlCell } from './ControlCell';

export function ControlRow({ increment }: { increment: () => void; }) {
  return <div className="control-row">
    <ControlCell increment={increment} />
    <ControlCell increment={increment} />
    <ControlCell increment={increment} />
    <ControlCell increment={increment} />
    <ControlCell increment={increment} />
    <ControlCell increment={increment} />
  </div>;
}
