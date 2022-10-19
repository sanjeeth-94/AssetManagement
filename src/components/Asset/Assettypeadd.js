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
import './Asset.css'

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

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
            <AddIcon className='Add'/>
                Add
            </Button>
            <div>
                <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"ADD ASSET TYPE"}
                    </DialogTitle>
                    <div>
                        <label>Department : </label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullwidth>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Department"
                                onChange={handleChange}>
                                    <MenuItem value={10}>R & D</MenuItem>
                                    <MenuItem value={20}>Production</MenuItem>
                                    <MenuItem value={30}>Testing</MenuItem>
                                    <MenuItem value={30}>Accounting</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <label>Section : </label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullwidth>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Department First"
                                onChange={handleChange}>
                                    {/* <MenuItem value={10}>R & D</MenuItem>
                                    <MenuItem value={20}>Production</MenuItem>
                                    <MenuItem value={30}>Testing</MenuItem>
                                    <MenuItem value={30}>Accounting</MenuItem> */}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <label>Asset Type : </label>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div>
                        <Button variant="contained">Add</Button>
                    </div>
                </Dialog>
            </div>
        </div>

    )
}