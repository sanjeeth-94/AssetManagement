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
import AmcServiceview from './AmcServiceview';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function AmcServiceadd() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };
  
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
      <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: '80%', marginBottom: '20px', marginTop: '5px' }}>
        Add
      </Button>
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth='lg'>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {"ADD ASSET"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form>
                <div>
                  <div><h2>VENDER DETAILS</h2> <hr /> </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label style={{ marginLeft: '20px', marginRight: '30px' }}>Name</label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '200px' }}>
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
                    <label style={{ marginLeft: '60px', marginRight: '30px' }}>E-mail</label>
                    <TextField id="Email" label="Email" variant="outlined" />
                    <label style={{ marginLeft: '60px', marginRight: '30px' }}> Address</label>
                    <TextField id="address" label="Address" variant="outlined" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <label style={{ marginLeft: '20px', marginRight: '20px' }}> Company</label>
                    <TextField id="address" label="Address" variant="outlined" />
                    <label style={{ marginLeft: '60px', marginRight: '30px' }}> Phone</label>
                    <TextField id="address" label="Address" variant="outlined" />
                  </div>
                  <form style={{ border: 'solid' }}>
                    <div style={{ margin: '20px' }}>
                      <h2>SERVICE DETAILS</h2>
                      <hr />
                    </div>
                    <div style={{ margin: '20px', display: 'flex', marginTop: '20px' }}>
                      <label style={{ marginLeft: '20px', marginRight: '80px' }}>
                        Period : FROM
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                          label="Date desktop"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChangeDate}
                          renderInput={(params) => <TextField {...params} />}/>
                        </Stack>
                      </LocalizationProvider>
                      <label style={{ marginLeft: '20px', marginRight: '80px' }}>
                        To
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                          label="Date desktop"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChangeDate}
                          renderInput={(params) => <TextField {...params} />}/>
                        </Stack>
                      </LocalizationProvider>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '40px', marginTop: '20px', alignItems: 'center' }}>
                      <label style={{ marginRight: '90px' }}>Premium Cost</label>
                      <TextField id="premium" label="Premium Cost" variant="outlined" />
                      <label style={{ marginLeft: '60px', marginRight: '50px' }}>AMC Doc</label>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Button style={{ width: "200px" }} variant="contained" component="label">
                          Upload
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                      </Stack>
                    </div>
                    <div style={{ display: 'flex', marginTop: '20px', marginLeft: '30px', alignItems: 'center' }}>
                      <label style={{ marginRight: '80px' }}>Service Pattern :</label>
                      <Box>
                        <FormControl style={{ width: '260px' }}>
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
                      <label style={{ marginRight: '10px', marginLeft: '30px' }}>Department :</label>
                      <Box>
                        <FormControl style={{ width: '260px' }} >
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
                    <div style={{ display: 'flex', marginTop: '20px', marginLeft: '30px', alignItems: 'center' }}>
                      <label style={{ marginRight: '140px' }}>Section:</label>
                      <Box>
                        <FormControl style={{ width: '260px' }}>
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
                      <label style={{ marginRight: '10px', marginLeft: '30px' }}>Asset Type :</label>
                      <Box>
                        <FormControl style={{ width: '260px' }}>
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
                    <div style={{ display: 'flex', marginTop: '20px', marginLeft: '30px', alignItems: 'center', marginBottom: '30px' }}>
                      <label style={{ marginRight: '100px' }}>Asset Name :</label>
                      <Box>
                        <FormControl style={{ width: '260px' }}>
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
                  </form>
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className='addbutton'>
              <Button style={{ border: 'solid', width: '150px' }} onClick={handleClose} autoFocus>Apply</Button>
            </div>
          </DialogActions>
        </Dialog>
        <AmcServiceview />
      </div>
    </div>
  )
}