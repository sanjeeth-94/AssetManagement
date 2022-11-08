import React, {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import NotificationBar from '../../services/NotificationBar';
import {FetchDepaertmentService,FetchAuditSectionService,FetchAuditAssetTypeService,AuditAddService, AuditUpdateService } from '../../services/ApiServices';

  const AuditModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [passData,setPassData]= useState('5')
    const [auditdate,setAuditDate] = useState('');
    const [departmentList, setDepartmentList] =useState([]);
    const [department, setDepartment]=useState('');
    const [sectionList, setSectioonList]=useState([]);
    const [section, setSection]=useState('');
    const [assetTypeList, setAssetTypeList]=useState('');
    const [assetType, setAssetType]=useState('');
    const [auditName,setAuditName]=useState('');

    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
      });

 
  const handleClose = () => {
      setOpen(false);
  };

  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChangeDate = (newValue) => {
      setValue(newValue);
      setAuditDate(newValue);

  };
  useEffect(() => {
    FetchDepaertmentService(handleFetchSuccess, handleFetchException);

  }, [editData]);

  const handleFetchSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data);
  }
  const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  const onDepartmentChange = (e,) => {
    setDepartment(e.target.value);
    alert("data="+ e.target.value)
    FetchAuditSectionService({
        id: e.target.value
    },handleFetchSectionSuccess, handleFetchSectionException);

  }
  const handleFetchSectionSuccess = (dataObject) =>{
    setSectioonList(dataObject.data);
  }
  const handleFetchSectionException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  const onSectionChange = (e) => {
    setSection(e.target.value);
    FetchAuditAssetTypeService (handleFetchAssetTypeSuccess, handleFetchAssetTypeException);
  
  }
  const handleFetchAssetTypeSuccess = (dataObject) =>{
    setAssetTypeList(dataObject.data);
  }
  const handleFetchAssetTypeException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  const onAssetTypeChange = (e) => {
    setAssetType(e.target.value);
  
  }

  const onSubmit = (e) => {
    e.preventDefault();
     isAdd === true ?
      (
    
        AuditAddService({

      },handleSuccess, handleException)
      ) : (
     
      AuditUpdateService({
        id: editData.id,

      }, handleSuccess, handleException)
      );
  }

  const handleSuccess = (dataObject) =>{
    console.log(dataObject);
    setRefresh(oldValue => !oldValue);
    setNotification({
      status: true,
      type: 'success',
      message: dataObject.message,
    });

  }

  const handleException = (errorObject, errorMessage) =>{
    console.log(errorMessage);
    setNotification({
      status: true,
      type: 'error',
      message:errorMessage,
    });
  }

  const handleCloseNotify = () => {
   setOpen(false)
    setNotification({
      status: false,
      type: '',
      message: '',
    });
  };

  return (
    <div>
       <Dialog
                open={open}
                onClose={handleClose}
                fullWidth>
                     <form onSubmit={onSubmit}>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"AUDIT ASSETS"}
                    </DialogTitle>    
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           
                                <div  style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Audit Date : </label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack style={{ width: '250px' , marginLeft: '40px' }} spacing={3}>
                                            <DesktopDatePicker
                                            inputFormat="MM/DD/YYYY"
                                            value={value}
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField {...params} />}/>
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                <div  style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Department : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                    <FormControl style={{ width: '300px' }}>
                                        <InputLabel id="departmentlabel">Select Department</InputLabel>
                                        <Select
                                            labelId="departmentlabel"
                                            id='department'
                                            label="Department"
                                            onChange={(e) => onDepartmentChange(e)}>
                                            {departmentList.map((data, index) => {
                                            return (
                                                <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                                                
                                            )
                                            })}
                                        </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Section : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                    <FormControl style={{ width: '300px' }}>
                                        <InputLabel id="sectionList">Select section</InputLabel>
                                        <Select
                                            labelId="sectionList"
                                            id='section'
                                            label="Section"
                                            onChange={(e) => onSectionChange(e)}>
                                            {sectionList.map((data, index) => {
                                            return (
                                                <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                                            )
                                            })}
                                        </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Asset Type : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                    <FormControl style={{ width: '300px' }}>
                                        <InputLabel id="assetTypeList">Select Asset Type</InputLabel>
                                        <Select
                                            labelId="assetTypeList"
                                            id='assetType'
                                            label="AssetType"
                                            onChange={(e) => onAssetTypeChange(e)}>
                                            {/* {assetTypeList.map((data, index) => {
                                            return (
                                                <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                                            )
                                            })} */}
                                        </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Audit Name</label>
                                    <TextField 
                                        style={{marginLeft:'40px', width:'250px'}} 
                                        label="Audit Name" 
                                        variant="outlined" 
                                        onChange={(e)=>{setAuditName(e.target.value) }}
                                    />
                                </div>
                                <div>
                                <Button type='reset' onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>
                                    {isAdd === true ? 'Add' : 'Update'}
                                    </Button>
                                </div>
                                <NotificationBar
                                    handleClose={handleCloseNotify}
                                    notificationContent={openNotification.message}
                                    openNotification={openNotification.status}
                                    type={openNotification.type}
                                />
                       
                        </DialogContentText>
                    </DialogContent>   
                    </form>                         
                </Dialog>
    </div>
  )
}

export default AuditModel
