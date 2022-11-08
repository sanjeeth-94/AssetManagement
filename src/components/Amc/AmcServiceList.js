import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchAmcServiceListService, AmcServiceDeleteService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';
import AmcServiceModel from './AmcServiceModel';
import ServiceAmc from './ServiceAmc';

const AmcServiceList = () => {
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
        { field: 'Serial No', headerName: 'Serial No', width: 80 },
        { field: 'Vender Name', headerName: 'Vender Name', width: 140 },
        { field: 'Period From', headerName: 'Period From', width: 140 },
        { field: 'Period To', headerName: 'Period To', width: 140 },
        { field: 'ServicePattern', headerName: 'Service Pattern', width: 140 },
        { field: 'Department', headerName: 'Department', width: 140 },
        { field: 'Section', headerName: 'Section', width: 140 },
        { field: 'Asset Type', headerName: 'Asset Type', width: 140 },
        { field: 'Asset Name', headerName: 'Asset Name', width: 140 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <EditData selectedRow={params.row} />,
            <DeleteData selectedRow={params.row} />,
        ],
        }
      ];
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
                deleteAmc(selectedRow.id)
                }
                }>
                Delete
            </Button>
        )
    }
    
    const deleteAmc = (id) => {
        AmcServiceDeleteService ({id}, handleDeleteSuccess, handleDeleteException);
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
    const handleServiceModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
       
    };
    useEffect(() => {
        FetchAmcServiceListService(handleFetchSuccess, handleFetchException);
       
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
      
  return (
    <div>
         <h2 style={{ marginLeft: '50px' }}> AMC</h2>
            <hr style={{ bottom: 'solid' }} />
        <div style={{display:'flex', marginLeft:'50%', marginTop:'10px'}}>
            <Button style={{width:'120px',height:'30px'}} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <Button style={{width:'120px',height:'30px',marginLeft:'20px'}} variant="outlined" onClick={handleModalOpen}>
                Service
            </Button>
            <Button style={{width:'120px',height:'30px',marginLeft:'20px'}} variant="outlined" onClick={handleServiceModalOpen}>
               Service Due
            </Button>
            <Button style={{width:'120px',height:'30px',marginLeft:'20px'}} variant="outlined" onClick={handleModalOpen}>
               Amc Renewal
            </Button>
        </div>
         <div style={{ height: '500px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
            <DataGrid
            rows={rows}
            columns={columns} />
       </div>
            <AmcServiceModel 
                open={open}
                setOpen={setOpen}
                isAdd={isAdd}
                editData={editData}
                setRefresh={setRefresh}
            />
             <ServiceAmc 
                open={open}
                setOpen={setOpen}
                isAdd={isAdd}
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

export default AmcServiceList
