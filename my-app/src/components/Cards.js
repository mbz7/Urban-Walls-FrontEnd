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

function Cards({artist, photo, location, date,}) {



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
            src={photo}
            alt={artist}
          />

          <Card.Title>
            <h3 className="text-uppercase mt-2">{artist}</h3>
            <b>{location}, CO</b>
            {/* <br></br>
            <a href={website}>Link to Website</a> */}
          </Card.Title>
          <hr></hr>
          {/* <Card.Body>
            <Row>
              <div class="justify-content-evenly">
                <div class="d-inline-block">
                  <b>{artist}</b>
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
          </Card.Body> */}
          <Button></Button>
        </Card>
      </Container>
    </div>
  );
}

export default Cards;
