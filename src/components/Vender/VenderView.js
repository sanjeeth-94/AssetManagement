import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import './Vender.css';

const columns = [
  { field: 'Serial No', headerName: 'Serial No', width: 80 },
  { field: 'Name', headerName: 'Employee Id', width: 140 },
  { field: 'Address', headerName: 'Employee Name', width: 140 },
  { field: 'Contact No', headerName: 'Department', width: 140 },
  { field: 'Email', headerName: 'Designation', width: 140 },
  { field: 'Contact Person', headerName: 'Mobile', width: 140 },
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

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];


export default function DataTableViews() {
  const [data,setData] = useState()
  return (
    <div className='addvendor' style={{ height: 400, width: '80%' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[5]}
      onRowAdd={(newData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            setData([...data, newData]);
            resolve();
          }, 1000);
        })}
      />
    </div>
  );
}
