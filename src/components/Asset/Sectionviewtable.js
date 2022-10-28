import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';

const columns = [
  { field: 'id', headerName: 'Section No', width: 80 },
  { field: 'department', headerName: 'Department', width: 140 },
  { field: 'section', headerName: 'Section', width: 140 },
  {field: 'action', headerName: 'Action', width: 250, sortable: false,
  renderCell: (cellValues) => {
    return (
      <div>
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

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.174:8000/api/section/showData",
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
  return (
    <div className='adduser' style={{ height: '51vh', width: '160vh', margin: '0px' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd />
    </div>
  );
}
