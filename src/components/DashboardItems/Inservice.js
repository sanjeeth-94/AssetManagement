import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 180 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 180 },
  { field: 'AMC Status', headerName: 'AMC Status', width: 180 },
  { field: 'Warranty Status', headerName: 'Warranty Status', width: 180 },
  { field: 'Insurance Status', headerName: 'Insurance Status', width: 180 },
  { field: 'Problem Note', headerName: 'Problem Note', width: 180 },
  { field: 'User Name', headerName: 'User Name', width: 180 },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
    return (
        <form style={{marginTop:'40px', height:'400px',width:'1100px',marginLeft:'65px',border:'solid', borderColor:'whitesmoke'}}>
            <div>
                <h2> IN SERVICE</h2>
            </div>
            <hr/>
            <div>
                <label style={{marginLeft:'800px'}}>Search : </label>
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
