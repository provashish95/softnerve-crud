import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const Home = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);


    const handleShow = () => setShow(true);

    const handleEdit = () => setEdit(true);

    const handleDelete = () => setIsDelete(true);

    return (
        <main className='container py-5'>
            <h5 className='text-center'>All Students</h5>
            <div className='table-responsive'>
                <table className="table table-hover border border-1 border-dark text-center">
                    <thead >
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Roll</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Class</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>g</td>
                            <td>dsdg</td>
                            <td>dfsdsfs</td>
                            <td>dfgdfgdgdgdfgdgd.</td>
                            <td>
                                <button onClick={handleEdit} className='btn btn-outline-info m-1'>Edit</button>
                                <button onClick={handleDelete} className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr >
                    </tbody>
                </table>
            </div>
            <div className='text-center'>
                <button onClick={handleShow} className='btn btn-outline-info'>Add Student</button>
            </div>

            <AddStudentModal show={show} setShow={setShow}></AddStudentModal>
            <EditModal edit={edit} setEdit={setEdit}></EditModal>
            <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete}></DeleteModal>
        </main>
    );
};

export default Home;