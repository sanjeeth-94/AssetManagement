import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import InsuranceModel from './InsuranceModel';


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
        { field: 'Vendor Name', headerName: 'Serial No', width: 60 },
        { field: 'Asset Name', headerName: 'Vender Name	', width: 120 },
        { field: 'Period From', headerName: 'Period From', width: 120 },
        { field: 'Period To', headerName: 'Period To', width: 120 },
        { field: 'Department', headerName: 'Department', width: 120 },
        { field: 'Section', headerName: 'Section', width: 120 },
        { field: 'Asset Type', headerName: 'Asset Type', width: 120 },
        { field: 'Asset Name', headerName: 'Asset Name	', width: 120 },
        { field: 'Action', headerName: 'Action', width: 250 },
       
    ];
    
    useEffect(() => {
       
       
    }, [refresh]);

   

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
    <div style={{border:'solid'}}>
        <div style={{display:'flex',}}>
          <h3 style={{ marginLeft: '80px',marginBottom:'0px' }}>VENDER DETAILS</h3>
          
          <Button style={{marginLeft:'70%',width:'120px',height:'30px',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
              Add
          </Button>
          </div>
          <hr style={{ bottom: 'solid' }} />

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
