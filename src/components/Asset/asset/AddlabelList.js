import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import Addlabel from './Addlabel';
import { FetchAssetLableService, UserDeleteService } from '../../../services/ApiServices';

const AddlabelList = () => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh , setRefresh]=useState(false);
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 40 },
        { field: 'employee_id', headerName: 'Department	', width: 100 },
        { field: 'employee_name', headerName: 'Section	', width: 120 },
        { field: 'department', headerName: 'Asset Type	', width: 120 },
        { field: 'designation', headerName: 'Asset Id	', width: 120 },
        { field: 'mobile_number', headerName: 'Code	', width: 120 },
        { field: 'email', headerName: 'Date', width: 120 },
        { field: 'user_name', headerName: '	Asset Name', width: 120 },
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
        FetchAssetLableService(handleFetchSuccess, handleFetchException);
       
    }, [refresh]);

    const handleFetchSuccess = (dataObject) =>{
        setRows(dataObject.data);
    }

    const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }

    const handleClose = () => {
        setOpen(false)
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
        <div style={{display:'flex'}}>
            <h3 style={{ marginLeft: '50px' }}> VIEW ASSET TABLE</h3>
            <Button style={{marginLeft:'63%',width:'120px',height:'30px',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
            Add Label
            </Button>
            </div>
            <hr style={{ bottom: 'solid' }} />
          
            <div style={{ height: '500px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <Addlabel
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

export default AddlabelList
