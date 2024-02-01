import React,{useState, useEffect} from 'react';
import AllContactModal from './contactModal/AllContactModal';
import UsContactModal from './contactModal/UsContactModal';
import ModalWrapper from './Problem-2-components/ModalWrapper';
import { Link, useLocation } from 'react-router-dom';

const Problem2 = () => {
      const location = useLocation();
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
                    <Link to="/modal/all-contacts" state={{ background: location}}>
                      <button  className="btn btn-lg btn-outline-primary" type="button">
                        All Contacts
                      </button>
                    </Link>
                    <Link to="/modal/us-contacts" state={{ background: location}}>
                      <button  className="btn btn-lg btn-outline-warning" type="button">
                        US Contacts
                      </button>
                    </Link>
                    {/* <button  className="btn btn-lg btn-outline-primary" type="button" onClick={handleShow(setAllShow)}>
                        All Contacts
                      </button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleShow(setUSShow)}>
                      US Contacts
                    </button> */}

                  </div>
                  
              </div>

              <div>
              

              <AllContactModal show={allShow} setShow={setAllShow}/>
              <UsContactModal show={USShow} setShow={setUSShow}/>

              {/* <ModalWrapper/> */}
            </div>
        </div>
    );
};

export default Problem2;