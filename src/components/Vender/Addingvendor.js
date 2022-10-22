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

export default function Adding() {


  
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
      <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth>
          <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
            {"ADD VENDOR"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form className='addform'>
                <div className='assetid'>
                  <label>Vendor Name :</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className='assetid'>
                  <label>Vendor Type :</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                <div className='dept'>
                  <label>Address :</label>
                  <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  style={{ width: 200 }}/>
                </div>
                <div className='assetid'>
                  <label sx={{alignitems:'start'}}>Email :</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{alignitems:'end'}} />
                </div>
                <div className='assetid'>
                  <label>Alt. Email :</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className='assetid'>
                  <label>Contact No :</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className='assetid'>
                  <label>Alt Contact No:</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className='assetid'>
                  <label>Contact Person :</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
            <DialogActions>
              <div className='addbutton'>
              <Button onClick={handleClose}>Cancel</Button> 
              <Button onClick={handleClose} autoFocus>
                Add
              </Button>
              </div>
            </DialogActions>
        </Dialog>
      </div>  
    </div>
  );
}