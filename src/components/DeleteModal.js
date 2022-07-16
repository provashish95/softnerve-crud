import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteModal = ({ isDelete, setIsDelete }) => {

    const handleDeleteClose = () => setIsDelete(false)

    return (
        <div>
            <Modal
                show={isDelete}
                onHide={handleDeleteClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DeleteModal;