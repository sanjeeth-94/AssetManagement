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
  { field: 'Asset Name', headerName: 'Asset Name', width: 140 },
  { field: 'Inspection Due Date', headerName: 'Inspection Due Date', width: 180 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return (
        <form style={{marginTop:'40px', height:'500px',width:'1100px',marginLeft:'30px',border:'solid'}}>
            <div style={{marginLeft:'30px'}}>
                <h2> INCEPTION DUE</h2>
            </div>
            <hr/>
            <div style={{marginBottom:'20px', display:'flex',alignItems:'center'}}>
            <label style={{marginLeft:'800px'}}>Search : </label>
            <TextField
            id="outlined-size-small"
            defaultValue="Search"
            size="small"/>
            </div>
            <DataGrid style={{height:'250px'}}
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            onRowAdd />
        </form>
    );
}

