import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';

const columns = [
  { field: 'id', headerName: 'Serial No', width: 80 },
  { field: 'department', headerName: 'Department', width: 140 },
  { field: 'section', headerName: 'Section', width: 140 },
  { field: 'assetName', headerName: 'Machine', width: 140 },
  { field: 'assetType', headerName: 'Asset Type', width: 140 },
  { field: 'manufaturer', headerName: 'Manufacturer', width: 140 },
  { field: 'assetModel', headerName: 'Asset Model', width: 140 },
  { field: 'warrantyStartDate', headerName: 'Warranty Start Date', width: 140 },
  { field: 'warrantyEndDate', headerName: 'Warranty End Date', width: 140 },
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

export default function DataTable() {
  
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("hellow worl");
    fetch("http://192.168.1.174:8000/api/asset/showData",
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