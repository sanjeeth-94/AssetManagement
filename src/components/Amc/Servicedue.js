import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Serviceduedate from './Serviceduedate';

export default function Servicedue() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChangedate = (newValue) => {
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Service Due
      </Button>
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        fullScreen>
          <div>
            <hr style={{bottom:'solid'}}/>
            </div>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className='addform'>
                  <div className='assetid'>
                    <label>Service Date From : </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={3}>
                        <DesktopDatePicker
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChangedate}
                        renderInput={(params) => <TextField {...params} />}/>
                      </Stack>
                    </LocalizationProvider>
                    </div>
                    <div className='assetid'>
                      <label>To : </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChangedate}
                          renderInput={(params) => <TextField {...params} />}/>
                        </Stack>
                      </LocalizationProvider>
                      <div className='assetid'>
                        <label>Department : </label>
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
                        <div className='assetid'>
                          <label>Asset Type : </label>
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
                        <div className='view'>
                          <Button variant="contained">View</Button>
                        </div>
                      </div>
                    </form>
                <Serviceduedate />
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
  );
}