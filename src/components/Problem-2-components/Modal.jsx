import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCardModal from './ProfileCardModal';
import { useState } from 'react';

function ContactModal({show, setShow, filteredContacts, onCheckboxChange, fetchMoreData, next, hasMore, navigate=false}) {
  const [profileShow, setProfileShow] = useState(false);
  const [profileData, setProfileData] = useState({});
  const goBack = useNavigate();
  const handleShow = (e, state={}) => {
    e.preventDefault();
    e.stopPropagation()
    setProfileShow(true);
    setProfileData(state);
    console.log(state);
  }

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProfileShow(false);
  }
  return (
    <>
      <Modal show={show} fullscreen={'md-down'} onHide={() => {
        if(navigate) {
          goBack(-1);
          setShow(false)
        }
        else
          setShow(false)
      }}>
        <Modal.Header closeButton>
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
                <tr key={contact.id} onClick={(e) => handleShow(e, contact)} style={{cursor: 'pointer'}} >
                  <td>{contact.id}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.country.name}</td>        
                </tr> 
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
          <Button variant="secondary" onClick={() => {
            if(navigate) {
              setShow(false);
              goBack(-1);
            }
            else{
              setShow(false);
            }
            
          }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {profileData && <ProfileCardModal id={profileData?.id} phone={profileData?.phone} country={profileData?.country?.name} showModal={profileShow} handleClose={handleClose} /> }
    </>
  );
}

export default ContactModal;