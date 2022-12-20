import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import UserModel from './UserModel';
import { FetchUserService, UserDeleteService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';

const UntageAssetList = () => {
    const [rows, setRows] = useState([]);
    const [loading , setLoading]=useState(true);

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 50 },
        { field: 'employee_id', headerName: 'Employee Id', width: 100 },
        { field: 'employee_name', headerName: 'Employee Name', width: 100 },
        { field: 'department', headerName: 'Department', width: 100 },
        { field: 'designation', headerName: 'Designation', width: 120 },
        { field: 'mobile_number', headerName: 'Mobile', width: 120 },
        { field: 'email', headerName: 'Email', width: 120 },
        { field: 'user_name', headerName: 'UserName', width: 120 },
       
    ];
    useEffect(() => {
        
       
    }, []);
  return (
    <div>
       <Grid container>
            <Grid xs={12} sm={6} md={6} lg={6} xl={6}
                    style={{
                    alignSelf: 'center',
                    textAlignLast: 'center',
                    marginTop: '20px',
                    }}
            >
                <h3 > Manage user</h3>
            </Grid>
        </Grid>
    </div>
  )
}

export default UntageAssetList
