import React, { useEffect, useState } from 'react'
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
import { DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {FetchDepaertmentService } from '../../services/ApiServices';


const ViewAuditReport = () => {
    const [departmentList, setDepartmentList] = useState([])
    const [department, setDepartment] = useState('')
    useEffect(() => {
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);
      }, []);

      const onDepartmentChange = (e) => {
        setDepartment(e.target.value);
      }
      
      const handleFetchSuccess = (dataObject) =>{
        setDepartmentList(dataObject.data);
      }
      const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
      }
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'id', headerName: 'Serial No', width: 50 },
        { field: 'employee_id', headerName: 'Employee Id', width: 120 },
        { field: 'employee_name', headerName: 'Employee Name', width: 120 },
        { field: 'department', headerName: 'Department', width: 120 },
        { field: 'designation', headerName: 'Designation', width: 120 },
        { field: 'mobile_number', headerName: 'Mobile', width: 120 },
        { field: 'email', headerName: 'Email', width: 120 },
        { field: 'user_name', headerName: 'UserName', width: 120 },
    ];

const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState('');

  const handleChangeSelected = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <form style={{border:'solid'}}>
        <div>
            <h2 style={{marginLeft:'30px'}}>VIEW AUDITED REPORT</h2>
            <hr/>
      </div>    
      <div style={{marginTop:'20px'}}>
        <div style={{display:'flex',alignItems:'center'}}>
        <label style={{marginLeft:'20px', marginRight:'40px'}}>Audited Date From :</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    <label style={{marginLeft:'20px', marginRight:'85px'}}> To</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
        </div>

        <div style={{display:'flex',alignItems:'center', marginTop:'20px', marginBottom:'20px'}}>
            <label style={{marginRight:'90px',marginLeft:'20px'}}>Department :</label>
            <Box >
            <FormControl style={{ width: '300px' }}>
                  <InputLabel id="departmentlabel">Select Department</InputLabel>
                  <Select
                    labelId="departmentlabel"
                    id='department'
                    label="Department"
                    onChange={(e) => onDepartmentChange(e)}>
                    {departmentList.map((data, index) => {
                      return (
                        <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
    </Box>
    <label style={{marginRight:'50px',marginLeft:'20px'}}>Section:</label>
            <Box >
      <FormControl style={{width:'255px'}} >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChangeSelected}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <label style={{marginRight:'50px',marginLeft:'20px'}}>Asset Type :</label>
            <Box >
      <FormControl style={{width:'255px'}}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChangeSelected}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

        </div>
        <Button style={{marginLeft:'50px', marginBottom:'30px'}} variant="contained">View</Button>
      </div>
      </form>
      <form style={{border:'solid '}}>
        <div>
            <h2 style={{marginLeft:'30px'}}>AUDITED REPORT</h2>
        </div>
        <hr/>
        
        <div style={{ height: '200px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
       </div>
       <Button style={{marginLeft:'50px', marginBottom:'30px',marginTop:'20px'}} variant="contained">Export</Button>
      </form>
     </div>
  )
}

export default ViewAuditReport
