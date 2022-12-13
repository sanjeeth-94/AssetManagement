import { Dialog, DialogContent, Grid, DialogTitle } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ShowServiceRequest } from '../../services/ApiServices';
import ServiceStatusUpdateView from './ServiceStatusUpdateView';

const ServiceStatusUpdate = ({open2, setOpen2,setRefresh , editData, }) => {
  const [rows,setRows] = useState(false);
  const [open,setOpen]=useState(false)
  const [isAdd, setIsAdd] = useState(true);
  const [open3,setOpen3]=useState(false)
  const [editData1, setEditData1] = useState([]); 
  const [editData2, setEditData2] = useState([]); 
  
  const handleClose = () => { 
    setOpen2(false);
    
  };

  useEffect(() => {
    if(editData?.assetNameId ){
      ShowServiceRequest({id:editData?.assetNameId},handleShowServiceRequest, handleShowServiceRequestException)
    }
}, [editData]);

const handleShowServiceRequest = (dataObject) => {
    setRows(dataObject?.data);
    console.log(dataObject?.data);
}

const handleShowServiceRequestException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
}  


  const columns = [
    { field: 'vendorName', headerName: 'Vendor', width: 150 },
    { field: 'vendorEmail', headerName: 'Vendor Email', width: 140 },
    { field: 'vendorPhone', headerName: 'Vendor ContactNo', width: 150 },
    { field: 'gstNo', headerName: 'Vendor GST No', width: 130 },
    { field: 'expectedDate', headerName: 'Exp.return Date', width: 130 },
    {field: 'action', headerName: 'Action', width: 140, sortable: false,
    cellClassname: 'actions',
    type: 'actions',
    getActions: (params) => [
      <ViewData selectedRow={params.row} />,
      
    ],
    }  
    
  ]
  function ViewData({ selectedRow }) {
    return (
      <VisibilityIcon
      onClick={() => {
        setIsAdd(true);
        setEditData1(selectedRow);
        setOpen(true);
      }}/>
    )
  }

  return (
    <div>
      <Dialog
      open={open2}
      
      maxWidth='lg'>
        <form>
            <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                {"Service Status Update"}
            </DialogTitle>
            <div>
              <DataGrid style={{height:'200px', marginTop:'20px', RowHeight:'20px'}}
              rows={rows}
              columns={columns}/>
              </div>
            <div>
              <Button style={{marginLeft:'800px'}}type='reset' onClick={handleClose}>Cancel</Button>
            </div>
            
        </form>

        <ServiceStatusUpdateView
        open3={open3}
        setOpen2={setOpen2}
        editData={editData}
        setRefresh={setRefresh}
        />
      </Dialog>
    </div>
  )
}

export default ServiceStatusUpdate;
