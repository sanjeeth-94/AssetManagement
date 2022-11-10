import React, { useEffect, useState } from 'react'
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
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { UserAddService, UserUpdateService,FetchDepaertmentService } from '../../services/ApiServices';

const UntageAssetModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
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
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
           <div>
                <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"UNTAG ASSET"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Department:</label>
                                    <Box >
                                        <FormControl style={{width:'250px', marginLeft:'80px'}}>
                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Section : </label>
                                    <Box >
                                        <FormControl style={{width:'250px', marginLeft:'105px'}}>
                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Asset Type :</label>
                                    <Box>
                                        <FormControl style={{width:'250px', marginLeft:'78px'}}>
                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Asset Name : </label>
                                    <Box>
                                        <FormControl style={{width:'250px', marginLeft:'70px'}}>
                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Reason For Untag:</label>
                                    <Box>
                                        <FormControl style={{width:'250px', marginLeft:'30px'}}>
                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Tag : </label>
                                    <FormControl style={{width:'250px', marginLeft:'30px'}}>
                                        <RadioGroup 
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group">
                                            <FormControlLabel style={{marginLeft:'20px'}} value="Block" control={<Radio />} label="Block" />
                                            <FormControlLabel style={{marginLeft:'20px'}} value="Reuse" control={<Radio />} label="Reuse" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div>
                                    <Button style={{marginLeft:'60px', marginTop:'10px'}} variant="contained">Untag</Button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
      
    </div>
  )
}

export default UntageAssetModel
