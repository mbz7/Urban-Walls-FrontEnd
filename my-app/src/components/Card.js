import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Accordion,
} from "react-bootstrap";

function Card() {
  return (
    <div>
      <Container className={"d-flex align-items-center justify-content-center"}>
        <Card
          className="mt-5 shadow-lg p-3 mb-5 bg-body rounded"
          style={{ width: "75%" }}
        >
          <Card.Img
            className={"ratio ratio-1x1"}
            variant="top"
            src={image}
            alt={name}
          />

          <Card.Title>
            <h3 className="text-uppercase mt-2">{name}</h3>
            <b>{city}, CO</b>
            <br></br>
            <a href={website}>Link to Website</a>
          </Card.Title>
          <hr></hr>
          <Card.Body>
            <Row>
              <div class="justify-content-evenly">
                <div class="d-inline-block">
                  <b>Machine Groomed: </b>
                  {groomed}"
                  <img src={`../resort-icons/machine-groomed.png`}></img>
                </div>
                <div class="d-inline-block">
                  <b class="d-flex-around">Runs Open: </b>
                  {runs}
                  <img src={`../resort-icons/runs.png`}></img>
                </div>

                <div class="d-inline-block">
                  <b>Lifts Open: </b>
                  {lifts}
                  <img src={`../resort-icons/lifts.png`}></img>
                </div>
              </div>
            </Row>
          </Card.Body>
          <Button></Button>
        </Card>
      </Container>
    </div>
  );
}

export default Card;
