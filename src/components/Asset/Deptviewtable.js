import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'Dep No', headerName: 'Dep No', width: 80 },
  { field: 'Department Name', headerName: 'Department Name', width: 140 },
  { field: 'Description', headerName: 'Description', width: 140 },
  { field: 'action', headerName: 'Action', width: 250 ,  sortable: false,
      renderCell:(cellValues)=>{
      return(
        <div >
        <Button
        className='prbuton'
        variant="contained"
        color='primary'>
          Edit
        </Button>
        <Button
        variant="contained"
        color='primary'>
          Delete
        </Button>
        </div>
      )
    }
  }
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  return (
    <div className='adduser' style={{ height: 200, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        onRowAdd/>
    </div>
  );
}
