import React, { useEffect, useState } from 'react'
import BuildIcon from '@mui/icons-material/Build';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { FetchMaintenanceService } from '../../services/ApiServices';

const MaintenanceSchedulList = () => {
    
    const [rows, setRows] = useState([]);
    const columns = [

        { field: 'maintenanceId', headerName: 'Maintenance ID	', width: 80 },
        { field: 'maintenanceType', headerName: 'Maintenance Type	', width: 180 },
        { field: 'assetName', headerName: 'Machine	', width: 180 },
        { field: 'severity', headerName: 'Severity	', width: 140 },
        { field: 'problemNote', headerName: 'Problem Note	', width: 180 },
        { field: 'dateFrom', headerName: 'Date From	', width: 140 },
        { field: 'dateTo', headerName: 'Date To	', width: 140 },
        { field: 'timeFrom', headerName: 'Time From	', width: 140 },
        { field: 'timeTo', headerName: 'Time To	', width: 140 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,        }
    ];
    useEffect(()=>{
    FetchMaintenanceService(handleFetchMaintenanceService,handleFetchMaintenanceServiceException)
   },[]);

   const handleFetchMaintenanceService=(dataObject)=>{
    setRows(dataObject.data)

   }

   const handleFetchMaintenanceServiceException=(error,errorMessage)=>{
    console.log(errorMessage)
   }


  return (
    <div>
        <Grid container >
            <Grid container spacing={2}  style={{marginTop:'20px', marginLeft:'40px', marginRight:'0px'}}>
                    <Grid item xs={12} sm={6} md={2.8} lg={2.8} xl={3}
                    style={{
                        color: 'white',
                        display: 'box'  ,
                        background:'rgb(91, 87, 87)',
                        marginRight:'20px',
                        marginTop:'10px',
                        border: 'solid',
                        borderColor: 'aqua',

                    }}>
                    <p >MAINTENANCE</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                      
                    }}>
                        
                        <BuildIcon />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.6} lg={2.8} xl={3}
                    style={{
                        marginTop:'10px',
                        color: 'white',
                        display: 'box'  ,
                        background:'rgb(91, 87, 87)',
                        marginRight:'20px',
                        border: 'solid',
                        borderColor: 'aqua',

                    }}>
                    <p >WARRANTY DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                        }}>
                            
                            
                            <Link to='/warrantyList'><BuildIcon className='check-icon' /></Link>
                            </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.6} lg={2.8} xl={2.5}style={{
                    color: 'white',
                    display: 'box'  ,
                    background:'rgb(91, 87, 87)',
                    marginRight:'20px',
                    marginTop:'10px',
                    border: 'solid',
                    borderColor: 'aqua',

                }}>
                     <p >AMC DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                        }}>
                            
                           
                            <Link to='/amcTab'> <BuildIcon  /></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.6} lg={2.8} xl={2.5}style={{
                    color: 'white',
                    display: 'box'  ,
                    background:'rgb(91, 87, 87)',
                    marginRight:'20px',
                    marginTop:'10px',
                    border: 'solid',
                    borderColor: 'aqua',

                }}>
                     <p>CERTIFICATION DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                        }}>
                           
                            <BuildIcon className='check-icon' />
                        </div>
                    </Grid>
                    
            </Grid>

        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
             style={{ height: '500px', marginLeft: '40px', marginTop: '20px',marginRight:'30px',border:'solid',borderColor:'whitesmoke' }}
            >
                <h3 style={{marginLeft:'20px'}}>Maintenance Schedule</h3>
                <h/>
                <DataGrid
                    rows={rows}
                    columns={columns} />
            </Grid>

        </Grid>
   
    </div>
  )
}

export default MaintenanceSchedulList
