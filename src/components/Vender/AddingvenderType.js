import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function AddingvenderType() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='add1'>
      <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth>
          <DialogTitle id="alert-dialog-title" sx={{background:'grey'}}>
            {"ADD VENDOR TYPE"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form className='addform'>
                <div className='assetid'>
                  <label>Vendor Type :</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className='dept'>
                  <label>Description :</label>
                  <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  style={{ width: 200 }}/>
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className='addbutton'>
              <Button onClick={handleClose} autoFocus>Add</Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>      
    </div>
  );
}