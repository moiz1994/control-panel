import { Button, Modal } from "react-bootstrap";

const ConfirmModal = ({
  show,
  handleClose,
  heading,
  handleConfirm,
  negativeText,
  positiveText,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-evenly align-items-center">
          <Button variant="danger" onClick={handleClose}>
            {negativeText}
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            {positiveText}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmModal;
