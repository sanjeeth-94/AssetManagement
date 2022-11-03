import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'Id', headerName: 'Id', width: 60 },
  { field: 'Department', headerName: 'Department', width: 120 },
  { field: 'Section', headerName: 'Section', width: 100 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 130 },
  { field: 'AMC Status', headerName: 'AMC Status', width: 130 },
  { field: 'Warranty Status', headerName: 'Warranty Status', width: 130 },
  { field: 'Insurance Status', headerName: 'Insurance Status', width: 130 },
  { field: 'Problem Note', headerName: 'Problem Note', width: 130 },
  { field: 'UserName', headerName: 'UserName', width: 130 },
  { field: 'action', headerName: 'Action', width: 130 ,  sortable: false,
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
    <div className='adduser' style={{ height: 400, width: '1202px' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd/>
    </div>
  );
}
