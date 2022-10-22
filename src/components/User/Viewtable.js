import React, { useEffect, useState } from 'react';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { DeleteOutlineSharp } from '@mui/icons-material';
import { json } from 'react-router-dom';

export default function DataTable() {


  const columns = [
    { field: 'id', headerName: 'Serial No', width: 80 },
    { field: 'employee_id', headerName: 'Employee Id', width: 140 },
    { field: 'employee_name', headerName: 'Employee Name', width: 140 },
    { field: 'department', headerName: 'Department', width: 140 },
    { field: 'designation', headerName: 'Designation', width: 140 },
    { field: 'mobile_number', headerName: 'Mobile', width: 140 },
    { field: 'email', headerName: 'Email', width: 140 },
    { field: 'user_name', headerName: 'UserName', width: 140 },
    { field: 'action', headerName: 'Action', width: 250, sortable: false, 
      cellClassname: 'actions', 
      type: 'actions',
      getActions: (params) => [
        <EditData selectedRow ={params.row}/>,
        <DeleteData selectedRow ={params.row}/>,
      ],
      // renderCell: (cellValues) => {

      //   return (
      //     <div >
      //       <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
      //         className='prbuton'
      //         variant="contained"
      //         color='primary'

      //       >
      //         Edit
      //       </Button>
      //       <Button style={{ width: '100px' }}
      //         variant="contained"
      //         color='primary' 
      //         onClick={() => deletUser()}
      //       >
      //         Delete
      //       </Button>
      //     </div>
      //   )
      // }
    }
  ];

  function EditData ({selectedRow}) {
    return(
      <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
        className='prbuton'
        variant="contained"
        color='primary'
        onClick={()=>{
          // alert(selectedRow.id);
          alert('Edit ' + selectedRow.id);
          console.log(selectedRow.id);
        }}
      >
        Edit
      </Button>
    )
  }

  function DeleteData({selectedRow}){
    return(
      <Button style={{ width: '100px' }}
        variant="contained"
        color='primary' 
        onClick={() => {
            deletUser(selectedRow.id)
            // alert('Delete ' + selectedRow.id);
            console.log(selectedRow.id);
          }
        }
      >
        Delete
      </Button>
    )
  }
  const deletUser = (id) => {
    alert('Delete ' + id);
    console.log('DELLETT',id)
    fetch(`http://192.168.1.174:8000/api/user/${id}/delete`,
    {
      method: 'POST',
    }).then((result)=>{
      result.json().then((responce)=>{
      console.log(id)
      })
    })


  }

  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.174:8000/api/user/showData",
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
  },[]);

  return (
    <div className='adduser' style={{ height: '500px', width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns} />
    </div>
  )
}
