import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import { AssetAddService,AssetUpdateService,FetchDepaertmentService  } from '../../../services/ApiServices';

const AssetModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentList, setDepartmentList] = useState([])
    const [department, setDepartment] = useState('')
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };
    
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
    
    const onDepartmentChange = (e) => {
        setDepartment(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
        (
            AssetAddService({
                
            },handleSuccess, handleException)
            ) : (
                AssetUpdateService({
                    id: editData.id,
                }, handleSuccess, handleException)
        );
    }
    
    const handleSuccess = (dataObject) =>{
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setOpen(false);
    }
    
    const handleException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
    }
  
    return (
        <div>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth maxWidth='lg'>
                <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
                    {"ADD ASSET"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form>
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Asset ID : </label>
                                <TextField  style={{marginLeft:'86px', width:'250px'}} id="Asset Id " label="Asset Id " variant="outlined"/>
                                <label style={{marginLeft:'90px'}}>Department:</label>
                                <Box>
                                    <FormControl style={{width:'250px' ,marginLeft:'55px'}}>
                                        <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Select Department"
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
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label style={{marginLeft:'1px'}}>Section:</label>
                                <Box>
                                    <FormControl style={{width:'250px' ,marginLeft:'96px'}}>
                                        <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Select Department"
                                        onChange={handleChange}>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <label style={{ marginLeft: '90px' }}>Asset Name : </label>
                                <TextField style={{marginLeft:'50px'}}id="Asset-Name" label="Asset Name" variant="outlined" />
                            </div>
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Financial Asset ID : </label>
                                <TextField  style={{marginLeft:'20px', width:'250px'}} id="Asset Id " label="Asset Id " variant="outlined"/>
                                <label style={{marginLeft:'88px'}}>Vendor Name:</label>
                                <Box>
                                    <FormControl style={{width:'250px' ,marginLeft:'40px'}}>
                                        <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Select Department"
                                        onChange={handleChange}>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Phone Number : </label>
                                <TextField  style={{marginLeft:'40px', width:'250px'}} id="Asset Id " label="Asset Id " variant="outlined"/>
                                <label style={{marginLeft:'90px'}}>Email Id: </label>
                                <TextField  style={{marginLeft:'80px', width:'250px'}} id="Asset Id " label="Asset Id " variant="outlined"/>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label >Vendor Address : </label>
                                <TextField style={{marginLeft:'35px', width:'250px'}} id="Vendor-Address" label="Vendor Address " variant="outlined" />
                                <label style={{ marginLeft: '90px' }}>Asset Type :</label>
                                <Box>
                                    <FormControl  style={{width:'250px' ,marginLeft:'50px'}}>
                                        <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
                                        <Select
                                        labelId="Vendor Name"
                                        id="Vendor-Name"
                                        value={age}
                                        label="Asset Type"
                                        onChange={handleChange}>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label>Manufacturer: </label>
                                <TextField style={{marginLeft:'58px', width:'250px'}} id="Manufacturer" label="Manufacturer" variant="outlined" />
                                <label style={{ marginLeft: '90px' }}>Asset Model: </label>
                                <TextField style={{marginLeft:'45px', width:'250px'}} id="Manufacturer" label="Manufacturer" variant="outlined"/>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label>PO No: </label>
                                <TextField style={{marginLeft:'109px', width:'250px'}}id="Manufacturer" label="Manufacturer" variant="outlined" />
                                <label style={{ marginLeft: '90px' }}>Invoice No :</label>
                                <TextField  style={{marginLeft:'45px', width:'250px'}} id="Manufacturer" label="Manufacturer" variant="outlined"/>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '400px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <FormControl>
                                    <FormLabel id="Warranty"></FormLabel>
                                    <RadioGroup
                                    row aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                        <FormControlLabel value="Warranty" control={<Radio />} label="Warranty" />
                                        <FormControlLabel style={{marginLeft:'40px'}} value="No Warranty" control={<Radio />} label="No Warranty" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label>Warranty Start Date:</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack style={{ width: '250px' , marginLeft: '18px' }} spacing={3}>
                                        <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        value={value}
                                        onChange={handleChangeDate}
                                        renderInput={(params) => <TextField {...params} />}/>
                                    </Stack>
                                </LocalizationProvider>
                                <label style={{marginLeft:'85px'}}>Warranty End Date:</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack style={{ width: '250px' }} spacing={3}>
                                        <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        value={value}
                                        onChange={handleChangeDate}
                                        renderInput={(params) => <TextField {...params} />}/>
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label >Warranty Document:</label>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Button style={{marginLeft: '20px'}}variant="contained" component="label">
                                        Upload
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                </Stack>
                                <label style={{ marginLeft: '250px' }}>Upload Document:</label>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Button variant="contained" component="label">
                                        Upload
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                </Stack>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                                <label >Description:</label>
                                <TextField style={{marginLeft:'80px', width:'250px'}} id="Manufacturer" label="Manufacturer" variant="outlined" />
                                <label style={{ marginLeft: '100px' }}>Asset Image:</label>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Button variant="contained" component="label">
                                        Upload
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                </Stack>
                            </div>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='addbutton'>
                        <Button onClick={handleClose}>Cancel</Button>
                           
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AssetModel
