import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";

function CardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hi");
    fetch("http://localhost:9292/post")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  const renderPosts = (l) =>
  <Cards key={l.id} post={l}  setPosts={setPosts} posts={posts} />
  
    return (
      <div>
            <Col className="mx-auto col-lg-6">
            {posts.map((posts) => renderPosts(posts))}
            </Col>
      </div>
    );
  }
  

export default CardList;
