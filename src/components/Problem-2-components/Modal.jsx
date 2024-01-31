import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useNavigate } from 'react-router-dom';

function ContactModal({show, setShow, filteredContacts, onCheckboxChange, fetchMoreData, next, hasMore}) {
  const navigate = useNavigate()
  return (
    <>
      <Modal show={show} fullscreen={'xxl-down'} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div id='scrollableDiv' style={{ height: '68vh', overflow: 'auto' }}> 
        <InfiniteScroll 
          dataLength={filteredContacts?.length}
          next={()=>fetchMoreData(next)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts?.map((contact) => (
                    // <Link to={`/contact/${contact.id}`} key={contact.id} relative='path' className='d-inline-block w-100'>
                <tr key={contact.id} onClick={() => navigate(`/contact/${contact.id}`, {state: {data: {...contact, show: true}}})} style={{cursor: 'pointer'}} >
                    <td>{contact.id}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.country.name}</td>
                  </tr>
                    // </Link>
              ))}
            </tbody>
          </table>
          </InfiniteScroll>
        </div>
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

export default ContactModal;