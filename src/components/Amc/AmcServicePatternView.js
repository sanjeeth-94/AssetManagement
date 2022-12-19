import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

const AmcServicePatternView = ({ open, setOpen, editData}) => {
  const [rows, setRows] = useState([]);
  const [editData2, setEditData2] = useState('');
  const [name,setName]=useState('');
  const [DateFrom,setDateFrom]=useState('');
  const [DateTo,setDateTo]=useState('');
  const [vendorName,setVendorName]=useState('');
  const [periodFrom,setPeriodFrom]=useState('');
  const [periodTo,setPeriodTo]=useState('');
  const [firstServiceFrom,setFirstServiceFrom]=useState('');
  const [firstServiceTo,setFirstServiceTo]=useState('');
  const [secondServiceFrom,setSecondServiceFrom]=useState('');
  const [secondServiceTo,setSecondServiceTo]=useState('');
  const [thirdServiceFrom,setthirdServiceFrom]=useState('');
  const [thirdServiceTo,setThirdServiceTo]=useState('');
  const [fourthServiceFrom,setFourthServiceFrom]=useState('');
  const [fourthServiceTo,setFourthServiceTo]=useState('');
  const [fifthServiceFrom,setFifthServiceFrom]=useState('');
  const [fifthServiceTo,setFifthServiceTo]=useState('');
    const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setVendorName(editData?.vendorName ||'');
    setPeriodFrom(editData?.periodFrom ||'');
    setPeriodTo(editData?.periodTo || '');
  })

  const handleChangefirstServiceFrom = (e) => {
    setFirstServiceFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefirstServiceTo = (e) => {
    setFirstServiceTo(e.target.value);
    console.log(e.target.value);
  };


  const handleChangeSecondServiceFrom = (e) => {
    setSecondServiceFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeSecondServiceTo = (e) => {
    setSecondServiceTo(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeThirdServiceFrom = (e) => {
    setthirdServiceFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangethirdServiceTo = (e) => {
    setThirdServiceTo(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefourthServiceFrom= (e) => {
    setFourthServiceFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefourthServiceTo = (e) => {
    setFourthServiceTo(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefifthServiceFrom = (e) => {
    setFifthServiceFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangefifthServiceTo = (e) => {
    setFifthServiceTo(e.target.value);
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
                      value={vendorName} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >Date From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField id="" 
                      fullwidth
                      label="" 
                      variant="outlined" 
                      value={periodFrom} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >Date To :</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField id="" 
                      fullwidth
                      label="" 
                      variant="outlined" 
                      value={periodTo} />
                    </Grid>
                  </Grid>
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > 1st Service From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                      <TextField 
                      fullWidth 
                      id="Vendor-Address" 
                      variant="outlined" 
                      type='date'
                      value={firstServiceFrom}
                      onChange={(e) => { handleChangefirstServiceFrom(e) }}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >1st Service To:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField
                      style={{ alignSelf: 'left'}}
                      fullWidth 
                      id="Vendor-Address" 
                      variant="outlined" 
                      type='date'
                      value={firstServiceTo}
                      onChange={(e) => { handleChangefirstServiceTo(e) }}/>
                    </Grid>
                    </Grid>
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >2nd Service From:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField
                      style={{ alignSelf: 'left',}}
                      fullWidth 
                      id="Vendor-Address" 
                      variant="outlined" 
                      type='date'
                      value={secondServiceFrom}
                      onChange={(e) => { handleChangeSecondServiceFrom(e) }}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > 2nd Service To:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                      <TextField 
                      fullWidth 
                      id="Vendor-Address"
                      variant="outlined" 
                      type='date'
                      value={secondServiceTo}
                      onChange={(e) => { handleChangeSecondServiceTo(e) }}/>
                    </Grid>
                    </Grid>
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >3rd Service From:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField
                      style={{ alignSelf: 'left',}}
                      fullWidth 
                      id="Vendor-Address" 
                      variant="outlined" 
                      type='date'
                      value={thirdServiceFrom}
                      onChange={(e) => { handleChangeThirdServiceFrom(e) }}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > 3rd Service To: </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                      <TextField 
                      fullWidth 
                      id="Vendor-Address"
                      variant="outlined" 
                      type='date'
                      value={thirdServiceTo}
                      onChange={(e) => { handleChangethirdServiceTo(e) }}/>
                    </Grid>
                  </Grid>
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >4th Service From:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField
                      style={{ alignSelf: 'left',}}
                      fullWidth 
                      id="Vendor-Address" 
                      variant="outlined" 
                      type='date'
                      value={fourthServiceFrom}
                      onChange={(e) => { handleChangefourthServiceFrom(e) }}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > 4th Service To:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                      <TextField 
                      fullWidth 
                      id="Vendor-Address"
                      variant="outlined" 
                      type='date'
                      value={fourthServiceTo}
                      onChange={(e) => { handleChangefourthServiceTo(e) }}/>
                    </Grid>
                  </Grid> 
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >5th Service From:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                      <TextField
                      style={{ alignSelf: 'left',}}
                      fullWidth 
                      id="Vendor-Address" 
                      variant="outlined" 
                      type='date'
                      value={fifthServiceFrom}
                      onChange={(e) => { handleChangefifthServiceFrom(e) }}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > 5th Service To:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                      <TextField 
                      fullWidth 
                      id="Vendor-Address"
                      variant="outlined" 
                      type='date'
                      value={fifthServiceTo}
                      onChange={(e) => { handleChangefifthServiceTo(e) }}/>
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
