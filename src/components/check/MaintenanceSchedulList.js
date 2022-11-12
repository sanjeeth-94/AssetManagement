import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { DataGrid } from '@mui/x-data-grid';

const MaintenanceSchedulList = () => {
    const rows =[];
    const columns = [

        { field: 'id', headerName: 'Maintenance ID	', width: 50 },
        { field: 'employee_id', headerName: 'Maintenance Type	', width: 120 },
        { field: 'employee_name', headerName: 'Machine	', width: 120 },
        { field: 'department', headerName: 'Severity	', width: 120 },
        { field: 'designation', headerName: 'Problem Note	', width: 120 },
        { field: 'mobile_number', headerName: 'Date	', width: 120 },
        { field: 'email', headerName: 'Time	', width: 120 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,        }
    ];
  return (
    <div>
      <div>
        <div className="main__cards" style={{marginLest:'30px'}} >
            <div className="card">
                <div className="card_inner" style={{
                    color: 'white',
                    display: 'inline'  ,
                  
                }}>
                    <p className="text-primary-p" >MAINTENANCE</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span className="font-bold text-title"></span>
                        <BuildIcon className='check-icon' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">WARRANTY DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title"></span>
                            <BuildIcon className='check-icon' /> 
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">AMC DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title"></span>
                            <BuildIcon className='check-icon' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='card_inner' style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className='text-primary-p'>CERTIFICATION DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className='font-bold text-title'></span>
                            <BuildIcon className='check-icon' />
                        </div>
                    </div>
                </div>
            </div>
           
            <div style={{ height: '400px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
        </div> 
    </div>
  )
}

export default MaintenanceSchedulList
