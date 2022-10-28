import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 180 },
  { field: 'Department', headerName: 'Department', width: 180 },
  { field: 'Section', headerName: 'Section', width: 180 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 180 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 180 },
  { field: 'Date & Time', headerName: 'Date & Time', width: 180 },
  { field: 'User', headerName: 'User', width: 140 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return (
        <form style={{marginTop:'40px', height:'200px',width:'1230px',marginLeft:'10px',border:'solid', borderColor:'whitesmoke'}}>
            <div>
                <h2> EOL</h2>
            </div>
            <hr/>
            <div>
                <label style={{marginLeft:'900px'}}>Search : </label>
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
