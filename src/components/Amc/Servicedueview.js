import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'Vendor Name', headerName: 'Vendor Name', width: 280 },
  { field: 'Asset Name', headerName: 'Asset Name', width: 240 },
  { field: 'Service Due Date', headerName: 'Service Due Date', width: 240 },
//   { field: 'action', headerName: 'Action', width: 250 ,  sortable: false,
//       renderCell:(cellValues)=>{
//       return(
//         <div >
//         <Button
//         className='prbuton'
//         variant="contained"
//         color='primary'
        
//         // onClick={(event)=>{
//         //   handleClick(event, cellValues);
//         // }
//       // }
//         >
//           Edit
//         </Button>
//         <Button
//         variant="contained"
//         color='primary'
//         // onClick={(event)=>{
//         //   handleClick(event, cellValues);
//         // }
//       // }
//         >
//           Delete
//         </Button>
//         </div>
//       )
//     }}

 
];

const rows = [

];

export default function DataTable() {
  return (
    <div className='adduser' style={{ height: 200, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
      
        onRowAdd
      />
    </div>
  );
}
