import React, { useState } from 'react';
import fieldImg from '../img/field.jpg';
import { Controls } from './Controls';
import { TeamName } from './TeamName';

export function Field({ idx }: { idx: number; }) {
  const [total, setTotal] = useState(0);
  return <div className="field">
    <TeamName idx={idx} />
    <p>{total}</p>
    <div className="field-wrapper">
      <img src={fieldImg} alt="" />
      <Controls increment={() => setTotal(total + 1)} />
    </div>
  </div>;
}
