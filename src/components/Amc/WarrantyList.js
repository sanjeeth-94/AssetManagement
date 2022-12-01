import React, { useState , useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Visibility from '@mui/icons-material/Visibility';
import FileDownload from '@mui/icons-material/FileDownload';
import { FetchWarrantyService } from '../../services/ApiServices';
import WarrantyView from './WarrantyView';

const WarrantyList = () => {
  const [rows, setRows] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  
  const [warrantyStartDate, setwarrantyStartDate] = useState('');
  const [warrantyEndDate, setwarrantyEndDate] = useState('');
  const [refresh , setRefresh]=useState(false);
  const [isView, setIsView] = useState(false);
  const [editData, setEditData] = useState('');
  const [openView, setOpenView] = useState(false);
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    FetchWarrantyService({ 
      warrantyStartDate: warrantyStartDate,
      warrantyEndDate:warrantyEndDate,
    },handleFetchWarrantyService, handleFetchWarrantyServiceException)    
  }

  const handleFetchWarrantyService =(dataObject)=>{
    setRows(dataObject.data)
  }

  const handleFetchWarrantyServiceException=(errorObject, errorMessage)=>{
    console.log(errorMessage)
  }
  
  const handleChangewarrantyStartDate = (e) => {
    setwarrantyStartDate(e.target.value);
    console.log(e.target.value);
  };
  
  const handleChangewarrantyEndDate = (e) => {
    setwarrantyEndDate(e.target.value);
    console.log(e.target.value);
  };
  
  const columns = [
    { field: 'department', headerName: 'Department	', width: 200 },
    { field: 'assetName', headerName: 'Machine', width: 200 },
    { field: 'warrantyStartDate', headerName: '	Warranty start date	', width: 300 },
    {field: 'warrantyEndDate', headerName: 'Warranty end date	', width: 300 },
    {field: 'action', headerName: 'Action', width: 180, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <VisibilityData selectedRow={params.row} />,
            <FileDownloadData selectedRow={params.row} />,
        ],
        }
    ];

    function VisibilityData({ selectedRow }) {
      return (
          <Visibility 
          onClick={() => {
              
             
              setEditData(selectedRow);
              setOpenView(true);
              
          }}
          />
      )
  }

  function FileDownloadData({ selectedRow }) {
    return (
        <FileDownload />
    )
}

  
  return (
    <div>
      <form>
        <div style={{display:'flex',alignItems:'center',marginTop:'40px',marginLeft:'60px'}}>
          <label style={{marginRight:'30px'}}>Date From</label>
          <TextField
          style={{width:'200px'}}
          id="Vendor-Address"
          variant="outlined"
          type='date'
          value={warrantyStartDate}
          onChange={(e) => { handleChangewarrantyStartDate(e) }}/>
          <label style={{marginLeft:'80px', marginRight:'70px'}}> To</label>
          <TextField
          style={{width:'200px'}}
          id="Vendor-Address"
          variant="outlined"
          type='date'
          value={warrantyEndDate}
          onChange={(e) => { handleChangewarrantyEndDate(e) }}/>
          <Button style={{marginLeft:'50px', marginBottom:'30px'}} type='submit' variant="contained" onClick={onSubmit}>View</Button>
          <Button style={{marginRight:'30px',marginLeft:'30px'}} variant="contained">View Due</Button>
        </div> 
      </form>
      <div style={{border:'solid',marginTop:'30px',borderColor:'whitesmoke'}}>
        <h3 style={{marginLeft:'30px'}}>View Warranty</h3>
      <hr/>
      <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
        <DataGrid
        rows={rows}
        columns={columns} />
      </div>
    </div>
    <WarrantyView
                open={openView}
                setOpen={setOpenView}
              
                editData={editData}
                setRefresh={setRefresh}
                

            />


    </div>     
  )
}

export default WarrantyList;