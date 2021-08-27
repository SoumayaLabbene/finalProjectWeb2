import axios from "axios";
import React, { useState } from 'react';
import {
    Form, Button, Container
  } from "react-bootstrap";
  import "./Components.css";
  
  

const Login = () => {
  
      return (
        <>
          <Container className="cont" style={{ width: '400px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="logooo.png" width="200px"></img>
            </div>
            <br></br>
          <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter your email"/>
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="bouton">
    <Button variant="outline-dark" type="submit">
      Login
                </Button>
                </div>
            </Form>
            </Container>
        </>
      );
     };
     export default Login;