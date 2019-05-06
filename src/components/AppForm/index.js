import React, { Component } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import './index.css'

class AppForm extends Component {
  render() {
    return(
      <Form>
        <Form.Group controlId='formFullName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name here'/>
        </Form.Group>

        <Form.Group controlId='formFingerprint'>
          <Form.Label>Fingerprint Hash</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
                <Button type='button' id='inputGroupPrepend'>Scan</Button>
            </InputGroup.Prepend>
            <Form.Control disabled placeholder='Press "Scan" button to get fingerprint hash'/>
          </InputGroup>
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formCustomsCheckpointSelect'>
          <Form.Label>Customs Checkpoint</Form.Label>
          <Form.Control as='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>

        <div className='button-container text-center'>
          <Button id='button-send' variant='primary' type='button'>
            Send
          </Button>
        </div>
      </Form>
    )
  }
}

export default AppForm
