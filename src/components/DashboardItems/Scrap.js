import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 100 },
  { field: 'Department', headerName: 'Department', width: 140 },
  { field: 'Section Name', headerName: 'Section Name', width: 150 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 140 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 140 },
  { field: 'Date & Time', headerName: 'Date & Time', width: 150 },
  { field: 'User', headerName: 'User', width: 100 }, 
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return(
        <form style={{marginTop:'40px', height:'400px',width:'1100px',marginLeft:'60px',border:'solid', borderColor:'whitesmoke'}}>
            <div style={{marginLeft:'10px'}}>
                <h2> SCRAP</h2>
            </div>
            <hr/>
            <div>
                <label style={{marginLeft:'700px'}}>Search : </label>
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
