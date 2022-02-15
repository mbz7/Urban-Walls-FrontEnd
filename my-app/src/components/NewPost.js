import React, { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

export default function NewPost() {
  const [show, setShow] = useState(false);
  const [newPost, setNewPost] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
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
          <Form.Control size="sm" type="text" placeholder="Img URL" />
          <Form.Control size="sm" type="text" placeholder="Location" />
          <Form.Control size="sm" type="text" placeholder="Artist" />
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
