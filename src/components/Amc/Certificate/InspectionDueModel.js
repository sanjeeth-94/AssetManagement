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
import NotificationBar from '../../../services/NotificationBar';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { UserAddService, UserUpdateService } from '../../../services/ApiServices';

const InspectionDueModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentList, setDepartmentList] = useState([])
    const [department, setDepartment] = useState('')
    const [employeeId, setemployeeId] = useState('')
    const [employeeName, setemployeeNamed] = useState('')
    const [designation, setdesignation] = useState('')
    const [mobile_number, setmobile_number] = useState('')
    const [emailId, setemailId] = useState('')
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
   
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };
      
    useEffect(() => {
     
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
      
        };
    
      const onSubmit = (e) => {
        e.preventDefault();
         isAdd === true ?
          (
        
          UserAddService({
          
         
          },handleSuccess, handleException)
          ) : (
         
          UserUpdateService({
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
      maxWidth='lg'
    >
      <form onSubmit={onSubmit}>
        <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
          {'Inspection Due'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
                <form>
                    <div style={{display:'flex' ,marginTop:'50px',alignItems:'center'}}>
                    <label style={{marginLeft:'40px',marginRight:'50px'}}>Inspection Date From:</label>
                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChangeDate}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                        </LocalizationProvider>
                        <label style={{marginLeft:'40px',marginRight:'50px'}}>To:</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                        </LocalizationProvider>

                    </div>
                    <div style={{display:'flex',  marginTop:'40px' , alignItems:'center'}}>
                        <label style={{marginLeft:'40px',marginRight:'20px'}}>Department:</label>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl style={{width:'200px'}}>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                        <label style={{marginLeft:'30px',marginRight:'20px'}}>Section:</label>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl style={{width:'200px'}}>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                        <label style={{marginLeft:'30px',marginRight:'20px'}}>Asset Type:</label>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl style={{width:'200px'}}>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </div>
                   
                </form>
            </div>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='addbutton'>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
              View
            </Button>
          </div>
          <NotificationBar
                    handleClose={handleCloseNotify}
                    notificationContent={openNotification.message}
                    openNotification={openNotification.status}
                    type={openNotification.type}
                />
        </DialogActions>
      </form>
    </Dialog>
    </div>
  )
}

export default InspectionDueModel
