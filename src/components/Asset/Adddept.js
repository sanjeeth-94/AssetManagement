import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AddIcon from '@mui/icons-material/Add';
import './Asset.css'

export default function Adddept() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    

    return (
        <div className='addbutton'>
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
                        {"ADD DEPARTMENT"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Department Name:</label>
                                    <TextField style={{marginLeft:'20px', width:'250px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                                </div>
                                <div style={{marginTop:'10px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Description:</label>
                                    <TextareaAutosize
                                    style={{ width:'250px', height:'40px',marginLeft:'70px', marginTop:'20px'}}
                                     aria-label="empty textarea"
                                    placeholder="Empty"/>
                                </div>
                                <div style={{marginTop:'30px', marginLeft:'200px'}}>
                                    <Button variant="contained">ADD</Button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}