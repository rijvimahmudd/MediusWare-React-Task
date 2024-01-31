import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfileCardModal = () => {
    const location = useLocation();
    const data = location.state && location.state.data;
    const [show, setShow] = useState(data?.show);
    const navigate = useNavigate();

    return (
        <Modal show={show} fullscreen={'sm-down'} onHide={() => setShow(false)}>
            <Modal.Header>
                <Modal.Title>{data.country.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Phone : {data.phone}</h1>
                <h3> id : {data.id}</h3>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShow(false);
                        // Use navigate to go back to the previous URL
                        navigate(-1);
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProfileCardModal;
