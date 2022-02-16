import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import CardList from "./CardList";
import NewPost from "./NewPost";

function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  //  loggedIn ? console.log("Access Granted") : console.log("Log In");
  useEffect(() => {
    console.log("hi");
    fetch("http://localhost:9292/post")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, [newPost]);

  return (
    <div>
      <Container fluid className="bg-light bkgrnd-img">
        <Col fluid className="container-fluid bg-light text-dark shadow-lg">
          <Col className="container p-5">
            <div className="text-center">
              <img src="./urban_walls_logo.png" className="rounded w-50" alt="Urban Walls Logo" />
            </div>
            <p className="w-50 mx-auto">Welcome to Urban Walls, a community helping showcase artwork, murals, and graffiti found in various urban settings.</p>
            <hr />
            <Col><h5>Create a Post or View the Gallery Below</h5></Col>
            <NewPost setNewPost={setNewPost} />
          </Col>
        </Col>
          
        <Col>
          <CardList posts={posts} setPosts={setPosts} />
        </Col>
      </Container>
    </div>
  );
}

export default Home;
