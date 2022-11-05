import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Id', headerName: 'Id', width: 80 , marginLeft:20},
  { field: 'Asset Id', headerName: 'Asset Id', width: 200 },
  { field: 'Assessment Status', headerName: 'Assessment Status', width: 700 },
  { field: 'User Name', headerName: 'User Name', width: 160 },
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  return (
    <div className='adduser' style={{ height: 200, width: '2700px' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd/>
    </div>
  );
}
