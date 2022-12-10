import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const ServiceStatusUpdate = ({open,open1,open2, setOpen1,setOpen, setOpen2,setRefresh , editData, isAdd}) => {

  const columns = [
    { field: 'maintenanceId', headerName: 'Name	', width: 80 },
    { field: 'maintenanceType', headerName: 'Part Id', width: 100 },
    { field: 'assetName', headerName: 'Quantity	', width: 100 },
    { field: 'severity', headerName: 'UOM', width: 100 },
    { field: 'problemNote', headerName: 'Unit Price', width: 120 },   
  ]
  return (
    <div>
      <Dialog
      open={open2}
      maxWidth='lg'>
        <form>
            <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                {"Service Status Update"}
            </DialogTitle>
            <DialogContent>
              
            </DialogContent>
            
        </form>
      </Dialog>
    </div>
  )
}

export default ServiceStatusUpdate;
