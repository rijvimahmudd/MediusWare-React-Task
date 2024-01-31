import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AllContactModal from '../contactModal/AllContactModal';
import UsContactModal from '../contactModal/UsContactModal';

const ModalWrapper = () => {
   const navigate = useNavigate();
    // const {modalType} = useParams();
    // console.log("modalType", modalType);
  return (
    <div>
       {/* {modalType === "all-contacts" && <h1>hello</h1>} */}
       {/* {modalType === "us-contacts" && <UsContactModal {...props} />} */}
       <h1>Zerr</h1>
    </div>
  )
}

export default ModalWrapper