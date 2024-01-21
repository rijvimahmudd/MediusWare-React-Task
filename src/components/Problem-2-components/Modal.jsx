import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalA({show, setShow, filteredContacts, onCheckboxChange}) {
  return (
    <>
      <Modal show={show} fullscreen={'xxl-down'} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.country.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={onCheckboxChange}/>
        <InputGroup.Text id="basic-addon1">Only even</InputGroup.Text>
      </InputGroup>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalA;