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

export default function Assetsection() {
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
        <div style={{marginLeft:'900px' , marginTop:'20px'}}>
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
                        {"ADD SECTION"}
                    </DialogTitle>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Department:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'28px'}}>
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
                        <label style={{marginLeft:'1px'}}>Section:</label>
                        <TextField style={{marginLeft:'60px', width:'300px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{marginTop:'30px', marginLeft:'200px', marginBottom:'20px'}}>
                        <Button variant="contained">ADD</Button>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}