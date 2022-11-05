import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 80 },
  { field: 'Department', headerName: 'Department', width: 140 },
  { field: 'Section', headerName: 'Section', width: 140 },
  { field: 'Asset Type', headerName: 'Asset Type', width: 140 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 140 },
  { field: 'RFID', headerName: 'RFID', width: 140 },
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function Tagassettable() {
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
