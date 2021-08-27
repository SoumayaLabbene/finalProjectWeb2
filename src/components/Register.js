import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "./Components.css";
const Register = () => {
    return (
      <>
        <Container className="cont" style={{ width: '600px' }}>
        <div style={{ textAlign: 'center' }}>
              <img src="logooo.png" width="200px"></img>
            </div>
            <br></br>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter your email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control placeholder="Enter your username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

 
<div className="bouton">
  <Button variant="outline-dark" type="submit">
    Register
              </Button>
              </div>
          </Form>
          </Container>
      </>
    );
   };
   export default Register;