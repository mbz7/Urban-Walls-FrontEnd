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

  return (
    <div>
          <Col className="mx-auto col-lg-6">
            {posts.map((post) => (
              <Cards
                key={post.id}
                photo={post.photo_url}
                artist={post.artist}
                location={post.loacation}
                date={post.post_date}
                likes
              />
            ))}
          </Col>
    </div>
  );
}

export default CardList;
