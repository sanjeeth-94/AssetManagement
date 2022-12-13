import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';

const ServiceStatusUpdateView = (open) => {
    const [rows,setRows] = useState(false);

    const columns = [
        { field: 'Date and Time', headerName: 'Date and Time', width: 160 },
        { field: 'Status', headerName: 'Status', width: 160 },

    ]
  return (
    <Dialog 
    open={open}
    maxWidth='lg'
    width='700px'
    >
        <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
        View Status
        <CloseIcon />
        </DialogTitle>
        <DialogContent>
            <form>
            <Grid container spacing={2} style={{ marginTop: '20px'}}>
              <Grid  xs={12} sm={3} md={1} lg={2} xl={3} style={{ alignSelf: 'center', textAlignLast: 'center',marginRight:'30px'}}>
              <Button variant="contained">Follow up</Button>
              </Grid>
              <Grid item xs={12} sm={3} md={3} lg={6} xl={2}>
              <TextField 
              fullWidth
              id="outlined-basic" label=""
              variant="outlined" />  
              </Grid>
              <Grid xs={12} sm={2} md={1} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center',marginLeft:'20px'}}>
              <Button variant="contained">Add</Button>
              </Grid>
            </Grid>

              <Grid container spacing={2} style={{ marginTop: '20px'}}>
              <Grid  xs={12} sm={3} md={3} lg={3} xl={3} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
              <Button variant="contained">Not Repairable</Button>
              </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '20px'}}>
              <Grid  xs={12} sm={3} md={3} lg={3} xl={3} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
              <Button variant="contained" color="success">
                   Service Done
                </Button>
              </Grid>
              </Grid>
              <div>
              <DataGrid style={{height:'200px', marginTop:'20px', RowHeight:'20px'}}
              rows={rows}
              columns={columns}/>
              </div>
            
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default ServiceStatusUpdateView
