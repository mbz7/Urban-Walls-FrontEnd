import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import CardList from "./CardList";
import NewPost from "./NewPost";

function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("new main get");
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
          className="container-fluid header-bk bg-light text-dark shadow-lg border-1"
        >
          <Col className="container p-5">
            <div className="text-center">
              <img
                src="./urban_walls_header_1.png"
                className="w-75 p-5"
                alt="Urban Walls Logo"
              />
            </div>
            <p className=" mx-auto sub-text pl-5 pr-5">
              Welcome to Urban Walls, a community helping showcase artwork,
              murals, and graffiti found in various urban settings.
            </p>
            <hr className="w-75 mx-auto mt-4 mb-4 bg-secondary" />

            <Col className="w-50 mx-auto mt-5 mb-2">
              <Col>
                <div className="p-1 mt-4">
                  <label htmlFor="search">
                    <h2>Search Posts</h2>
                  </label>
                </div>
              </Col>
              <div>
                <input
                  className="form-control rounded p-2"
                  type="text"
                  id="search"
                  placeholder="Search Posts For An Artist..."
                  onChange={(e) => changeSearchStringInState(e.target.value)}
                />
              </div>
            </Col>
            <Col>
              <h3 className="w-50 mx-auto mt-4">Or</h3>
            </Col>
            <Col className="mx-auto mb-3">
              <NewPost setNewPost={setNewPost} />
            </Col>
          </Col>
        </Col>

        <Col>
          <CardList posts={filteredPost()} setPosts={setPosts} />
        </Col>
      </Container>
    </div>
  );
}

export default Home;
