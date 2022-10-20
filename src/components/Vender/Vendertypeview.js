import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';

const columns = [
  { field: 'Vendor Id', headerName: 'Vendor Id', width: 100 },
  { field: 'Vendor Type', headerName: 'Vendor Type', width: 200 },
  { field: 'Description', headerName: 'Description', width: 200 },
  { field: 'action', headerName: 'Action', width: 240 ,  sortable: false,
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

export default function DataTableVender() {
  return (
    <div className='adduser' style={{ height: 400, width: '63%' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd/>
    </div>
  );
}
