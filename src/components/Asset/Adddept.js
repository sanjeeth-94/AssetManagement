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
                        {"ADD DEPARTMENT"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                                <div>
                                    <label>Department Name : </label>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                </div>
                                <div>
                                    <label>Description : </label>
                                    <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="Empty"
                                    style={{ width: 200, heigh:10}}/>
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