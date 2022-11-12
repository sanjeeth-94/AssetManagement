import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import './Asset.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 80 },
  { field: 'Department', headerName: 'Department', width: 140 },
  { field: 'Section', headerName: 'Section', width: 140 },
  { field: 'Machine Name', headerName: 'Machine Name', width: 140 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 140 },
  { field: 'Manufacturer', headerName: 'Manufacturer', width: 140 },
  { field: 'Asset Model', headerName: 'Asset Model', width: 140 },
  { field: 'PO Details', headerName: 'PO Details', width: 140 },
  { field: 'Invoice Details', headerName: 'Invoice Details', width: 140 },
  { field: 'Waranty Start Date', headerName: 'Waranty Start Date', width: 140 },
  { field: 'Waranty End Date', headerName: 'Waranty End Date', width: 140 },
];

const rows = [
    //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    ];

export default function Assetmaster() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [tagAssetType, setTageAssetType] = useState("Department");
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

  const onTagAssetType = (event) => {
    setTageAssetType(event.target.value);
  };

  return(
    <div>
      <form>
        <div style={{marginTop:'20px',marginLeft:'2px', width:'150vh', display:'flex', alignItems:'center'}}>
          <label style={{marginLeft:'1px'}}>Department:</label>
          <Box>
            <FormControl style={{width:'150px' ,marginLeft:'16px'}}>
              <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Department"
              onChange={handleChange}>
              </Select>
            </FormControl>
          </Box>
          <label style={{marginLeft:'15px'}}>Section:</label>
          <Box>
            <FormControl style={{width:'250px' ,marginLeft:'16px'}}>
              <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Department"
              onChange={handleChange}>
              </Select>
            </FormControl>
          </Box>
          <label style={{marginLeft:'15px'}}>Asset Type:</label>
          <Box>
            <FormControl style={{width:'250px' ,marginLeft:'36px'}}>
              <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Department"
              onChange={handleChange}>
              </Select>
            </FormControl>
          </Box>
          <Button style={{marginLeft:'15px'}} variant="contained">Submit</Button>
        </div>
        <form style={{border:'solid',borderColor:'whitesmoke',marginTop:'30px'}}>
          <label style={{marginTop:'30px'}}>VIEW ASSET</label>
          <hr/>
          <div style={{marginLeft:'800px',display:'flex',alignItems:'center', marginTop:'20px'}}>
            <label>Search : </label>
            <TextField
            id="outlined-size-small"
            defaultValue="Search"
            size="small"/>
          </div>
          <div style={{ height: 400, width: '100%' , marginTop:'20px'}}>
            <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            onRowAdd/>
          </div>
        </form>
      </form>
    </div>
  )
}