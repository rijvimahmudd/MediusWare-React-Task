import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AllContactModal from '../contactModal/AllContactModal';
import UsContactModal from '../contactModal/UsContactModal';

const ModalWrapper = () => {
    const {name} = useParams();
    const [show, setShow] = useState(true);
    
  return (
    <div>
       {name === "all-contacts" && <AllContactModal  show={show} setShow={setShow} navigate={true}/>}
       {name === "us-contacts" && <UsContactModal show={show} setShow={setShow} navigate={true} />}

    </div>
  )
}

export default ModalWrapper