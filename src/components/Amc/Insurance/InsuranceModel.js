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

const InsuranceModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {

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
          {'Service Due'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
                <form>
                    <div style={{display:'flex',alignItems:'center',marginTop:'20px'}}>
                        <label style={{marginLeft:'30px',marginRight:'65px'}}>Name</label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
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
                        <label style={{marginLeft:'30px',marginRight:'40px'}}>E mail</label>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <label style={{marginLeft:'30px',marginRight:'40px'}}>Address</label>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{marginTop:'20px',display:'flex',alignItems:'center'}}>
                        <label style={{marginLeft:'30px',marginRight:'40px'}}>Company</label>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <label style={{marginLeft:'30px',marginRight:'40px'}}>Phone</label>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <form style={{border:'solid',marginTop:'20px'}}>
                        <div style={{marginTop:'20px',marginLeft:'20px',display:'flex',alignItems:'center'}}>
                            <label style={{marginRight:'30px',marginLeft:'30px'}}>Period : FROM</label>
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
                            <label style={{marginRight:'100px',marginLeft:'40px'}}>To</label>
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
                        <div style={{marginTop:'20px',display:'flex',alignItems:'center'}}>
                            <label style={{marginLeft:'50px',marginRight:'35px'}}>Premium Cost</label>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <label style={{marginLeft:'60px',marginRight:'20px'}}>Insurance Doc</label>
                             <TextField
                                style={{ width: '250px', marginLeft: '10px' }}
                                label="Canceled Cheque"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        if (reader.readyState === 2) {
                                        // setcanceledCheque(reader.result);
                                        }
                                    };
                                    reader.readAsDataURL(e.target.files[0]);
                                    }
                                }}
                                InputLabelProps={{ shrink: true }}
                                type="file"
                            />
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginTop:'20px'}}>
                        <label style={{marginLeft:'50px',marginRight:'45px'}}>Department :</label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
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
                            <label style={{marginLeft:'70px',marginRight:'68px'}}>Section:</label>
                            <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
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
                        <div style={{display:'flex',alignItems:'center',marginTop:'20px',marginBottom:'30px'}}>
                        <label style={{marginLeft:'50px',marginRight:'50px' , }}>Asset Type :</label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
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
                            <label style={{marginLeft:'60px',marginRight:'40px'}}>Asset Name :</label>
                            <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
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
                </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='addbutton'>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
              Apply
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

export default InsuranceModel
