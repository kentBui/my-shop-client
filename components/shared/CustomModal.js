import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
  children,
  title,
  header,
  show,
  handleSubmit,
  handleOpen,
  handleClose,
  ...rest
}) => {
  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        {title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
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
