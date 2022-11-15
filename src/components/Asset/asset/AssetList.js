import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchAssetListService,FetchSectionService } from '../../../services/ApiServices';
import AssetModel from './AssetModel';
import NotificationBar from '../../../services/NotificationBar';

const AssetList = () => {
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
        { field: 'department', headerName: 'Department', width: 120 },
        { field: 'section', headerName: 'Section', width: 120 },
        { field: 'assetName', headerName: 'Machine', width: 120 },
        { field: 'assetType', headerName: 'Asset Type', width: 140 },
        { field: 'manufaturer', headerName: 'Manufacturer', width: 140 },
        { field: 'assetModel', headerName: 'Asset Model', width: 140 },
        { field: 'warrantyStartDate', headerName: 'Warranty Start Date', width: 140 },
        { field: 'warrantyEndDate', headerName: 'Warranty End Date', width: 140 },
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
               
            }}>
              Delete
            </Button>
        )
    }

   
    
    const handleDeleteException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
    }
    
    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);   
    };
  
    return (
        <div>
            <div style={{display:'flex'}}>
            <h3 style={{ marginLeft: '50px' }}>Asset</h3>
            
            <Button style={{marginLeft:'80%',width:'120px',height:'30px', marginBottom:'20px'}} variant="outlined" onClick={handleModalOpen}>
               Add
            </Button>
            </div>
            <hr style={{ bottom: 'solid' }} />
            <div style={{ height: 270, width: '1350px' }}>
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
        </div>
    )
}

export default AssetList
