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
  { field: 'Department', headerName: 'Department', width: 180 },
  { field: 'Section', headerName: 'Section', width: 140 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 180 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 180 },
  { field: 'Tag Id', headerName: 'Tag Id', width: 180 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return (
        <form style={{marginTop:'40px', height:'600px',width:'700px',marginLeft:'150px',border:'solid', borderColor:'whitesmoke'}}>
            <div>
                <h2> SALE</h2>
            </div>
            <hr/>
            <div>
            <label style={{marginLeft:'400px'}}>Search : </label>
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

