import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Id', headerName: 'Id', width: 80 },
  { field: 'Asset Id', headerName: 'Asset Id', width: 140 },
  { field: 'Assessment Status', headerName: 'Assessment Status', width: 140 },
  { field: 'User Name', headerName: 'User Name', width: 140 },
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  return (
    <div className='adduser' style={{ height: 200, width: '100%' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd/>
    </div>
  );
}
