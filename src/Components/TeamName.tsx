import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export function TeamName({ idx }: { idx: number; }) {
  const [teamName, setTeamName] = useState("Team " + (idx + 1));
  return <div className="team-name">

    <Form.Control type="text" value={teamName} onChange={e => setTeamName(e.target.value)} />
  </div>;
}
