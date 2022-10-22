import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'id', headerName: 'Serial No', width: 80 },
  { field: 'employee_id', headerName: 'Employee Id', width: 140 },
  { field: 'employee_name', headerName: 'Employee Name', width: 140 },
  { field: 'department', headerName: 'Department', width: 140 },
  { field: 'designation', headerName: 'Designation', width: 140 },
  { field: 'mobile_number', headerName: 'Mobile', width: 140 },
  { field: 'email', headerName: 'Email', width: 140 },
  { field: 'user_name', headerName: 'UserName', width: 140 },
  { field: 'action', headerName: 'Action', width: 250 ,  sortable: false,
    renderCell:(cellValues)=>{
      return(
        <div >
        <Button
        className='prbuton'
        variant="contained"
        color='primary'>
          Edit
        </Button>
        <Button
        variant="contained"
        color='primary'>
          Delete
        </Button>
        </div>
      )
    }
  }
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("hellow worl");
    fetch("http://192.168.1.174:8000/api/user/showData",
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })
    .then(response => response.json())
    .then((dataObject) => {
      setRows(dataObject);
    })
  }, []);

  return(
    <div className='adduser' style={{ height: 270, width: '90%' }}>
      <DataGrid
      rows={rows}
      columns={columns} />
    </div>
  )
}
