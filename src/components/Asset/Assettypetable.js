import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'id', headerName: 'Asset Type No', width: 180 },
  { field: 'asset_type', headerName: 'Asset Type', width: 140 },
  { field: 'department', headerName: 'Department Name', width: 140 },
  { field: 'section', headerName: 'Section', width: 140 },
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

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
     fetch("http://192.168.1.174:8000/api/assetType/showData",
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
    <div className='adduser' style={{ height: 400, width: '800px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        onRowAdd/>
    </div>
  );
}
