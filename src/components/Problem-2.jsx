import React,{useState, useEffect} from 'react';
import ModalA from './Problem-2-components/Modal';
import axios from "axios"

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);
  const [UScontacts, setUSContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filteredUSContacts, setFilteredUSContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);
  const [allShow, setAllShow] = useState(false);
  const [USShow, setUSShow] = useState(false);

  function handleShow() {
    setAllShow(true);
  }

  function handleUsModalShow() {
    setUSShow(true);
  }

  useEffect(() => {
    // Fetch contacts from the API when the component mounts
    axios.get('https://contact.mediusware.com/api/contacts/').then((response) => {
      setContacts([...response.data?.results]);
    });
  }, []);

  useEffect(() => {
    // Fetch contacts from the API when the component mounts
    axios.get('https://contact.mediusware.com/api/country-contacts/United%20States/').then((response) => {
      setUSContacts([...response.data?.results]);
    });
}, []);

  useEffect(() => {
    // Filter contacts based on the even ID condition
    setFilteredContacts(contacts.filter(contact => !onlyEven || contact.id % 2 === 0));
  }, [contacts, onlyEven]); 
   useEffect(() => {
    // Filter contacts based on the even ID condition
    setFilteredUSContacts(UScontacts.filter(contact => !onlyEven || contact.id % 2 === 0));
  }, [UScontacts, onlyEven]);

  const handleChange = () => {
    // Toggle the 'Only even' checkbox state
    setOnlyEven(prevState => !prevState);
  };

  

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button  className="btn btn-lg btn-outline-primary" type="button" onClick={handleShow}>All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleUsModalShow}>US Contacts</button>
                </div>
                
            </div>

            <div>
            <ModalA
               setShow={setAllShow}
               show={allShow}
               filteredContacts={filteredContacts}
               onCheckboxChange = {handleChange}
              >
            </ModalA>

            <ModalA
              setShow={setUSShow}
              show={USShow}
              filteredContacts={filteredUSContacts}
              onCheckboxChange = {handleChange}
            ></ModalA>
    </div>
        </div>
    );
};

export default Problem2;