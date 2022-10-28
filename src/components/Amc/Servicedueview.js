import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';

const columns = [
  { field: 'Vendor Name', headerName: 'Vendor Name', width: 280 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 240 },
  { field: 'Service Due Date', headerName: 'Service Due Date', width: 240 }
 
];

const rows = [

];

export default function DataTable() {
  return (
    <div className='adduser' style={{ height: 200, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        onRowAdd/>
    </div>
  );
}
