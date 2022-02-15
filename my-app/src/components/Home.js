import React from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";
import NewPost from "./NewPost";

function Home() {
  return (
    <div>
      <Container fluid>
        <div className="container-fluid bg-light text-dark shadow-sm">
          <div className="container bg-light p-5">
            <h1 className="display-4 fw-bold">Recent Posts</h1>
            <hr />
            <NewPost/>
          </div>
        </div>
        <CardList />
      </Container>
    </div>
  );
}

export default Home;
