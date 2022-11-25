import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NotificationBar from '../../services/NotificationBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { UserAddService, UserUpdateService,FetchDepaertmentService,FetchAuditAssetTypeService } from '../../services/ApiServices';

const AllocationModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [departmentList, setDepartmentList] = useState([])
  const [department, setDepartment] = useState('')
  const [employeeId, setemployeeId] = useState('')
  const [employeeName, setemployeeNamed] = useState('')
  const [designation, setdesignation] = useState('')
  const [mobile_number, setmobile_number] = useState('')
  const [emailId, setemailId] = useState('')
  const [userName, setuserName] = useState('')
  const [password, setpassword] = useState('')
  const [auditdate,setAuditDate] = useState('');
  const [sectionList, setSectioonList]=useState([]);
  const [section, setSection]=useState('');
  const [assetTypeList, setAssetTypeList]=useState([]);
  const [assetType, setAssetType]=useState('');
  const [auditName,setAuditName]=useState('');
  
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });
  
  useEffect(() => {
    FetchDepaertmentService(handleFetchSuccess, handleFetchException);
  }, [editData]);
  
  const handleFetchSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data);
  }
  
  const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  
  const onDepartmentChange = (e) => {
    setDepartment(e.target.value);
  }
  
  const handleClose = () => {
    setOpen(false);
    setemployeeId('');
    setemployeeNamed('');
    setDepartment('');
    setdesignation('');
    setemailId('');
    setmobile_number('');
    setuserName('');
    setpassword('')
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    isAdd === true ?
    (
      
      UserAddService({
        employee_id: employeeId,
        employee_name: employeeName,
        department: department,
        designation: designation,
        mobile_number: mobile_number,
        email: emailId,
        user_name: userName,
        password: password,
      },handleSuccess, handleException)
    ) : (
      UserUpdateService({
        id: editData.id,
        employee_id: employeeId,
        employee_name: employeeName,
        department: department,
        designation: designation,
        mobile_number: mobile_number,
        email: emailId,
        user_name: userName,
        password: password
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
    
    setemployeeId('');
    setemployeeNamed('');
    setDepartment('');
    setdesignation('');
    setemailId('');
    setmobile_number('');
    setuserName('');
    setpassword('');
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
  
  const onSectionChange = (e) => {
    setSection(e.target.value);
    FetchAuditAssetTypeService ({id: e.target.value},handleFetchAssetTypeSuccess, handleFetchAssetTypeException);
  }
  
  const handleFetchAssetTypeSuccess = (dataObject) =>{
    setAssetTypeList(dataObject.data);
    console.log(dataObject.data);  
  }
  
  const handleFetchAssetTypeException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  
  const onAssetTypeChange = (e) => {
    setAssetType(e.target.value);
  }
      
  return (
    <div>
      <Dialog
      open={open}
      fullScreen>
        <form onSubmit={onSubmit}>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {isAdd === true ? 'Add ' : 'Edit '}User
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{display:'flex'}}>
                <div style={{marginTop:'80px', marginLeft:'40px',border:'solid',width:'500px'}}>
                  <h2 style={{marginLeft:'200px'}}>ASSET</h2>
                  <hr/>
                  <div style={{marginTop:'20px', }}>
                    <label style={{marginLeft:'40px', marginRight:'40px'}}>Department : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
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
                    <label style={{marginLeft:'40px',  marginTop:'20px'}}>Section : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
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
                    <label style={{marginLeft:'50px', marginRight:'35px'}}>Asset Type : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                        <InputLabel id="assetTypeList">Select Asset Type</InputLabel>
                        <Select
                        labelId="assetTypeList"
                        id='assetType'
                        label="AssetType"
                        onChange={(e) => onAssetTypeChange(e)}>
                          {assetTypeList.map((data, index) => {
                            return (
                              <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                    <label style={{marginLeft:'50px', marginRight:'35px'}}>Asset Type : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                        <InputLabel id="assetTypeList">Select Asset Type</InputLabel>
                        <Select
                        labelId="assetTypeList"
                        id='assetType'
                        label="AssetType"
                        onChange={(e) => onAssetTypeChange(e)}>
                          {assetTypeList.map((data, index) => {
                            return (
                              <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div style={{marginTop:'80px', marginLeft:'200px',border:'solid',width:'500px'}}>
                  <h2 style={{marginLeft:'200px'}}>User</h2>
                  <hr/>
                  <div style={{marginTop:'20px', }}>
                    <div style={{marginLeft:'40px'}}>
                      <FormControl>
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                          <FormControlLabel value="EmpId" control={<Radio />} label="Emp Id" />
                          <FormControlLabel value="Department" control={<Radio />} label="Department" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <label style={{marginLeft:'40px', marginRight:'40px'}}>Emp Id: </label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
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
                  <label style={{marginLeft:'40px',  marginTop:'20px'}}>Emp Name: </label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
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
                  <div style={{marginLeft:'40px'}}>
                    <FormControl>
                      <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group">
                        <FormControlLabel value="Temporary" control={<Radio />} label="Temporary" />
                        <FormControlLabel value="Permanent" control={<Radio />} label="Permanent" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <Button style={{marginLeft:'200px',marginTop:'40px'}} variant="contained">Allocate</Button>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='addbutton'>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
              {isAdd === true ? 'Add' : 'Update'}
            </Button>
          </div>
          <NotificationBar
          handleClose={handleCloseNotify}
          notificationContent={openNotification.message}
          openNotification={openNotification.status}
          type={openNotification.type}/>
        </DialogActions>
      </form>
    </Dialog>
    </div>
  )
}

export default AllocationModel
