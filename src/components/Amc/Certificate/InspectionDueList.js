import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {
  FetchDepaertmentService,
  FetchSectionService,
  FetchAssetTypeService,
  AMCServiceDueListService
} from '../../../services/ApiServices';

const InspectionDueList = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [department, setDepartment] = useState();
  const [section, setSection] = useState();
  const [sectionList, setSectionList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [assetType, setAssetType] = useState();
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [serviceDue,setserviceDue] = useState([]);
  const [fromDate, setfromDate] = useState('');
  const [toDate, settoDate] = useState('');
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });
  
  const handleChangefromDate = (e) => {
    setfromDate(e.target.value);
    console.log(e.target.value);
  };

  const handleChangetoDate = (e) => {
    settoDate(e.target.value);
    console.log(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    AMCServiceDueListService({}, )
  }, []);
  useEffect(() => {
    FetchDepaertmentService(handleFetchSuccess, handleFetchException);
  }, [editData]);

  const handleFetchSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data);
  }

  const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }

  const onDepartmentChange = (e) => {
    setDepartment(e.target.value);
    FetchSectionService ({
      id: e.target.value
    },handleFetchDepartmentSuccess, handleFetchDepartmentException);
  }

  const handleFetchDepartmentSuccess = (dataObject) =>{
    setSectionList(dataObject.data);
  }
  
  const handleFetchDepartmentException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }

  const onSectionChange = (e) => {
    setSection(e.target.value); 
    FetchAssetTypeService({ id: e.target.value },handleFetchAssetType, handleFetchAssetTypeException)   
  }

  const handleFetchAssetType = (dataObject) => {
    setAssetTypeList(dataObject.data);
  }

  const handleFetchAssetTypeException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    AMCServiceDueListService({ 
      id:assetType ,
      periodFrom:fromDate,
      periodTo:toDate,
    },handleAMCServiceDueList, handleAMCServiceDueListException)    
  }

  const handleAMCServiceDueList = (dataObject) => {
    setserviceDue(dataObject.data);
    setRows(dataObject.data);
    console.log(dataObject.data);
  }

  const handleAMCServiceDueListException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
  }

  const handleSuccess = (dataObject) =>{
    console.log(dataObject);
    setRefresh(oldValue => !oldValue);
    setNotification({
      status: true,
      type: 'success',
      message: dataObject.message,
    }); 
  }

  const onAssetTypeChange = (e) => {
    setAssetType(e.target.value);
  }
  
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'vendorId', headerName: 'Serial No', width: 200 },
    { field: 'vendorName', headerName: 'Vendor Name', width: 200 },
    { field: '', headerName: 'Inspection Date', width: 200 },
  ];
  
  return (
    <div>
      <form style={{border:'solid' , borderColor:'whitesmoke'}}>
        <div style={{marginTop:'20px'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <label style={{marginLeft:'20px', marginRight:'40px'}}>Inspection Date From :</label>
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
          </div>
          <div style={{display:'flex',alignItems:'center', marginTop:'20px', marginBottom:'20px'}}>
            <label style={{marginRight:'90px',marginLeft:'20px'}}>Department :</label>
            <Box >
              <FormControl style={{ width: '300px' }}>
                <InputLabel id="departmentlabel">Select Department</InputLabel>
                <Select
                labelId="departmentlabel"
                id='department'
                label="Department"
                onChange={(e) => onDepartmentChange(e)}>
                  {departmentList.map((data, index) => {
                    return (
                      <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <label style={{marginRight:'50px',marginLeft:'20px'}}>Section:</label>
            <Box >
              <FormControl style={{width:'255px'}} >
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={(e) => onSectionChange(e)}>
                  {sectionList.map((data, index) => {
                    return (
                      <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <label style={{marginRight:'50px',marginLeft:'20px'}}>Asset Type :</label>
            <Box >
              <FormControl style={{width:'255px'}}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={(e) => onAssetTypeChange(e)}>
                  {assetTypeList.map((data, index) => {
                    return (
                      <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
          </div>
          <Button style={{marginLeft:'50px', marginBottom:'30px'}} type='submit' variant="contained" onClick={onSubmit}>View</Button>
        </div>
      </form>
      <form style={{border:'solid ' ,borderColor:'whitesmoke'}}>
        <div>
          <h3 style={{marginLeft:'30px'}}>SERVICE DUE DATE</h3>
        </div>
        <hr/>
        <div style={{ height: '200px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
          <DataGrid
          rows={rows}
          columns={columns}/>
        </div>
        <Button style={{marginLeft:'50px', marginBottom:'30px',marginTop:'20px'}} variant="contained">Export</Button>
      </form>
    </div>
  )
}

export default InspectionDueList;
