import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
// import useForm from '../hooks/useForm'

const Formsignup = () => {
  // const{handlechange,values} = useForm();
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="">
        <Form.Label column sm="2">
          Mobile 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Mobile" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Address
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Address" />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Formsignup