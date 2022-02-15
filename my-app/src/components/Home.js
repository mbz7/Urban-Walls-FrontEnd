import React from "react";
import { Container} from "react-bootstrap";
import CardList from "./CardList"
import NewPost from "./NewPost"

function Home() {
  return (
    <div>
      <Container>
        <NewPost />
        
        <div className="container-fluid bg-light text-dark p-5">
          <div className="container bg-light p-5">
            <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
            <hr />
            <p>Go to My Website</p>
            <a href="#" className="btn btn-primary">
              link
            </a>
          </div>
          <CardList />
        </div>
      </Container>
    </div>
  );
}

export default Home;
