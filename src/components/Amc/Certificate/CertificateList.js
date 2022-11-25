import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import CretificateModel from './CretificateModel';
import { FetchCertificateService } from '../../../services/ApiServices';

const CertificateList = () => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [isService, setIsService] = useState(false);
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
        { field: 'vendorName', headerName: 'Vender Name', width: 140 },
        { field: 'certificateDate', headerName: 'Period From', width: 140 },
        { field: 'expireDate', headerName: 'Period To', width: 140 },
        { field: 'inspectionPattern', headerName: 'Inspection Pattern', width: 140 },
        { field: 'department', headerName: 'Department', width: 140 },
        { field: 'section', headerName: 'Section', width: 140 },
        { field: 'assetType', headerName: 'Asset Type', width: 140 },
        { field: 'assetName', headerName: 'Asset Name', width: 140 },
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
        setIsAdd(false);
        setIsService(true);
        setOpen(true);  
    };

    useEffect(() => {
        FetchCertificateService(handleFetchSuccess,handleFetchException)  
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
        <div style={{border:'solid',borderColor:'whitesmoke'}}>
            <div style={{display:'flex', marginLeft:'40px',}}>
                <h3 style={{ marginLeft: '60px' }}> INSPECTION</h3>
                <Button style={{width:'120px',height:'30px', marginLeft:'60%',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
                    Add
                </Button>
            </div>
            <hr style={{ bottom: 'solid' , borderColor:'whitesmoke'}} />
            <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <CretificateModel
            open={open}
            setOpen={setOpen}
            isAdd={isAdd}
            isService={isService}
            editData={editData}
            setRefresh={setRefresh}/>
            <NotificationBar
            handleClose={handleClose}
            notificationContent={openNotification.message}
            openNotification={openNotification.status}
            type={openNotification.type}/>
        </div>
    )
}

export default CertificateList
