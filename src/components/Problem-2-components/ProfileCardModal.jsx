import { Button, Modal } from 'react-bootstrap';
const ProfileCardModal = ({ id, phone, country, showModal, handleClose }) => {
  return (
    <Modal show={showModal} fullscreen={'sm-down'} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{country}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Phone: {phone}</h1>
        <h3>ID: {id}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileCardModal;
