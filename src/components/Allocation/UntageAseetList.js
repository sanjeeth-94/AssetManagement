import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchUserService, UserDeleteService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';
import UntageAssetModel from './UntageAssetModel';

const UntageAseetList = () => {
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
        { field: 'SerialNo', headerName: 'Serial No', width: 140 },
        { field: 'Section', headerName: 'Section', width: 140 },
        { field: 'Asset Name', headerName: 'Asset Name', width: 140 },
        { field: 'Asset Id', headerName: 'Asset Idt', width: 140 },
        { field: 'Id', headerName: 'Id', width: 140 },
        { field: 'Username', headerName: 'Username', width: 140 },
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
            <h1 style={{ marginLeft: '50px' }}> UNTAG ASSET</h1>
            <hr style={{ bottom: 'solid' }} />
            <div>


            <Button style={{marginLeft:'83%',width:'120px',height:'30px'}} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
 
            </div>
 
            <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />

            <UntageAssetModel
                open={open}
                setOpen={setOpen}
                isAdd={isAdd}
                editData={editData}
                setRefresh={setRefresh}
            />

            </div>
                 <NotificationBar
                    handleClose={handleClose}
                    notificationContent={openNotification.message}
                    openNotification={openNotification.status}
                    type={openNotification.type}
                />
        </div>
    </div>
  )
}

export default UntageAseetList
