import React, { useEffect, useState } from 'react';
import Delete from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

const AmcServicePatternView = ({ open, setOpen, }) => {
  const [open1, setOpen1] = useState(false);
  const [isService, setIsService] = useState(false);
  const [rows, setRows] = useState([]);
  const [editData2, setEditData2] = useState('');
  const [firstService,setfirstService] = useState('');
  const [secondService,setsecondService] = useState('');
  const [thirdService,setthirdService] = useState('');
  const [fourthService,setfourthService] = useState('');
  const [fifthService,setfifthService] = useState('');
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangefirstService = (e) => {
    setfirstService(e.target.value);
    console.log(e.target.value);
  };

  const handleChangesecondService = (e) => {
    setsecondService(e.target.value);
    console.log(e.target.value);
  };

  const handleChangethirdService = (e) => {
    setthirdService(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefourthService = (e) => {
    setfourthService(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefifthService = (e) => {
    setfifthService(e.target.value);
    console.log(e.target.value);
  };





  return (
    <div>
      <Dialog 
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth='lg'>
        <form>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {"SERVICE DETAILS"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
             <form>
             <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
             <label >Name: </label>
             </Grid>
             <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
             <TextField id="" 
              fullwidth
              label="" 
              variant="outlined" 
              value="" />
             </Grid>
             <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label >Date From: </label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                    <TextField id="" 
                      fullwidth
                      label="" 
                      variant="outlined" 
                      value="" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label >Date To :</label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                  <TextField id="" 
                  fullwidth
                  label="" 
                  variant="outlined" 
                  value="" />
                  </Grid>
             </Grid>
             <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label > 1st Service </label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                    <TextField 
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={firstService}
                    onChange={(e) => { handleChangefirstService(e) }}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label >2nd Service</label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                    <TextField
                    style={{ alignSelf: 'left',}}
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={secondService}
                    onChange={(e) => { handleChangesecondService(e) }}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label >3rd Service :</label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                  <TextField
                    style={{ alignSelf: 'left',}}
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={thirdService}
                    onChange={(e) => { handleChangethirdService(e) }}/>
                  </Grid>
                  </Grid>
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label > 4th Service </label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                    <TextField 
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={fourthService}
                    onChange={(e) => { handleChangefourthService(e) }}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label >5th Service</label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                    <TextField
                    style={{ alignSelf: 'left',}}
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={fifthService}
                    onChange={(e) => { handleChangefifthService(e) }}/>
                  </Grid>
                  </Grid>

             </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
            <div className='addbutton'>
              <Button type="submit" style={{ border: 'solid', width: '150px' }}  autoFocus>
                Update
               
                
              </Button>
              <Button type='reset' onClick={handleClose}>Cancel</Button>
            </div>
      
          </DialogActions>

         
        </form>

      </Dialog>
    </div>
  )
}

export default AmcServicePatternView
