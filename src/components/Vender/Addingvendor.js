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
        maxWidth='lg'>
          <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
            {"ADD VENDOR"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form>
                <div  style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                  <label>Vendor Name :</label>
                  <TextField style={{marginLeft:'20px', width:'250px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                  <label style={{marginLeft:'50px'}}>Vendor Type :</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{width:'250px' ,marginLeft:'50px'}}>
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
                <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                  <label>Address :</label>
                  <TextareaAutosize
                  style={{ width:'250', height:'40px', marginleft:'100px' }}
                  aria-label="empty textarea"
                  placeholder="Empty"/>
                  <label style={{alignitems:'start', marginLeft:'200px'}}>Email :</label>
                  <TextField style={{marginLeft:'20px'}} id="outlined-basic" label="Outlined" variant="outlined" sx={{alignitems:'end'}} />
                </div>
                <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                  <label>Alt. Email :</label>
                  <TextField style={{marginLeft:'50px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                  <label style={{marginLeft:'50px'}}>Contact No :</label>
                  <TextField style={{marginLeft:'50px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }} >
                  <label>Alt Contact No:</label>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <label style={{marginLeft:'60px'}}>Contact Person :</label>
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