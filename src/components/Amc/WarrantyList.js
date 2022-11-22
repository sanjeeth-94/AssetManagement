import React, { useState , useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { FetchWarrantyService } from '../../services/ApiServices';

const WarrantyList = () => {
  const [rows, setRows] = useState([]);
  const [fromDate, setfromDate] = useState('');
  const [toDate, settoDate] = useState('');
  const [refresh , setRefresh]=useState(false)
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });

  

  useEffect(() => {
    FetchWarrantyService(handleFetchSuccess, handleFetchException);
   
}, [refresh]);

const handleFetchSuccess = (dataObject) =>{
    setRows(dataObject.data);
}

const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
}
  
  
  const handleChangefromDate = (e) => {
    setfromDate(e.target.value);
    console.log(e.target.value);
  };
  
  const handleChangetoDate = (e) => {
    settoDate(e.target.value);
    console.log(e.target.value);
  };
  
  const columns = [
    { field: 'department', headerName: 'Department	', width: 200 },
    { field: 'machine', headerName: 'Machine', width: 200 },
    { field: 'gray', headerName: '	Warranty start date	', width: 300 },
    {field: 'kyo', headerName: 'Warranty end date	', width: 300 },
    {field: 'action', headerName: '	Action', width: 300 },
  ];
  
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
          value={fromDate}
          onChange={(e) => { handleChangefromDate(e) }}/>
          <label style={{marginLeft:'80px', marginRight:'70px'}}> To</label>
          <TextField
          style={{width:'200px'}}
          id="Vendor-Address"
          variant="outlined"
          type='date'
          value={toDate}
          onChange={(e) => { handleChangetoDate(e) }}/>
          <Button style={{marginRight:'30px',marginLeft:'30px'}} variant="contained">View</Button>
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
    </div>     
  )
}

export default WarrantyList;