import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
export default function Contactform() {
    // const [fullname , SetFullname] = useState('');
    // const [phonenumber ,  SetPhonenumber] = useState('');
    // const [email, setEmail] = useState('');
    // const [adress, setAdress] = useState('');
    return (
    <div class="col-6">
       <Form>
        <h1>Add a new contact</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" >
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone number : </Form.Label>
        <Form.Control type="tel" placeholder="Enter email" />
        <Form.Text className="text-muted" >
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email :</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" ></Form.Text>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adress : </Form.Label>
        <Form.Control type="text" placeholder="Enter adress" />
        <Form.Text className="text-muted" >
          
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
