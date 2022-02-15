import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import CardList from "./CardList"

function Home() {
  return (

    
    <div>
      <Container>
        <CardList />
        <Col>
          <div className="pt-5 mt-5 mb-5 pb-5 w-50 mx-auto align-center">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
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

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <div class="container-fluid bg-light text-dark p-5">
          <div class="container bg-light p-5">
            <h1 class="display-4 fw-bold">Welcome to Admin Dashboard</h1>
            <hr />
            <p>Go to My Website</p>
            <a href="#" class="btn btn-primary">
              link
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
