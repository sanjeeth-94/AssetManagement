import React from 'react'
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


export default function Assetadd() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
   
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };

    return(
        <div style={{marginLeft:'750px'}}>
            <Button variant="outlined" onClick={handleClickOpen}>
                <CalendarMonthIcon className='Add'/>
                schedule
            </Button>
            <div>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"AUDIT ASSETS"}
                    </DialogTitle>    
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
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
                                        <FormControl style={{width:'250px' ,marginLeft:'30px'}}>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">   
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Section : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl style={{width:'250px' ,marginLeft:'60px'}}>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Asset Type : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl style={{width:'250px' ,marginLeft:'35px'}}>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Audit Name</label>
                                    <TextField style={{marginLeft:'40px', width:'250px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                                </div>
                                <div>
                                    <Button style={{marginLeft:'100px', marginTop:'20px'}}variant="contained">Schedule</Button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>                            
                </Dialog>
            </div>
        </div>
    )
}