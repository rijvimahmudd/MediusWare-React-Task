import { useState, useEffect } from "react";
import axios from "axios";
const useContacts = (countryEndpoint) => {
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);
  
    useEffect(() => {
      // Fetch contacts from the API when the component mounts
      axios.get(countryEndpoint).then((response) => {
        setContacts([...response.data?.results]);
      });
    }, [countryEndpoint]);
  
    useEffect(() => {
      // Filter contacts based on the even ID condition
      setFilteredContacts(contacts.filter((contact) => !onlyEven || contact.id % 2 === 0));
    }, [contacts, onlyEven]);
  
    const handleChange = () => {
      // Toggle the 'Only even' checkbox state
      setOnlyEven((prevState) => !prevState);
    };
  
    return { filteredContacts, handleChange };
  };

  export default useContacts;