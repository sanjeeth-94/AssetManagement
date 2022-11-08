import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchDepartmentListService , DepartmentDeleteService  } from '../../../services/ApiServices';
import DepartmentModel from './DepartmentModel';
import NotificationBar from '../../../services/NotificationBar';

const DepartmentList = () => {
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
        { field: 'id', headerName: 'Dep No', width: 120 },
        { field: 'department_name', headerName: 'Department Name', width: 180 },
        { field: 'description', headerName: 'Description', width: 220 },
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
        FetchDepartmentListService(handleFetchSuccess, handleFetchException);
       
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
                deleteDepartment(selectedRow.id)
            }}>
              Delete
            </Button>
        )
    }
    
    const deleteDepartment = (id) => {
        DepartmentDeleteService ({id}, handleDeleteSuccess, handleDeleteException);
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
            message: errorMessage,
          });
    }

    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
       
    };
    
    
  
    return (
        <div>
            <h1 style={{ marginLeft: '50px' }}>Department</h1>
            <hr style={{ bottom: 'solid' }} />
            <Button style={{marginLeft:'83%',width:'120px',height:'30px'}} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <div style={{ height: '500px', width: '90%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <DepartmentModel 
             open={open}
             setOpen={setOpen}
             isAdd={isAdd}
             editData={editData}
             setRefresh={setRefresh}/>

                <NotificationBar
                    handleClose={handleClose}
                    notificationContent={openNotification.message}
                    openNotification={openNotification.status}
                    type={openNotification.type}
                />
        </div>
    )
}

export default DepartmentList;
