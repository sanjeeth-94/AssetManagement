import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import InspectionDueModel from './InspectionDueModel';

const InspactionDueLis = () => {
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
        { field: 'Vendor Name', headerName: 'Vendor Name	', width: 400 },
        { field: 'Asset Name', headerName: 'Inspection Date	', width: 400 },
        { field: 'Service Due Date', headerName: 'Asset Name', width: 400 },
    ];
    
    useEffect(() => {
       
       
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
    <div style={{border:'solid'}}>
        <div>
      <div>
        <div style={{display:'flex'}}>
            <h3 style={{ marginLeft: '70px' }}>INSPECTION DUE DATE</h3> 
            <Button style={{marginLeft:'50%',width:'120px',height:'30px',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
        </div>
            <hr style={{ bottom: 'solid' }} />
            <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <InspectionDueModel
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
    </div>
  )
}

export default InspactionDueLis
