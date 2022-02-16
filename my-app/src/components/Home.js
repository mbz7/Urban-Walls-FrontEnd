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
        <h1 className="display-4 fw-bold">Recent Posts</h1>
        <hr />
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
