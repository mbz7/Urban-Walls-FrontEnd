import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import moment from "moment";

export default function NewPost({ setNewPost }) {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [artist, setArtist] = useState("");
  const [user, setUser] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    let date_moment = moment(new Date, "ddd MMM DD YYYY HH:mm");
    fetch("http://localhost:9292/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photo_url: img,
        location: location,
        artist: artist,
        user_name: user,
        post_date: date_moment,
      }),
    })
      .then((r) => r.json())
      .then((post) => setNewPost(post));
    handleClose();
  }

  return (
    <div>
      <Button
        variant="success"
        size="lg"
        className="mt-3 new-post-btn"
        onClick={handleShow}
      >
        {" "}
        Create New Post{" "}
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>Post New Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <Form.Label htmlFor="inputPassword5">IMAGE URL</Form.Label>
            <Form.Control
              onChange={(e) => setImg(e.target.value)}
              size="sm"
              type="text"
              placeholder="Img URL"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">LOCATION</Form.Label>
            <Form.Control
              onChange={(e) => setLocation(e.target.value)}
              size="sm"
              type="text"
              placeholder="Location"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">ARTISTS</Form.Label>
            <Form.Control
              onChange={(e) => setArtist(e.target.value)}
              size="sm"
              type="text"
              placeholder="Artist"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">POSTED BY</Form.Label>
            <Form.Control
              onChange={(e) => setUser(e.target.value)}
              size="sm"
              type="text"
              placeholder="Name"
              className="p-2 mb-3"
            />
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer className="bg-light btn-large">
          <Button
            className=" mx-auto btn-lg"
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
