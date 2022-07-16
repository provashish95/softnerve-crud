import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DeleteModal = ({ isDelete, setIsDelete, setIsReload, isReload, studentInfo }) => {

    const { _id } = studentInfo;

    const handleDelete = () => {
        const url = `https://blooming-bayou-78618.herokuapp.com/student/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Deleted')
                setIsReload(!isReload)
                setIsDelete(false)
            })
    }

    const handleDeleteClose = () => setIsDelete(false)

    return (
        <div>
            <Modal
                show={isDelete}
                onHide={handleDeleteClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    Are You sure to delete student info ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DeleteModal;