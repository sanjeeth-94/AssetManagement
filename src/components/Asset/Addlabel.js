import React from 'react'
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
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox';
import './Asset.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function Addlabel() {
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
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } 
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
            <AddIcon className='Add'/>
            Add Label
            </Button>
            <div>
                <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"ADD Label"} 
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                                <div>
                                    <label>Department : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                <MenuItem value={10}>Accounting</MenuItem>
                                                <MenuItem value={20}>production</MenuItem>
                                                <MenuItem value={30}>R & D</MenuItem>
                                                <MenuItem value={40}>Testing</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div>
                                    <label> Select Section : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel  id="demo-simple-select-label">Select Department</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                                {/* <MenuItem value={10}>Accounting</MenuItem>
                                                <MenuItem value={20}>production</MenuItem>
                                                <MenuItem value={30}>R & D</MenuItem>
                                                <MenuItem value={40}>Testing</MenuItem> */}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div>
                                    <label>Asset Type : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                                        <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group">
                                            <FormControlLabel value="Select Asset" control={<Radio />} label="Select Asset" />
                                            <FormControlLabel value="Select Asset Id" control={<Radio />} label="Select Asset Id" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div>
                                    <label>Select Asset : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullwidth>
                                            <InputLabel id="demo-simple-select-label">Select Asset Type First</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div>
                                    <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                        <FormControlLabel value="BARCODE" control={<Radio />} label="BARCODE" />
                                        <FormControlLabel value="QRCODE" control={<Radio />} label="QRCODE" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <div>
                                    <Button variant="contained">Submit</Button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </div>      
    )
}