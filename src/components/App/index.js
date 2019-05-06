import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './index.css';

import AppForm from './../AppForm'
import AppCheckpointList from './../AppCheckpointList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AWS API APP</h1>
      </header>
      <Container>
        <Row>
          <Col className='mr-5'>
            <AppForm/>
          </Col>
          <Col className='ml-5'>
            <AppCheckpointList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
