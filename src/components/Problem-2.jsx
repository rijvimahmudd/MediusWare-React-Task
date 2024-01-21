import React,{useState, useEffect} from 'react';
import ModalA from './Problem-2-components/Modal';
import useContacts from '../hooks/useContact';

const Problem2 = () => {

    const { filteredContacts: allFilteredContacts, handleChange: handleAllChange } = useContacts(
        'https://contact.mediusware.com/api/contacts/'
      );
      const { filteredContacts: usFilteredContacts, handleChange: handleUSChange } = useContacts(
        'https://contact.mediusware.com/api/country-contacts/United%20States/'
      );
    
      const [allShow, setAllShow] = useState(false);
      const [USShow, setUSShow] = useState(false);
    
      const handleShow = (setter) => () => {
        setter(true);
      };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button  className="btn btn-lg btn-outline-primary" type="button" onClick={handleShow(setAllShow)}>All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleShow(setUSShow)}>
  US Contacts
</button>

                </div>
                
            </div>

            <div>
            <ModalA
               setShow={setAllShow}
               show={allShow}
               filteredContacts={allFilteredContacts}
               onCheckboxChange = {handleAllChange}
              >
            </ModalA>

            <ModalA
              setShow={setUSShow}
              show={USShow}
              filteredContacts={usFilteredContacts}
              onCheckboxChange = {handleUSChange}
            ></ModalA>
    </div>
        </div>
    );
};

export default Problem2;