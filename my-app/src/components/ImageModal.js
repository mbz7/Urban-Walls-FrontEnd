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
        animation={true}
      >
        <Modal.Body className="img-fluid mdl-body">
          <Image className="img-fluid w-100"src={image} />
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
