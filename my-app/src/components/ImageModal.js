import React from "react";
import { Modal, Image } from "react-bootstrap";

export default function ImageModal({ modalShow, setModalShow, image }) {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="lightbox-image img-fluid">
          <Image className="img-fluid"src={image} />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
