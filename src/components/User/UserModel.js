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
import { UserAddService, UserUpdateService,FetchDepaertmentService } from '../../services/ApiServices';

const UserModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [departmentList, setDepartmentList] = useState([])
  const [employeeId, setemployeeId] = useState('')
  const [employeeName, setemployeeNamed] = useState('')
  const [designation, setdesignation] = useState('')
  const [mobile_number, setmobile_number] = useState('')
  const [emailId, setemailId] = useState('')
  const [userName, setuserName] = useState('')
  const [password, setpassword] = useState('')
  const [department, setDepartment] = useState('')
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
});


  useEffect(() => {
    FetchDepaertmentService(handleFetchSuccess, handleFetchException);
    setemployeeId(editData.employee_id || '');
    setemployeeNamed(editData.employee_name || '');
    setDepartment(editData.department || '');
    setdesignation(editData.designation || '');
    setemailId(editData.email || '');
    setmobile_number(editData.mobile_number || '');
    setuserName(editData.user_name || '');
    setpassword(editData.password || '');
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
  const handleCloseNotify = () => {
    setOpen(false);
    setNotification({
      status: false,
      type: '',
      message: '',
    });
  };


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
  return (
    <Dialog
      open={open}
      maxWidth='lg'
    >
      <form onSubmit={onSubmit}>
        <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
          {isAdd === true ? 'Add ' : 'Edit '}User
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ display: 'flex', marginlef: '20px', marginBottom: '10px',marginTop:'30px',alignItems:'center' }}>
              <label style={{ marginRight: '36px' }}>Employee ID :</label>
              <TextField style={{width:'300px'}} id="employeeId" label="Employee ID" variant="outlined"
                onChange={(e) => { setemployeeId(e.target.value) }}
                value={employeeId}
              />

              <label style={{marginLeft:'40px', marginRight: '40px' }}>Employee Name :</label>
              <TextField style={{width:'300px'}} id="employeeName" label="Employee Name" variant="outlined"
                onChange={(e) => { setemployeeNamed(e.target.value) }}
                value={employeeName}
              />
            </div>
            <div style={{ display: 'flex', marginlef: '20px', marginBottom: '10px',marginTop:'30px',alignItems:'center' }}>
              <label style={{ marginRight: '40px' }}>Department :</label>
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
            
              <label style={{marginLeft:'45px', marginRight: '67px' }}>Designation :</label>
              <TextField style={{width:'300px'}} id="designation" label="Designation" variant="outlined" sx={{ alignitems: 'end' }}
                onChange={(e) => { setdesignation(e.target.value) }}
                value={designation} />
            </div>

            <div style={{ display: 'flex', marginlef: '20px', marginBottom: '10px',marginTop:'30px',alignItems:'center' }}>
              <label style={{ marginRight: '15px' }}>Mobile Number :</label>
              <TextField style={{width:'300px'}} id="mobile_number" label="Mobile Number" variant="outlined"
                onChange={(e) => { setmobile_number(e.target.value) }}
                value={mobile_number} />
         
              <label style={{ marginLeft:'55px', marginRight: '78px' }}>Email ID :</label>
              <TextField style={{width:'300px'}} id="emailId" label="Email ID" variant="outlined"
                onChange={(e) => { setemailId(e.target.value) }}
                value={emailId} />
            </div>

            <div style={{ display: 'flex', marginlef: '20px', marginBottom: '10px',marginTop:'30px',alignItems:'center' }}>
              <label style={{ marginRight: '45px' }}>User Name:</label>
              <TextField style={{width:'300px'}} id="userName" label="User Name" variant="outlined"
                onChange={(e) => { setuserName(e.target.value) }}
                value={userName} />
           
              <label style={{ marginLeft:'55px',marginRight: '75px' }}>Password :</label>
              <TextField style={{width:'300px'}} id="password" label="Password" variant="outlined"
                onChange={(e) => { setpassword(e.target.value) }}
                value={password} />
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
  )
}

export default UserModel
