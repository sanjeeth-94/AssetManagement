import React, { useState,useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchRequestedService } from '../../services/ApiServices';

const RequestedService = () => {
    const [refresh , setRefresh]=useState(false)
    const [rows , setRows]= useState('')
    const columns = [
        { field: 'Id', headerName: 'Id', width: 80 },
        { field: 'Department', headerName: 'Department', width: 140 },
        { field: 'Section', headerName: 'Section', width: 140 },
        { field: 'AssetName', headerName: 'AssetName', width: 140 },
        { field: 'AMC Status', headerName: 'AMC Status', width: 140 },
        { field: 'Warranty Status', headerName: 'Warranty Status', width: 140 },
        { field: 'Insurance Status', headerName: 'Insurance Status', width: 140 },
        { field: 'Problem Note', headerName: 'Problem Note', width: 140 },
        { field: 'UserName', headerName: 'UserName', width: 140 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <EditData selectedRow={params.row} />,
            <DeleteData selectedRow={params.row} />,
        ],
        }
       
      ];

      useEffect(() => {
        FetchRequestedService(handleFetchSuccess, handleFetchException);
      
    }, [refresh]);
    
    const handleFetchSuccess = (dataObject) =>{
      setRows(dataObject.data);
  }

  const handleFetchException = (errorStaus, errorMessage) =>{
      console.log(errorMessage);
  }
     
      function DeleteData({ selectedRow }) {
        return (
            <Button style={{ width: '100px' }}
            variant="contained"
            color='primary'
       >
                Delete
            </Button>
        )
    }
    function EditData({ selectedRow }) {
      return (
          <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
          className='prbuton'
          variant="contained"
          color='primary'
       >
              Edit
          </Button>
      )
  }
  return (
    <div >
      <h2>REQUESTED SERVICE</h2>
      <hr/>
      <form style={{border:'solid', width:'95%',marginTop:'20px',height:'500px', marginLeft:'30px'}}>
        <div style={{margin:'30px',marginTop:'20px'}}>
          <h3>View Requested Service</h3>
          </div>
          <hr/>
    <DataGrid style={{marginLeft:'20px', marginRight:'20px',marginTop:'20px',height:'400px'}}
    rows={rows}
    columns={columns}
    rowsPerPageOptions={[5]}
    onRowAdd/>
    </form>
  </div>
  )
}

export default RequestedService
