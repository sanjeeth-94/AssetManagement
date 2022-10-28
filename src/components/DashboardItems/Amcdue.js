import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 180 },
  { field: 'Vender Name', headerName: 'Vender Name', width: 180 },
  { field: 'Start Date', headerName: 'Start Date', width: 140 },
  { field: 'End Date', headerName: 'End Date', width: 180 },
  { field: 'Service Pattern', headerName: 'Service Pattern', width: 180 },
  { field: 'Department', headerName: 'Department', width: 180 },
  { field: 'Section', headerName: 'Section', width: 140 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 180 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 180 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return(
        <form style={{marginTop:'40px', height:'600px',width:'1230px',marginLeft:'5px',border:'solid', borderColor:'whitesmoke'}}>
            <div>
                <h2 style={{background:'whitesmoke'}}> AMC DUE</h2>
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
