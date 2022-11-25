import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchUserService, UserDeleteService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';
import AllocationModel from './AllocationModel';

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
        <div>
            <div>
                <div>
                    <h2 style={{marginLeft:'40px'}}>View Allocation</h2>
                </div>
                <form>
                    <hr/>
                    <div style={{display:'flex',alignItems:'center',marginTop:'20px',marginLeft:'80px'}}>
                        <label style={{marginLeft:'20px', marginRight:'40px'}}>Date From :</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChangeDate}
                                renderInput={(params) => <TextField {...params} />}/>
                            </Stack>
                        </LocalizationProvider>
                        <label style={{marginLeft:'20px', marginRight:'85px'}}> To</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChangeDate}
                                renderInput={(params) => <TextField {...params} />}/>
                            </Stack>
                        </LocalizationProvider>
                        <Button style={{marginLeft:'50px'}} variant="contained" onClick={handleModalOpen}>Contained</Button>
                    </div>
                </form>
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
                    setRefresh={setRefresh}/>
                    
                    <NotificationBar
                    handleClose={handleClose}
                    notificationContent={openNotification.message}
                    openNotification={openNotification.status}
                    type={openNotification.type}/>
                </div>
            </div>
        </div>
    )
}

export default AllocationList
