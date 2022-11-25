import React, { useState,useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ServiceRequestList = () => {
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [editData, setEditData] = useState(''); 
  const [refresh , setRefresh]=useState(false)
  const [rows , setRows]= useState([
    { id: 1, Department: 'Snow',Section: 'Jon', AssetName: 'Snow',AMCStatus: 'Jon',WarrantyStatus: 'Snow',
    section: 'Jon', },
  ])
  
  const columns = [
    { field: 'Department', headerName: 'Department', width: 140 },
    { field: 'Section', headerName: 'Section', width: 120 },
    { field: 'AssetName', headerName: 'AssetName', width: 120 },
    { field: 'AMC Status', headerName: 'AMC Status', width: 120 },
    { field: 'Warranty Status', headerName: 'Warranty Status', width: 140 },
    { field: 'Insurance Status', headerName: 'Insurance Status', width: 140 },
    { field: 'Problem Note', headerName: 'Problem Note', width: 140 },
    { field: 'UserName', headerName: 'UserName', width: 120 },
    {field: 'action', headerName: 'Action', width: 250, sortable: false,
    cellClassname: 'actions',
    type: 'actions',
    getActions: (params) => [
      <ViewData selectedRow={params.row} />
    ],
    }   
  ];
  
  function ViewData({ selectedRow }) {
    return (
      <VisibilityIcon
      onClick={() => {
        setIsAdd(true);
        setEditData(selectedRow);
        setOpen(true);
      }}/>
    )
  }
  
  useEffect(() => {
    
  }, [refresh]);
  
  function DeleteData({ selectedRow }) {
    return (
      <Button style={{ width: '100px' }}
      variant="contained"
      color='primary'>
        Delete
      </Button>
    )
  }
  
  function EditData({ selectedRow }) {
    return (
      <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
      className='prbuton'
      variant="contained"
      color='primary'>
        Edit
      </Button>
    )
  }

  return (
    <div >
      <h2>REQUESTED SERVICE</h2>
      <hr/>
      <form style={{border:'solid', borderColor:'whitesmoke', width:'95%',marginTop:'20px',height:'500px', marginLeft:'30px'}}>
        <div style={{margin:'30px',marginTop:'20px', marginLeft:'30px'}}>
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

export default ServiceRequestList;