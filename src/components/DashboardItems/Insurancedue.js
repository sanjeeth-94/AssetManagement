import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 180 },
  { field: 'Vendor Name', headerName: 'Vendor Name', width: 180 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 180 },
  { field: 'Service Due Date', headerName: 'Service Due Date', width: 180 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  return (
    <form style={{marginTop:'40px', height:'400px',width:'800px',marginLeft:'90px',border:'solid', borderColor:'whitesmoke'}}>
      <div>
        <h2> INSURANCE DUE</h2>
      </div>
      <hr/>
      <div>
        <label style={{marginLeft:'500px'}}>Search : </label>
        <TextField
        style={{marginBottom:'20px'}}
        id="outlined-size-small"
        defaultValue="Search"
        size="small"/>
      </div>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd />
    </form>   
  );
}
