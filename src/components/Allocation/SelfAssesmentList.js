import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SelfAssesmentList = () => {
    const rows = [];
    const columns = [
        { field: 'Id', headerName: 'Id', width: 80 , marginLeft:20},
        { field: 'Asset Id', headerName: 'Asset Id', width: 200 },
        { field: 'Assessment Status', headerName: 'Assessment Status', width: 700 },
        { field: 'User Name', headerName: 'User Name', width: 160 },
      ];
      
  return (
    <div>
        <div style={{marginLeft:'500px'}}>
            <h2>View Asset</h2>
        </div>
        <hr/>
       <div style={{ height: 200, width: '90%', marginLeft:'30px' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd/>
    </div>
    </div>
  )
}

export default SelfAssesmentList
