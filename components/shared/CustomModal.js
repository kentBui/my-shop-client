import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
  item,
  show,
  handleSubmit,
  handleOpen,
  handleClose,
  ...rest
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
