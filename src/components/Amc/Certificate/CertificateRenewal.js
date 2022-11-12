import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const CertificateRenewal = () => {
    const rows = []
    const columns = [
        { field: 'id', headerName: 'Department', width: 250 },
        { field: 'employee_id', headerName: 'Machine', width: 250 },
        { field: 'employee_name', headerName: 'Certificate start date', width: 250 },
        { field: 'department', headerName: 'Certificate end date', width: 250 },
        { field: 'designation', headerName: 'Action', width: 250 },
    ];
  return (
    <div>
     <form style={{border:'solid'}}>
        
      <h3 style={{marginLeft:'40%'}}> View Certificate </h3>
      <hr/>
      <div>
      <Box sx={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
         </Box>
      </div>
     </form>
    </div>
  )
}

export default CertificateRenewal
