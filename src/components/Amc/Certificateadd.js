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
import Certificateview from './Certificateview';

export default function Certificateadd() {
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

  return(
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
      <div>
        <Dialog 
        open={open}
        onClose={handleClose}
        fullScreen>
          <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
            {"VENDER DETAILS"}
          </DialogTitle>
          <div>
            <hr style={{bottom:'solid'}}/>
          </div>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form>
                <div>
                  <label>Name : </label>
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
                <div style={{display:'flex',alignItems:'center'}}>
                  <div className='assetid'>
                    <label> E mail : </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </div>
                  <div className='assetid'>
                    <label> Address : </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </div>
                  <div>
                    <label>Company : </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </div>
                  <div>
                    <label>Phone : </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className='addbutton'>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} autoFocus>Add</Button>
            </div>
          </DialogActions>
        </Dialog>
        <Certificateview />
      </div>
    </div>
  )
}