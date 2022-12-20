import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

const AmcServicePatternView = ({ open, setOpen,setOpen1,editData}) => {
  const [rows, setRows] = useState([]);
  
  const [editData2, setEditData2] = useState('');
  const [name,setName]=useState('');
  
  const [vendorName,setVendorName]=useState('');
  const [periodFrom,setPeriodFrom]=useState('');
  const [periodTo,setPeriodTo]=useState('');
  const [s1DateFrom,sets1DateFrom]=useState('');
  const [s1DateTo,sets1DateTo]=useState('');
  const [s1runHours, sets1runHours] = useState('');
  const [s2DateFrom,sets2DateFrom]=useState('');
  const [s2DateTo,sets2DateTo]=useState('');
  const [s2runHours, sets2runHours] = useState('');
  const [s3DateFrom,sets3DateFrom]=useState('');
  const [s3DateTo,sets3DateTo]=useState('');
  const [s3runHours, sets3runHours] = useState('');
  const [s4DateFrom,sets4DateFrom]=useState('');
  const [s4DateTo,sets4DateTo]=useState('');
  const [s4runHours, sets4runHours] = useState('');
  const [s5DateFrom,sets5DateFrom]=useState('');
  const [s5DateTo,sets5DateTo]=useState('');
  const [s5runHours, sets5runHours] = useState('');
  const [count,setCount]=useState('');
  const [servicePattern,setServicePattern]=useState('');
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(()=>{
    setVendorName(editData?.vendorName ||'');
    setPeriodFrom(editData?.periodFrom ||'');
    setPeriodTo(editData?.periodTo || '');
    sets1DateFrom(editData?.s1DateFrom || '');
    sets1DateTo(editData?.s1DateTo || '');
    sets1runHours(editData?.s1runHours|| '');
    sets2DateFrom(editData?.s2DateFrom || '');
    sets2DateTo(editData?.s2DateTo || '');
    sets2runHours(editData?.s2runHours|| '');
    sets3DateFrom(editData?.s3DateFrom || '');
    sets3DateTo(editData?.s3DateTo || '');
    sets3runHours(editData?.s3runHours|| '');
    sets4DateFrom(editData?.s4DateFrom || '');
    sets4DateTo(editData?.s4DateTo || '');
    sets4runHours(editData?.s4runHours|| '');
    sets5DateFrom(editData?.s5DateFrom || '');
    sets5DateTo(editData?.s5DateTo || '');
    sets5runHours(editData?.s5runHours|| '');
    setCount(editData?.servicePattern ||'0');
    console.log('data'+editData?.lenght);
  },[editData])

  const handleChanges1DateFrom =(e) => {
    sets1DateFrom(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges1DateTo=(e)=>{
    sets1DateTo(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges1runHours = (e) => {
    sets1runHours(e.target.value);
    console.log(e.target.value);
  };

  const handleChanges2DateFrom=(e)=>{
    sets2DateFrom(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges2DateTo=(e)=>{
    sets2DateTo(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges2runHours = (e) => {
    sets2runHours(e.target.value);
    console.log(e.target.value);
  };

  const handleChanges3DateFrom=(e)=>{
    sets3DateFrom(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges3DateTo=(e)=>{
    sets3DateTo(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges3runHours = (e) => {
    sets3runHours(e.target.value);
    console.log(e.target.value);
  };

  const handleChanges4DateFrom=(e)=>{
    sets4DateFrom(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges4DateTo=(e)=>{
    sets4DateTo(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges4runHours = (e) => {
    sets4runHours(e.target.value);
    console.log(e.target.value);
  };

  const handleChanges5DateFrom=(e)=>{
    sets5DateFrom(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges5DateTo=(e)=>{
    sets5DateTo(e.target.value);
    console.log(e.target.value);
  }

  const handleChanges5runHours = (e) => {
    sets5runHours(e.target.value);
    console.log(e.target.value);
  };
 
  return (
    <div>
      <Dialog 
      open={open}
   
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
                  {
                    count >= 1 &&
                    <>
                    <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>1 Service: From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s1DateFrom}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                        style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                        <label>1 Service: To: </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s1DateTo}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center' }} >
                        <label>RunHours: </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={1} lg={1} xl={1}
                      style={{ alignSelf: 'center', textAlignLast: 'center',marginRight:'30px'  }}>
                        <TextField
                        fullWidth
                        id=""
                        label=""
                        variant="outlined"
                        value={s1runHours}/>
                      </Grid>
                    </Grid>
                    </>
                  }
                  {
                    count >= 2 &&
                    <>
                    <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>2 Service: From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s2DateFrom}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                        style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                        <label> 2 Service: To: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s2DateTo}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center' }} >
                        <label>RunHours: </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={1} lg={1} xl={1}
                      style={{ alignSelf: 'center', textAlignLast: 'center',marginRight:'30px'  }}>
                        <TextField
                        fullWidth
                        id=""
                        label=""
                        variant="outlined"
                        value={s2runHours}/>
                      </Grid>
                    </Grid>
                    </>
                  }
                  {
                    count >=3 &&
                    <>
                    <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>3 Service: From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s3DateFrom}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                        style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                        <label> 3 Service: To: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s3DateTo}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center' }} >
                        <label>RunHours: </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={1} lg={1} xl={1}
                      style={{ alignSelf: 'center', textAlignLast: 'center',marginRight:'30px'  }}>
                        <TextField
                        fullWidth
                        id=""
                        label=""
                        variant="outlined"
                        value={s3runHours}/>
                      </Grid>
                    </Grid>
                    </>
                  }
                  {
                    count >= 4 &&
                    <>
                   <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>4 Service: From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s4DateFrom}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                        style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                        <label> 4 Service: To: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s4DateTo}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center' }} >
                        <label>RunHours: </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={1} lg={1} xl={1}
                      style={{ alignSelf: 'center', textAlignLast: 'center',marginRight:'30px'  }}>
                        <TextField
                        fullWidth
                        id=""
                        label=""
                        variant="outlined"
                        value={s4runHours}/>
                      </Grid>
                    </Grid>
                    </>
                  }
                  {
                    count >= 5 &&
                    <>
                    <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>5 Service: From: </label>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s5DateFrom}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                        style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                        <label> 5 Service: To: </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={s5DateTo}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center' }} >
                        <label>RunHours: </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={1} lg={1} xl={1}
                      style={{ alignSelf: 'center', textAlignLast: 'center',marginRight:'30px'  }}>
                        <TextField
                        fullWidth
                        id=""
                        label=""
                        variant="outlined"
                        value={s5runHours}/>
                      </Grid>
                    </Grid>
                    </>
                  }
                 
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
