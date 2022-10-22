import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'id', headerName: 'Dep No', width: 80 },
  { field: 'department_name', headerName: 'Department Name', width: 140 },
  { field: 'description', headerName: 'Description', width: 140 },
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
     fetch("http://192.168.1.174:8000/api/department/showData",
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })
    .then(response => response.json())
    .then((dataObject) => {
      setRows(dataObject.data);
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