import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import CardList from "./CardList";
import NewPost from "./NewPost";

function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("hi");
    fetch("http://localhost:9292/post")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, [newPost]);

  const changeSearchStringInState = (searchString) => {
    setSearch(searchString);
  };

  const filteredPost = () => {
    if (search.length > 0) {
      return posts.filter((post) =>
        post.artist.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return posts;
    }
  };

  return (
    <div>
      <Container fluid className="bg-light bkgrnd-img">
        <Col
          fluid
          className="container-fluid bg-light text-dark shadow-lg border-1"
        >
          <Col className="container p-5">
            <div className="text-center">
              <img
                src="./urban_walls_logo.png"
                className="rounded w-50"
                alt="Urban Walls Logo"
              /> 
            </div>
            <h6 className="w-50 mx-auto mt-3 mb-3 h6-c">
              Welcome to Urban Walls, a community helping showcase artwork,
              murals, and graffiti found in various urban settings.
            </h6>
            <hr className="w-75 mx-auto mt-4 mb-2 bg-secondary" />
            <Col>
              <h5 className="w-50 mx-auto mt-4">ADD A POST BELOW</h5>
            </Col>
            <Col className="mx-auto mb-3">
              <NewPost setNewPost={setNewPost} />
            </Col>
          </Col>
        </Col>
        <div className="searchbar">
          <label htmlFor="search">Search Posts: </label>
          <input
            type="text"
            id="search"
            placeholder="Type a Artist to search..."
            onChange={(e) => changeSearchStringInState(e.target.value)}
          />
        </div>

        <Col>
          <CardList posts={filteredPost()} setPosts={setPosts} />
        </Col>
      </Container>
    </div>
  );
}

export default Home;
