import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import Addlabel from './Addlabel';
import { AssetLabelDeletService, FetchAssetLableService, UserDeleteService } from '../../../services/ApiServices';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import QrCode from './QrCode';

const AddlabelList = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh , setRefresh]=useState(false);
    const [loading, setLoading]=useState(true);
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 40 },
        { field: 'department', headerName: 'Department	', width: 100 },
        { field: 'section', headerName: 'Section	', width: 120 },
        { field: 'assetType', headerName: 'Asset Type	', width: 120 },
        { field: 'selectAssetId', headerName: 'Asset Id	', width: 120 },
        { field: 'code', headerName: 'Code	', width: 120 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'assetName', headerName: '	Asset Name', width: 120 },
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
        setLoading(false);
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
            <RemoveRedEyeIcon
            className='prbuton'
            variant="contained"
            color='primary'
            onClick={() => {      
                setOpen1(true);
                setEditData(selectedRow)
            }}/>
                
        )
    }
    
    function DeleteData({ selectedRow }) {
        return (
            <DeleteIcon
            variant="contained"
            color='primary'
            onClick={() => {
                deletUser(selectedRow.id)
                }
                }/>
            
        )
    }
    
    const deletUser = (id) => {
        AssetLabelDeletService({id}, handleDeleteSuccess, handleDeleteException);
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
          
            <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                loading={loading}
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
            <QrCode
                open1={open1}
                setOpen1={setOpen1}
                editData={editData}
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
