import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditModal = ({ edit, setEdit }) => {

    const handleEditClose = () => setEdit(false)

    return (
        <div>
            <Modal
                show={edit}
                onHide={handleEditClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditModal;