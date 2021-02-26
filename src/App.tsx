import React from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { TopMenu } from './Components/TopMenu';
import { Field } from './Components/Field';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Container>
        <Row>
          <Col><Field idx={0} /></Col>
          <Col><Field idx={1} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
