import React, { useEffect, useState } from 'react';
import AddStudentModal from './AddStudentModal';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import TableRow from './TableRow';

const Home = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isReload, setIsReload] = useState(false);
    const [students, setStudents] = useState();
    const [studentInfo, setStudentInfo] = useState({});

    useEffect(() => {
        const url = `https://blooming-bayou-78618.herokuapp.com/student`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setStudents(data);
            })
    }, [isReload]);

    const handleShow = () => setShow(true);



    return (
        <main className='container py-5'>
            <h5 className='text-center'>All Students</h5>
            <div className='table-responsive'>
                <table className="table table-hover border border-1 border-dark text-center">
                    <thead>
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
                        {
                            students?.map((student, index) => <TableRow key={student._id} student={student} index={index} setEdit={setEdit} setIsDelete={setIsDelete} setStudentInfo={setStudentInfo}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='text-center'>
                <button onClick={handleShow} className='btn btn-outline-info'>Add Student</button>
            </div>

            <AddStudentModal show={show} setShow={setShow} setIsReload={setIsReload} isReload={isReload}></AddStudentModal>
            <EditModal edit={edit} setEdit={setEdit} setIsReload={setIsReload} isReload={isReload} studentInfo={studentInfo}></EditModal>
            <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} setIsReload={setIsReload} isReload={isReload} studentInfo={studentInfo}></DeleteModal>
        </main>
    );
};

export default Home;