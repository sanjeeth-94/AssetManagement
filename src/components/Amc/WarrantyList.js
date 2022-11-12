import React, { useState } from 'react'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


const WarrantyList = () => {
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [rows, setRows] = useState([]);
  const [editData, setEditData] = useState('');
  const [refresh , setRefresh]=useState(false)
  const [openNotification, setNotification] = useState({
      status: false,
      type: 'error',
      message: '',
  });
  

    const columns = [
      { field: 'Vendor Name', headerName: 'Department	', width: 400 },
      { field: 'Asset Name', headerName: 'Machine		', width: 400 },
      { field: 'Service Due Date', headerName: '	Warranty start date	', width: 400 },
      {field: 'Asset Name', headerName: 'Warranty end date	', width: 400 },
      {field: 'Asset Name', headerName: '	Action', width: 400 },
  ];

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <form>
      <div style={{display:'flex',alignItems:'center',marginTop:'40px',marginLeft:'60px'}}>
        <label style={{marginRight:'30px'}}>Date From</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}/>
          </Stack>
        </LocalizationProvider>
        <label style={{marginRight:'30px',marginLeft:'30px'}}>To</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}/>
          </Stack>
        </LocalizationProvider> 
        <Button style={{marginRight:'30px',marginLeft:'30px'}} variant="contained">View</Button>
        <Button style={{marginRight:'30px',marginLeft:'30px'}} variant="contained">View Due</Button>
      </div> 
    </form>
    <div>

    </div>
    <div style={{border:'solid',marginTop:'30px    '}}>
      <h3 style={{marginLeft:'30px'}}>View Warranty</h3>
    <hr/>
    <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
       <DataGrid
       rows={rows}
       columns={columns} />
  </div>
  </div>
    </div>     
  )
}

export default WarrantyList;