import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';

const MaintenanceSchedulList = () => {
    const rows =[];
    const columns = [

        { field: 'id', headerName: 'Maintenance ID	', width: 80 },
        { field: 'employee_id', headerName: 'Maintenance Type	', width: 180 },
        { field: 'employee_name', headerName: 'Machine	', width: 180 },
        { field: 'department', headerName: 'Severity	', width: 140 },
        { field: 'designation', headerName: 'Problem Note	', width: 180 },
        { field: 'mobile_number', headerName: 'Date	', width: 140 },
        { field: 'email', headerName: 'Time	', width: 140 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,        }
    ];
  return (
    <div>
        <Grid container >
            <Grid container spacing={2}  style={{marginTop:'20px', marginLeft:'40px', marginRight:'0px'}}>
                    <Grid item xs={12} sm={6} md={2.8} lg={2.8} xl={3}
                    style={{
                        color: 'white',
                        display: 'box'  ,
                        background:'#382a2c',
                        marginRight:'20px',
                        marginTop:'10px',
                        border: 'solid',
                        borderColor: 'aqua',

                    }}>
                    <p className="text-primary-p" >MAINTENANCE</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                      
                    }}>
                        
                        <BuildIcon className='check-icon' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.6} lg={2.8} xl={3}
                    style={{
                        marginTop:'10px',
                        color: 'white',
                        display: 'box'  ,
                        background:'#382a2c',
                        marginRight:'20px',
                        border: 'solid',
                        borderColor: 'aqua',

                    }}>
                    <p className="text-primary-p">WARRANTY DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                        }}>
                            
                            <BuildIcon className='check-icon' /> 
                            </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.6} lg={2.8} xl={2.5}style={{
                    color: 'white',
                    display: 'box'  ,
                    background:'#382a2c',
                    marginRight:'20px',
                    marginTop:'10px',
                    border: 'solid',
                    borderColor: 'aqua',

                }}>
                     <p className="text-primary-p">AMC DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                        }}>
                            
                            <BuildIcon className='check-icon' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.6} lg={2.8} xl={2.5}style={{
                    color: 'white',
                    display: 'box'  ,
                    background:'#382a2c',
                    marginRight:'20px',
                    marginTop:'10px',
                    border: 'solid',
                    borderColor: 'aqua',

                }}>
                     <p className='text-primary-p'>CERTIFICATION DUES</p>
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
             style={{ height: '300px', marginLeft: '40px', marginTop: '20px',marginRight:'30px',border:'solid',borderColor:'whitesmoke' }}
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
