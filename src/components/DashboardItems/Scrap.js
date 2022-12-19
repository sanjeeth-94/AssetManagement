import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';

const Scrap = () => {

    const [rows,setrows] = useState([]);
    const [loading,setLoading]=useState([]);

  const columns = [
    { field: 'department', headerName: 'Department', width: 160 },
    { field: 'sectionName', headerName: 'Section Name', width: 200 },
    { field: 'assetType', headerName: 'Asset Type', width: 200 },
    { field: 'assetName', headerName: 'Asset Name', width: 200 },
    { field: 'dateAndTime', headerName: 'Date and Time', width: 200 },
    { field: 'user', headerName: 'User', width: 150 },
  ];

  useEffect(()=>{
    
  },[]);
// setLoading(false);
  return (
    <div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
      style={{alignSelf:'center',textAlign:'center'}}>
        <h3>SCRAP</h3>
      </Grid>
    </Grid>
    <hr/>
    <Grid  container spacing={2} style={{ marginTop: '10px'}}>
      <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
      style={{ height: '400px',  marginTop: '20px',marginLeft:'5%' }}>
        
        <DataGrid
   //   loading={loading}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}/>
      </Grid>
    </Grid>   
  </div>
  )
}

export default Scrap
