import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { ViewAmcDue } from '../../services/ApiServices';

const Amcdue = () => {
    const [rows,setRows]=useState([]);
    const [loading , setLoading]=useState(true);
    
    const columns = [
        { field: 'vendorName', headerName: 'VendorName', width: 150 },
        { field: 'startName', headerName: 'Start Date', width: 120 },
        { field: 'endDate', headerName: 'End Date', width: 120 },
        { field: 'servicePattern', headerName: 'Service Pattern', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'section', headerName: 'Section', width: 120 },
        { field: 'assetType', headerName: 'Asset Type', width: 120 },
        { field: 'assetName', headerName: 'Asset Name', width: 120 },
    ];
    
    useEffect(()=>{
        ViewAmcDue(handleViewAmcDueResult,handleViewAmcDueError)
        
    },[]);

    const handleViewAmcDueResult=(dataObject)=>{
        setRows(dataObject.data);
        setLoading(false);
        console.log(dataObject.data);
    }
    
    const handleViewAmcDueError=(errorStaus, errorMessage)=>{
        console.log(errorMessage)
    }
  
    return (
        <div >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                style={{alignSelf:'center', textAlign:'center'}}>
                    <h3 >AMC DUE</h3>
                </Grid>
            </Grid>
            <hr/>
            <Grid  container spacing={2} style={{ marginTop: '10px'}}>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                style={{ height: '400px',  marginTop: '20px',marginLeft:'5%' }}>
                    <DataGrid
                    loading={loading}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Amcdue
