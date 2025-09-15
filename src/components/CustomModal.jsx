import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
  heading,
  show,
  handleClose,
  handleSave,
  buttonText,
  children,
  size,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
