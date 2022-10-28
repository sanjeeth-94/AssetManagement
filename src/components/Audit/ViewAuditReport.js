import React from 'react'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 120 },
  { field: 'Audit Name', headerName: 'Audit Name', width: 180 },
  { field: 'Department', headerName: 'Department', width: 180 },
  { field: 'Section', headerName: 'Section', width: 180 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 180 },
  { field: 'action', headerName: 'Action', width: 290   }
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

const ViewAuditReport = () => {
  const [age, setAge] = React.useState('');
  const handleChangeSelect= (event) => {
    setAge(event.target.value);
  };

  const handleChangeSelectType = (event) => {
    setAge(event.target.value);
  };
  
  const handleChangeSelectDepartment = (event) => {
    setAge(event.target.value);
  };
  
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChangeFrom = (newValue) => {
    setValue(newValue);
  };
  
  const handleChangeTo = (newValue) => {
    setValue(newValue);
  };
  
  return (
    <div >
      <form>
        <div>
          <div >
            <div>
            <h2 style={{marginLeft:'20px'}}>VIEW AUDITED REPORT</h2>
            <hr/>
            </div>
            <div >
              <div style={{display:'flex',marginLeft:'30px',marginTop:'20px',alignItems:'center'}}>
                <label style={{marginRight:'20px'}}>Audited Date From:</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChangeFrom}
                    renderInput={(params) => <TextField {...params} />}/>
                  </Stack>
                </LocalizationProvider>
                <label style={{marginLeft:'100px',marginRight:'20px'}}>To:</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChangeTo}
                    renderInput={(params) => <TextField {...params} />}/>
                  </Stack>
                </LocalizationProvider>
              </div>
              <div style={{display:'flex',marginTop:'20px',marginLeft:'30px',widows:'90%' ,alignItems:'center'}}>
                <div style={{display:'flex'}} >
                  <label>Department :</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{marginLeft:'30px',width:'300px',marginRight:'20px'}}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChangeSelectDepartment}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div style={{display:'flex'}}>
                  <label>Section:</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{marginLeft:'30px',width:'300px',marginRight:'20px'}}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChangeSelect}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div style={{display:'flex',alignItem:'center'}}>
                  <label>Asset Type :</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{marginLeft:'30px',width:'300px',marginRight:'20px'}}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChangeSelectType}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                </div>
                <button style={{width:'90px', marginTop:'20px',marginLeft:'30px',height:'40px',marginBottom:'20px'}}>
                  View
                </button>
                </div>
                </div>
                <hr/>
                <div>
                  <div style={{display:'flex',marginLeft:'30px'}}>
                    <h2>AUDITED REPORT</h2>
                  </div>
                    <hr/>
                    <div  style={{marginLeft:'1000px',display:'flex',alignItem:'center' ,marginBottom:'20px'}}>
                      <label  >Search:</label>
                      <TextField id="Search" label="Search" variant="outlined" />
                    </div>
                    <hr/>
                    <div className='adduser' style={{ height: '200px', width: '80%',marginTop:'20px' }}>
                      <DataGrid
                      rows={rows}
                      columns={columns}/>
                    </div>
                </div>
        </div>
      </form>
    </div>
  )
}

export default ViewAuditReport
