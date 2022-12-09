import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText, DialogTitle, RadioGroup} from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';
import { FetchVenderService,FetchVenderDataService, } from '../../services/ApiServices';

const ServiceRequest = ({ open,open1, setOpen1, setRefresh , editData, isAdd }) => {
  const [vendorName, setVendorName] = useState('');
  const [rows, setRows]=useState([]);
  const [department,setDepartment]=useState('');
  const [section,setSection]=useState('');
  const [assetType,setAssetType]=useState('');
  const [assetName ,setAssetName]=useState('');
  const [vendorNameList, setVendorNameList] = useState([]);
  const [venderAddress, setVenderAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [vendorData, setVendorData] = useState([]);
  const [dateValue,setDateValue]=useState('');
  const [firstService,setfirstService] = useState('');

  const onDateChange = (e) =>{
    setDateValue(e.target.value);
  }

  const handleChangefirstService = (e) => {
    setfirstService(e.target.value);
    console.log(e.target.value);
  };
  
  useEffect(() => {
    FetchVenderService(handleFetchVender, handleFetchVenderException);
    setDepartment(editData?.department ||'');
    setSection(editData?.section ||'');
    setAssetType(editData?.assetType || '');
    setAssetName(editData?.assetName || '');
  
  },[editData]);
  
  const handleFetchVender = (dataObject) => {
    setVendorNameList(dataObject.data);
    setVendorName(editData?.vendorId || '');
  }
  
  const handleFetchVenderException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
  }
  
  const onVenderChange = (e) => {
    setVendorName(e.target.value);
    FetchVenderDataService({ id: e.target.value }, handleFetchVenderDataService, handleFetchVenderDataServiceException)
  }
  
  const handleFetchVenderDataService = (dataObject) => {
    setVendorData(dataObject.data);
    setPhoneNumber(dataObject?.data[0]?.contactNo || '');
    setEmailId(dataObject?.data[0]?.email || '');
    setVenderAddress(dataObject?.data[0]?.address || '');
  }
  
  const handleFetchVenderDataServiceException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
  }


  const [selectedValue, setSelectedValue] = React.useState('a');


  
  const handleClose = () => { 
    setOpen1(false);
  };
 
  return (
    <div>
      <Dialog 
      open={open1}
      maxWidth='lg'>
        <form>
          <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
            {"Service Request"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} style={{ marginTop: '20px'}}>
              <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Department:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <TextField fullWidth
                label=""
                variant="outlined"
                value={department}/>
              </Grid>
              <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Section:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <TextField  fullWidth
                label=""
                variant="outlined"
                value={section}/>
              </Grid>
              <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Asset Type:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <TextField  fullWidth
                label=""
                variant="outlined"
                value={assetType}/>
              </Grid>
              <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Asset Name:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <TextField  fullWidth
                label=""
                variant="outlined"
                value={assetName}/>
              </Grid>
            </Grid>
            <div style={{ margin: '30px' , border:'solid', borderColor:'whitesmoke'}}>
              <h2>Vendor Details</h2>
              <hr />
              <Grid container spacing={2} style={{ marginTop: '20px'}}>
                <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                  <label>Vendor name:</label>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label"></InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label=""
                      value={vendorName}
                      onChange={(e) => onVenderChange(e)}>
                        {vendorNameList.map((data, index) => {
                          return (
                            <MenuItem value={data.vendorId} key={index}>{data.vendorName}</MenuItem>
                            )
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                  <label>Vendor Email:</label>
                </Grid>
                <Grid  item xs={12} sm={6} md={2} lg={2} xl={2}>
                  <TextField 
                  fullwidth
                  id="Email" 
                  label="" 
                  variant="outlined" 
                  value={emailId} />
                </Grid>
                <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                  <label>Vendor Address:</label>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                  <TextField fullwidth id="" label="" variant="outlined"  value={venderAddress} />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '20px'}}>
                <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                  <label>Vendor Phone:</label>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                  <TextField 
                  fullWidth
                  id=" Phone"
                  label="" 
                  variant="outlined" 
                  value={phoneNumber}/>
                </Grid>
                <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                  <label>Contact Person</label>
                </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <TextField 
                fullWidth
                id=" Phone"
                label=""
                variant="outlined" 
                value=""/>
              </Grid>
              <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>GST No</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <TextField 
                fullWidth
                id=" Phone"
                label=""
                variant="outlined" 
                value=""/>
              </Grid>
              </Grid>
            </div>
           
            <Grid  container spacing={2} style={{ marginTop: '20px'}}>
              <Grid  xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
              <FormControl>
                <RadioGroup
                  row
                  value={dateValue}
                  onChange={onDateChange}
                >
                  <FormControlLabel value="Date" control={<Radio />} label="Date" />
                  <FormControlLabel value="Day" control={<Radio />} label="Day" />
                  
                </RadioGroup>
              </FormControl>

              </Grid>
            </Grid>
            
           {
            dateValue === 'Date' &&
            <>
           <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > Expected Return Date:</label>
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
                    </Grid>
            </>
           }
           {
            dateValue !== 'Date' &&
            <>
           <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > Expected Return Days:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                    <TextField
                    fullWidth
                    id="Asset-Name"
                    label="Asset Name"
                    variant="outlined"
                   />
                    </Grid>
                    </Grid>
            </>
           }
             <Grid  container spacing={2} style={{ marginTop: '20px'}}>
                    <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                      <label > E-way BillNo:</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
                    <TextField
                    fullWidth
                    id="Asset-Name"
                    label="Asset Name"
                    variant="outlined"
                   />
                    </Grid>
                    </Grid>


            

            <div>
              <Button style={{marginLeft:'800px'}}type='reset' onClick={handleClose}>Cancel</Button>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}

export default ServiceRequest


{/* <Grid container spacing={2} style={{ marginTop: '20px' }}>
<Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}} >
  <FormControl>
    <FormLabel id="warranty"></FormLabel>
    <RadioGroup
     row aria-labelledby="demo-row-radio-buttons-group-label"
     name="row-radio-buttons-group"
     value={warranty}
     onChange={onChangeRadio}>
      <FormControlLabel value="warranty" control={<Radio />} label="Date" />
      <FormControlLabel style={{ marginLeft: '40px' }} value="Day" control={<Radio />} label="Day" />
    </RadioGroup>
  </FormControl>
</Grid>
</Grid> */}