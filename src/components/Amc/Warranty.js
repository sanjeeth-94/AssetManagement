import React from 'react'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import './Amc.css'

const Warranty = () => {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <form>
      <div className='from'>
      <label>Date From</label>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Stack spacing={3}>
      <DesktopDatePicker
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
     </Stack>
    </LocalizationProvider>
    </div> 
    <div className='to'>
      <label>To</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
      </LocalizationProvider> 
      </div>
      <div className='view'>
      <Button variant="contained">View</Button>
      <Button variant="contained">View Due</Button>
      </div>
     
    </form>   
    
  )
}

export default Warranty;