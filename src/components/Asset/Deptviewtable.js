import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'id', headerName: 'Dep No', width: 120 },
  { field: 'department_name', headerName: 'Department Name', width: 180 },
  { field: 'description', headerName: 'Description', width: 220 },
  { field: 'action', headerName: 'Action', width: 150 ,  sortable: false,
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

const deletUser = (id) => {
  alert('Delete ' + id);
  console.log('DELLETT',id)
  fetch(`http://192.168.1.174:8000/api/department/${id}/delete`,
  {
    method: 'POST',
  }).then((result)=>{
    result.json().then((responce)=>{
    console.log(id)
    })
  })


}


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
    <div style={{ height: 600, width: '700px', marginLeft:'100px'}}>
      <DataGrid
      rows={rows}
      columns={columns} />
    </div>
  )
}