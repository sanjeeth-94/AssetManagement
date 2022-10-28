import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 85 },
  { field: 'Vender Name', headerName: 'Vender Name', width: 130 },
  { field: 'Start Date', headerName: 'Start Date', width: 110 },
  { field: 'End Date', headerName: 'End Date', width: 110 },
  { field: 'Service Pattern', headerName: 'Service Pattern', width: 140 },
  { field: 'Department', headerName: 'Department', width: 120 },
  { field: 'Section', headerName: 'Section', width: 100 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 100 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 900 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return (
        <form style={{marginTop:'40px', height:'400px',width:'900px',marginLeft:'30px',border:'solid', borderColor:'whitesmoke'}}>
            <div>
                <h2> CERTIFICATE DUE</h2>
            </div>
            <hr/>
            <div>
                <label style={{marginLeft:'930px'}}>Search : </label>
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
