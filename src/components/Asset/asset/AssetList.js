import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { AssetDeleteService, FetchAssetListService,FetchSectionService } from '../../../services/ApiServices';
import AssetModel from './AssetModel';
import NotificationBar from '../../../services/NotificationBar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AssetList = () => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState({});
    const [refresh , setRefresh]=useState(false);
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
          
    const columns = [
        { field: 'id', headerName: 'Serial No', width: 40 },
        { field: 'departmentName', headerName: 'Department', width: 100 },
        { field: 'sectionName', headerName: 'Section', width: 100 },
        { field: 'assetName', headerName: 'Machine', width: 100 },
        { field: 'assetTypeName', headerName: 'Asset Type', width: 120 },
        { field: 'manufacturer', headerName: 'Manufacturer', width: 120 },
        { field: 'assetModel', headerName: 'Asset Model', width: 120 },
        { field: 'warrantyStartDate', headerName: 'Warranty Start Date', width: 120 },
        { field: 'warrantyEndDate', headerName: 'Warranty End Date', width: 120 },
        {field: 'action', headerName: 'Action', width: 200, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <EditData selectedRow={params.row} />,
            <DeleteData selectedRow={params.row} />,
        ],
        }
    ];
    
    useEffect(() => {
        FetchAssetListService(handleFetchSuccess, handleFetchException);
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
            <EditIcon          
            className='prbuton'
            variant="contained"
            color='primary'
            onClick={() => {
                setIsAdd(false);
                setEditData(selectedRow);
                setOpen(true);
            }}/>
        
        )
    }

    function DeleteData({ selectedRow }) {
        return (
            <DeleteIcon
            variant="contained"
            color='primary'
            onClick={() => {
                deletAsset(selectedRow.id)
                }
                }/>
         
        )
    }
    const deletAsset = (id) => {
        AssetDeleteService({id}, handleDeleteSuccess, handleDeleteException);
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
        setRefresh(true); 
    };
  
    return (
        <div style={{border:'solid',borderColor:'whitesmoke'}}>
            <div style={{display:'flex'}}>
            <h3 style={{ marginLeft: '50px' }}>Asset</h3>
            
            <Button style={{marginLeft:'70%',marginRight:'10%',width:'120px',height:'30px', marginBottom:'20px',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
               Add
            </Button>
            </div>
            <hr style={{ bottom: 'solid' }} />
            <div style={{ height: 270, }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <AssetModel
            open={open}
            setOpen={setOpen}
            isAdd={isAdd}
            editData={editData}
            setRefresh={setRefresh}
            refresh ={refresh}
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

export default AssetList
