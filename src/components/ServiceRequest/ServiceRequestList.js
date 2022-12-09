import React, { useState,useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';

import BuildIcon from '@mui/icons-material/Build';
import ServiceRequestView from './ServiceRequestView';
import { FetchServiceRequestService } from '../../services/ApiServices';
import ServiceRequest from './ServiceRequest';

const ServiceRequestList = () => {
  const [open, setOpen] = useState(false);
  const [open1,setOpen1]=useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [editData, setEditData] = useState(''); 
  const [refresh , setRefresh]=useState(false)
  const [rows , setRows]= useState("");
    
  
  const columns = [
    { field: 'department', headerName: 'Department', width: 110 },
    { field: 'section', headerName: 'Section', width: 120 },
    { field: 'assetName', headerName: 'AssetName', width: 120 },
    { field: 'amcStatus', headerName: 'AMC Status', width: 120 },
    { field: 'warrantyStatus', headerName: 'Warranty Status', width: 140 },
    { field: 'insuranceStatus', headerName: 'Insurance Status', width: 140 },
    { field: 'problemNote', headerName: 'Problem Note', width: 140 },
    { field: 'userName', headerName: 'UserName', width: 120 },
    {field: 'action', headerName: 'Action', width: 150, sortable: false,
    cellClassname: 'actions',
    type: 'actions',
    getActions: (params) => [
      <ViewData selectedRow={params.row} />,
      <BuildData selectedRow={params.row}/>
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

  function BuildData({ selectedRow }) {
    return (
      <BuildIcon
      onClick={() => {
       
        setOpen1(true);
      }}/>
    )
  }



  
  useEffect(() => {
    FetchServiceRequestService(handleServiceRequestResult,handleServiceRequestError)

  },[]);

  const handleServiceRequestResult=(dataObject)=>{
    setRows(dataObject.data);
    console.log("data"+dataObject.data);
  }

  const handleServiceRequestError=(errorStaus, errorMessage)=>{
    console.log("error"+errorMessage)
  }
  
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

      <ServiceRequestView
      open={open}
      setOpen={setOpen}
      isAdd={isAdd}
      editData={editData}
      setRefresh={setRefresh}
  />
  <ServiceRequest
    open1={open1}
    setOpen1={setOpen1}
    editData={editData}
    setRefresh={setRefresh}
  />

  </div>
  )
}

export default ServiceRequestList;