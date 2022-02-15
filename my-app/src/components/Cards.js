import React, { useState } from "react";
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

function Cards({ artist, photo, location, date, likes, posts, setPosts, post }) {

  const [postLikes, setPostLikes] = useState()

  function handleDeleteClick() {
    console.log("test")
    fetch(`http://localhost:9292/post/${post.id}`, {
      method: "DELETE"
    })
    .then(() => handleDeletePost(post.id))
    
  }

  function handleDeletePost(id) {
    const updatedPosts = posts.filter((post) => {
      return post.id !== id
    })
    setPosts(updatedPosts)

    
  
  }


  function handleLikes() {
    
    setPostLikes(postLikes + 1)

    fetch(`http://localhost:9292/post/${post.id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({likes: post.likes + 1})
    })
  
  .then((res) => res.json())
  .then((updatedItem) => handleUpdateLikes(updatedItem))
  }

  function handleUpdateLikes(updatedItem) {
    const updatedItems = posts.map((post) => {
      if(post.id === updatedItem.id) {
        return updatedItem;
      } else {
        return post;
      }
    });
    setPosts(updatedItems);
    
  }


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
            src={post.photo_url}
            alt={post.artist}
          />

          <Card.Title>
            <h3 className="text-uppercase mt-2">{post.artist}</h3>
            <b>{post.location}</b>
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
          <Row>
            <Col className="p-1 col-4">
            <button onClick={handleLikes} className="btn btn-outline-danger w-25 d-flex gap-2 p-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
                
              </button>
            </Col>
            <Col className="col-2">
              {post.likes} likes
            </Col>
          </Row>
          <Row>
            <Col>
              <Button  onClick={handleDeleteClick} className="btn-danger">DELETE</Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Cards;
