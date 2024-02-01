import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Modal } from '../Problem-2-components';

const UsContactModal = ({show, setShow, navigate}) => {
    const { filteredData, handleChange, nextPage, loading, error, fetchMoreData, hasMore } = useFetch(
        'https://contact.mediusware.com/api/country-contacts/United%20States/'
      );

  return (
    <div>
        <Modal 
            show={show}
            setShow={setShow}
            filteredContacts={filteredData}
            hasMore={hasMore}
            next={nextPage}
            fetchMoreData={fetchMoreData}
            onCheckboxChange={handleChange}
            navigate = {navigate}
        />
    </div>
  )
}

export default UsContactModal