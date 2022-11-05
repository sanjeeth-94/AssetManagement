import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import UserModel from './UserModel';
import { FetchUserService, UserDeleteService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';

const UserList = (props) => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh , setRefresh]=useState(false)
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 80 },
        { field: 'employee_id', headerName: 'Employee Id', width: 140 },
        { field: 'employee_name', headerName: 'Employee Name', width: 140 },
        { field: 'department', headerName: 'Department', width: 140 },
        { field: 'designation', headerName: 'Designation', width: 140 },
        { field: 'mobile_number', headerName: 'Mobile', width: 140 },
        { field: 'email', headerName: 'Email', width: 140 },
        { field: 'user_name', headerName: 'UserName', width: 140 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <EditData selectedRow={params.row} />,
            <DeleteData selectedRow={params.row} />,
        ],
        }
    ];
    
    useEffect(() => {
        FetchUserService(handleFetchSuccess, handleFetchException);
      
    }, [refresh]);

    const handleFetchSuccess = (dataObject) =>{
        setRows(dataObject.data);
    }

    const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }

    const handleClose = () => {
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };

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
            }}>
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
                }
                }>
                Delete
            </Button>
        )
    }
    
    const deletUser = (id) => {
        UserDeleteService({id}, handleDeleteSuccess, handleDeleteException);
    }

    const handleDeleteSuccess = (dataObject) =>{
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setNotification({
            status: true,
            type: 'success',
            message: dataObject.message,
          });
    }

    const handleDeleteException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
        setNotification({
            status: true,
            type: 'error',
            message:errorMessage,
          });
    }

    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
       
    };

    return (
        <div>
            <h1 style={{ marginLeft: '50px' }}>Manage user</h1>
            <hr style={{ bottom: 'solid' }} />
            <Button style={{marginLeft:'83%',width:'120px',height:'30px'}} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <div style={{ height: '500px', width: '90%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <UserModel 
                open={open}
                setOpen={setOpen}
                isAdd={isAdd}
                editData={editData}
                setRefresh={setRefresh}
            />
                 <NotificationBar
                    handleClose={handleClose}
                    notificationContent={openNotification.message}
                    openNotification={openNotification.status}
                    type={openNotification.type}
                />
        </div>
    )
}

export default UserList
