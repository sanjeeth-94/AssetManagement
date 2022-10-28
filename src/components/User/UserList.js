import React, { useEffect, useState } from 'react';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import UserModel from './UserModel';


const UserList = (props) => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [employeeId, setemployeeId] = useState('');
    const [employeeName, setemployeeName] = useState('');
    const [department, setdepartment] = useState('');
    const [designation, setdesignation] = useState('');
    const [mobile_number, setmobile_number] = useState('')
    const [emailId, setemailId] = useState('');
    const [userName, setuserName] = useState('');
    const url = `http://192.168.1.174:8000/api/user/${editData.id}/update`
    const [departmentList, setDepartmentList] = useState([])   

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 80 },
        { field: 'employee_id', headerName: 'Employee Id', width: 140 },
        { field: 'employee_name', headerName: 'Employee Name', width: 140 },
        { field: 'department', headerName: 'Department', width: 140 },
        { field: 'designation', headerName: 'Designation', width: 140 },
        { field: 'mobile_number', headerName: 'Mobile', width: 140 },
        { field: 'email', headerName: 'Email', width: 140 },
        { field: 'user_name', headerName: 'UserName', width: 140 },
        {
            field: 'action', headerName: 'Action', width: 250, sortable: false,
            cellClassname: 'actions',
            type: 'actions',
            getActions: (params) => [
                <EditData selectedRow={params.row} />,
                <DeleteData selectedRow={params.row} />,
            ],

        }
    ];

    useEffect(() => {
        fetch("http://192.168.1.174:8000/api/user/showData",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then((dataObject) => {
                setRows(dataObject.data);
            })
    }, []);

    function EditData({ selectedRow }) {
        return (
            <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
                className='prbuton'
                variant="contained"
                color='primary'
                onClick={() => {
                    setIsAdd(false);
                    setEditData(selectedRow);
                    setOpen(true);
                }}
            >
                Edit
            </Button>
        )
    }

    function DeleteData({ selectedRow }) {
        return (
            <Button style={{ width: '100px' }}
                variant="contained"
                color='primary'
                onClick={() => {
                    deletUser(selectedRow.id)
                    console.log(selectedRow.id);
                }
                }
            >
                Delete
            </Button>
        )
    }

    const deletUser = (id) => {
        alert('Delete ' + id);
        console.log('DELLETT', id)
        fetch(`http://192.168.1.174:8000/api/user/${id}/delete`,
            {
                method: 'POST',
            }).then((result) => {
                result.json().then((responce) => {
                    console.log(id)
                })
            })
    }

    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
    };

    return (
        <div>
            <h1 style={{ marginLeft: '50px' }}>Manage user</h1>
            <hr style={{ bottom: 'solid' }} />
            <Button variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <div style={{ height: '500px', width: '90%', marginLeft: '30px', marginTop: '20px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns} />

            </div>
            <UserModel 
                open={open}
                setOpen={setOpen}
                isAdd={isAdd}
                editData={editData}
            />
        </div>
    )

}

export default UserList
