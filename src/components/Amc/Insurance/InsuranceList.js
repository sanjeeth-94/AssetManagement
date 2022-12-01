import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import InsuranceModel from './InsuranceModel';
import { FetchInsuranceService, InsuranceDeleteService } from '../../../services/ApiServices';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
// import FileDownload from '@mui/icons-material/FileDownload';

const InsuranceList = () => {
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
        
        { field: 'vendorName', headerName: 'Vender Name	', width: 150 },
        { field: 'periodFrom', headerName: 'Period From', width: 150 },
        { field: 'periodTo', headerName: 'Period To', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'section', headerName: 'Section', width: 150 },
        { field: 'assetType', headerName: 'Asset Type', width: 150 },
        { field: 'assetName', headerName: 'Asset Name	', width: 150 },
        {field: 'action', headerName: 'Action', width: 200, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <EditData selectedRow={params.row} />,
            <DeleteData selectedRow={params.row} />,
            // <FileDownload selectedRow={params.row}/>,
        ],
        }
    ];

    function EditData({ selectedRow }) {
        return (
            <Edit 
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
            <Delete  
            variant="contained"
            color='primary'
            onClick={() => {
                deleteAmc(selectedRow.id)
            }}/>
        )
    }


    // function FileDownload({ selectedRow})  {
    //     return ( 
    //         <FileDownload />
    //     )
    // }

    const deleteAmc= (id) => {
        InsuranceDeleteService({id}, handleDeleteSuccess, handleDeleteException);
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

    
    useEffect(() => {
        FetchInsuranceService(handleFetchSuccess,handleFetchException)
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

    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
       
    };
  return (
    <div>
    <div style={{border:'solid',borderColor:'whitesmoke'}}>
        <div style={{display:'flex',}}>
          <h3 style={{ marginLeft: '80px',marginBottom:'0px' }}>VENDER DETAILS</h3>
          
          <Button style={{marginLeft:'70%',width:'120px',height:'30px',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
              Add
          </Button>
          </div>
          <hr style={{ bottom: 'solid' ,borderColor:'whitesmoke'}} />

          <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
              <DataGrid
              rows={rows}
              columns={columns} />
          </div>
          <InsuranceModel
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
  )
}

export default InsuranceList
