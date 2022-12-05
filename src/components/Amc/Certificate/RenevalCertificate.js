import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const RenevalCertificate = ({open , setOpen, editData }) => {
  const [certificateStartDate,setcertificateStartDate] = useState('');
  const [certificateEndDate,setcertificateEndDate] = useState('');
  const [inspectionPattern, setinspectionPattern] = useState(0);
  const [department,setdepartment] = useState(0);
  const [assetName,setassetName] = useState(0);
  const [c1DateFrom, setc1DateFrom] = useState('');
  const [c1DateTo, setc1DateTo] = useState('');
  const [c2DateFrom, setc2DateFrom] = useState('');
  const [c2DateTo, setc2DateTo] = useState('');
  const [c3DateFrom, setc3DateFrom] = useState('');
  const [c3DateTo, setc3DateTo] = useState('');
  const [c4DateFrom, setc4DateFrom] = useState('');
  const [c4DateTo, setc4DateTo] = useState('');
  const [c5DateFrom, setc5DateFrom] = useState('');
  const [c5DateTo, setc5DateTo] = useState('');

  useEffect(() => {
    setdepartment(editData.department || '');
    setassetName(editData.assetName || '');
    setcertificateStartDate(editData.certificateStartDate || '');
    setcertificateEndDate(editData.certificateEndDate || ''); 
  }, [editData]);



  const handleChangecertificateStartDate = (e) => {
    setcertificateStartDate(e.target.value);
    console.log(e.target.value);
  }; 

  const handleChangecertificateEndDate = (e) => {
    setcertificateEndDate(e.target.value);
    console.log(e.target.value);
  }; 

  const handleChangec1DateFrom = (e) => {
    setc1DateFrom(e.target.value);
    console.log(e.target.value);
  };


 
  const handleChangec1DateTo = (e) => {
    setc1DateTo(e.target.value);
    console.log(e.target.value);
  };

  const handleChangec2DateFrom = (e) => {
    setc2DateFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangec2DateTo = (e) => {
    setc2DateTo(e.target.value);
    console.log(e.target.value);
  };
  
  const handleChangec3DateFrom = (e) => {
    setc3DateFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangec3DateTo = (e) => {
    setc3DateTo(e.target.value);
    console.log(e.target.value);
  };

  const handleChangec4DateFrom = (e) => {
    setc4DateFrom(e.target.value);
    console.log(e.target.value);
  };
  
  
  const handleChangec4DateTo = (e) => {
    setc4DateTo(e.target.value);
    console.log(e.target.value);
  };
  
  const handleChangec5DateFrom = (e) => {
    setc5DateFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleChangec5DateTo = (e) => {
    setc5DateTo(e.target.value);
    console.log(e.target.value);
  };

  const handleChange = (event) => {
    setinspectionPattern(event.target.value);
  };

  const handleClose=()=>{
    setOpen(false);
  }
  return (
    <div>
      <Dialog
       open={open}
       fullWidth
       maxWidth='lg'>
        <form>
           <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
            {"Renewal Certificate"}

           </DialogTitle>
           <DialogContent>
            <DialogContentText>
              <form>
              <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
             <label >Department: </label>
             </Grid>
             <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
             <TextField id="" 
              fullwidth
              label="" 
              variant="outlined" 
              value={department} />
             </Grid>
             </Grid>
             <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
             <label >Machine: </label>
             </Grid>
             <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
             <TextField id="" 
              fullwidth
              label="" 
              variant="outlined" 
              value={assetName}/>
             </Grid>
             </Grid>
             <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label > Certificate Start Date:</label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                    <TextField 
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={certificateStartDate}
                    onChange={(e) => { handleChangecertificateStartDate(e) }}/>
                  </Grid>
                  </Grid>

                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
             <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                    <label > Certificate End Date:</label>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                    <TextField 
                    fullWidth 
                    id="Vendor-Address" 
                    variant="outlined" 
                    type='date'
                    value={certificateEndDate}
                    onChange={(e) => { handleChangecertificateEndDate(e) }}/>
                  </Grid>
                  </Grid>
                  <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
                    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label >Inception Pattern:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}xl={4}>
                    <Box>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={inspectionPattern }
                          label=""
                          onChange={handleChange}>
                            <MenuItem value={1}>1 Inspection</MenuItem>
                            <MenuItem value={2}>2 Inspection</MenuItem>
                            <MenuItem value={3}>3 Inspection</MenuItem>
                            <MenuItem value={4}>4 Inspection</MenuItem>
                            <MenuItem value={5}>5 Inspection</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                  { inspectionPattern  >=1 && (
                    <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>1 Inspection: FROM </label>
                      </Grid>
                      <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={c1DateFrom}
                        onChange={(e) => { handleChangec1DateFrom(e) }}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
                      style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                        <label>To:</label>
                      </Grid>
                      <Grid item xs={12}  sm={6} md={2} lg={2} xl={2}>
                        <TextField
                        fullWidth
                        id=""
                        variant="outlined"
                        type='date'
                        value={c1DateTo}
                        onChange={(e) => { handleChangec1DateTo(e) }}/>
                      </Grid>
                    </Grid>
                    )
                  }
                  { inspectionPattern  >=2 && (
                    <Grid container spacing={2} style={{ marginTop: '20px'}}>
                      <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                      style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                        <label>2 Inspection: FROM: </label>
                        </Grid>
                        <Grid item xs={12} sm={6}  md={2} lg={2} xl={2} >
                          <TextField
                          fullWidth
                          id=""
                          variant="outlined"
                          type='date'
                          value={c2DateFrom}
                          onChange={(e) => { handleChangec2DateFrom(e) }}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
                        style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                          <label>To:</label>
                        </Grid>
                        <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
                          <TextField
                          fullWidth
                          id=""
                          variant="outlined"
                          type='date'
                          value={c2DateTo}
                          onChange={(e) => { handleChangec2DateTo(e) }}/>
                        </Grid>
                        
                        
                      </Grid>
                    )
                  }
                  {inspectionPattern  >=3 && (
                        <Grid container spacing={2} style={{ marginTop: '20px'}}>
                          <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                            style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                            <label>3 Inspection: FROM: </label>
                          </Grid>
                          <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                            <TextField
                            fullWidth
                            id=""
                            variant="outlined"
                            type='date'
                            value={c3DateFrom}
                            onChange={(e) => { handleChangec3DateFrom(e) }}/>
                          </Grid>
                          <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
                          style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                            <label>To:</label>
                          </Grid>
                          <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
                            <TextField
                            fullWidth
                            id=""
                            variant="outlined"
                            type='date'
                            value={c3DateTo}
                            onChange={(e) => { handleChangec3DateTo(e) }}/>
                          </Grid>
                          
                          
                        </Grid>
                    )
                  }
                  {inspectionPattern  >=4 && (
                        <Grid container spacing={2} style={{ marginTop: '20px'}}>
                          <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                            style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                            <label>4 Inspection: FROM: </label>
                          </Grid>
                          <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
                          <TextField
                          fullWidth
                          id=""
                          variant="outlined"
                          type='date'
                          value={c4DateFrom}
                          onChange={(e) => { handleChangec4DateFrom(e) }}/>
                          </Grid>
                          <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
                          style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                            <label>To:</label>
                          </Grid>
                          <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
                            <TextField
                            fullWidth
                            id=""
                            variant="outlined"
                            type='date'
                            value={c4DateTo}
                            onChange={(e) => { handleChangec4DateTo(e) }}/>
                          </Grid>
                          
                          
                        </Grid>
                    )
                  }
                  { inspectionPattern >=5 && (
                        <Grid container spacing={2} style={{ marginTop: '20px'}}>
                          <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
                            style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                            <label>5 Inspection: FROM: </label>
                            </Grid>
                            <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}>
                              <TextField
                              fullWidth
                              id=""
                              variant="outlined"
                              type='date'
                              value={c5DateFrom}
                              onChange={(e) => { handleChangec5DateFrom(e) }}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
                          style={{ alignSelf: 'center', textAlignLast: 'center' }}>
                              <label>To:</label>
                            </Grid>
                            <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
                              <TextField
                              fullWidth
                              id=""
                              variant="outlined"
                              type='date'
                              value={c5DateTo}
                              onChange={(e) => { handleChangec5DateTo(e) }}/>
                            </Grid>
                            </Grid>
                      
                    )
                  }
              </form>
            </DialogContentText>
           </DialogContent>
           <div>
            <Button onClick={handleClose}>close</Button>
           </div>
          
       
        </form>
       
      </Dialog>
    </div>
  )
}

export default RenevalCertificate;
