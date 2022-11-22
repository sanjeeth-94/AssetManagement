import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ViewCertificateRenewal } from '../../../services/ApiServices';


const CertificateRenewal = () => {
  const [rows , setRows]=useState([]);
    const columns = [
        { field: 'department', headerName: 'Department', width: 250 },
        { field: 'assetName', headerName: 'Machine', width: 250 },
        { field: 'certificateStartDate', headerName: 'Certificate start date', width: 250 },
        { field: 'certificateEndDate', headerName: 'Certificate end date', width: 250 },
        { field: 'action', headerName: 'Action', width: 250 },
    ];
    useEffect(()=>{
      ViewCertificateRenewal(handleViewCertificateRenewalResult,handleViewCertificateRenewalError)
    },[]);
  
    const handleViewCertificateRenewalResult=(dataObject)=>{
      setRows(dataObject.data);
      console.log(dataObject.data);
    }
    const handleViewCertificateRenewalError=(errorStaus, errorMessage)=>{
      console.log(errorMessage)
      
    }
   
  return (
    <div>
     <form style={{border:'solid', borderColor:'whitesmoke'}}>
        
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
