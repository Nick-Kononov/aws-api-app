import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './index.css';

class AppCheckpointList extends Component {
  render() {
    return(
      <Card id='card-checkpoint-list'>
        <Card.Header>Top chekpoints today</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='card-checkpoint' action>Cras justo odio</ListGroup.Item>
          <ListGroup.Item className='card-checkpoint' action>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item className='card-checkpoint' action>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item className='card-checkpoint' action>Homo homini lupus est</ListGroup.Item>
          <ListGroup.Item className='card-checkpoint' action>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default AppCheckpointList
