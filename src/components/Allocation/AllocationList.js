import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchUserService, UserDeleteService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';
import AllocationModel from './AllocationModel';
import { Grid } from '@mui/material';

const AllocationList = () => {
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
const [value, setValue] = useState(dayjs('2022-08-18T21:11:54'));

const handleChangeDate = (newValue) => {
    setValue(newValue);
};

const columns = [
    { field: 'department', headerName: 'Department', width: 180 },
    { field: 'section', headerName: 'Section', width: 180 },
    { field: 'assetType', headerName: 'Asset Type', width: 180 },
    { field: 'assetName', headerName: 'Asset Name', width: 180 },
    { field: 'assetId', headerName: 'Asset Id', width: 120 },
    { field: 'assignedUser', headerName: 'Assigned User', width: 180 },
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
    <>
        <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} lx={6}style={{
                    alignSelf: 'center',
                    textAlignLast: 'center'
                }}>
            <h3 > View Allocation</h3>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} lx={6} style={{
                    alignSelf: 'center',
                    textAlignLast: 'center'
                }}>
            <Button  
                styel={{width:'200px', height:'30px',alignSelf: 'center',
                textAlignLast: 'center'}} 
                variant="contained" 
                onClick={handleModalOpen}
                >Add
            </Button>
            </Grid>

        </Grid>
        <hr/>
        <Grid container style={{width:'100%'}}>
            
            <form style={{width:'100%'}}>
            <Grid  container spacing={2}  style={{marginTop:'20px',marginLeft:'20px'}}>

                <Grid item xs={12} sm={3} md={3} lg={1.5} xl={3}
                   style={{
                    alignSelf: 'center',
                    textAlignLast: 'center'
                }}>
                <label style={{width:'100%'}}>Date From :</label>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3.5} xl={3}>
                <TextField
                    fullWidth
                 type="date" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={3} md={1} lg={1.5} xl={3}
                 style={{
                    alignSelf: 'center',
                    textAlignLast: 'center'
                }}>
          
                <label > To</label>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3.5} xl={3}>
                <TextField 
                    fullWidth
                    type="date" 
                    variant="outlined"
                />
                </Grid>
                 <Grid item xs={12} sm={3} md={1} lg={1} xl={1} 
                  style={{
                    alignSelf: 'center',
                    textAlignLast: 'center'
                }}
                 >
                <Button  
                styel={{width:'200px', height:'30px',alignSelf: 'center',
                textAlignLast: 'center'}} 
                variant="contained" 
              
                >View
            </Button>
                </Grid> 

            </Grid>
            </form>
        </Grid>

        <div>
       
        <div>
            <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '30px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <AllocationModel
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
        </div>
      
    </>
  )
}

export default AllocationList
