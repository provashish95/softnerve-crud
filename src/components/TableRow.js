import React from 'react';

const TableRow = ({ student, index, setEdit, setIsDelete, setStudentInfo }) => {

    const { name, phone, roll, isClass } = student;

    const handleEdit = () => {
        setEdit(true);
        setStudentInfo(student);
    }

    const handleDelete = () => {
        setIsDelete(true);
        setStudentInfo(student);
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{roll}</td>
            <td>{phone}</td>
            <td>{isClass}</td>
            <td>
                <button onClick={handleEdit} className='btn btn-outline-info m-1'>Edit</button>
                <button onClick={handleDelete} className='btn btn-outline-danger'>Delete</button>
            </td>
        </tr >
    );
};

export default TableRow;