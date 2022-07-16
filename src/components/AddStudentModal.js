import React, { useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddStudentModal = ({ show, setShow, setIsReload, isReload }) => {
    const nameRef = useRef('');
    const rollRef = useRef('');
    const phoneRef = useRef('');
    const classRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const roll = rollRef.current.value;
        const phone = phoneRef.current.value;
        const isClass = classRef.current.value;

        fetch('https://blooming-bayou-78618.herokuapp.com/student', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name, roll, phone, isClass
            }),
        })
            .then((response) => response.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product added Successfully')
                    setIsReload(!isReload)
                    e.target.reset();
                } else {
                    toast.error('Product not added Successfully')
                }
            })
    }


    const handleClose = () => setShow(false);

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <h5 className='text-center'>Add Student Info</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input ref={nameRef} type="text" className="form-control" aria-describedby="NameHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputRoll" className="form-label">Roll</label>
                            <input ref={rollRef} type="text" className="form-control" aria-describedby="RollHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                            <input ref={phoneRef} type="text" className="form-control" aria-describedby="PhoneHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputClass" className="form-label">Class</label>
                            <input ref={classRef} type="text" className="form-control" aria-describedby="ClassHelp" required />
                        </div>

                        <div className='text-center'>
                            <button type="submit" className="btn btn-outline-info m-2">Add</button>
                            <button onClick={handleClose} className="btn btn-outline-dark">Close</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddStudentModal;