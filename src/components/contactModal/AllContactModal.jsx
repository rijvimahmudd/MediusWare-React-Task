import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Modal } from '../Problem-2-components';

const AllContactModal = ({show, setShow}) => {
    const { filteredData, handleChange, nextPage, loading, error, fetchMoreData, hasMore } = useFetch(
        'https://contact.mediusware.com/api/contacts/'
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
        />
    </div>
  )
}

export default AllContactModal;