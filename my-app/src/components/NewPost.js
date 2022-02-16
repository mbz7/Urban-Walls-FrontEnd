import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

export default function NewPost({ setNewPost }) {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [artist, setArtist] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    fetch("http://localhost:9292/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photo_url: img,
        location: location,
        artist: artist,
      }),
    })
      .then((r) => r.json())
      .then((post) => setNewPost(post));

    handleClose();
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        {" "}
        Create Post{" "}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post New Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <Form.Control
              onChange={(e) => setImg(e.target.value)}
              size="sm"
              type="text"
              placeholder="Img URL"
            />
            <Form.Control
              onChange={(e) => setLocation(e.target.value)}
              size="sm"
              type="text"
              placeholder="Location"
            />
            <Form.Control
              onChange={(e) => setArtist(e.target.value)}
              size="sm"
              type="text"
              placeholder="Artist"
            />
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
