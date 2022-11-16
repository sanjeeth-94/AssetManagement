import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {UserAddService, UserUpdateService,FetchDepaertmentService,
  FetchSectionService,
  FetchAssetTypeService,
  ViewAuditReportService,
 } from '../../services/ApiServices';

const ViewAuditReport = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [department, setDepartment] = useState();
  const [section, setSection] = useState();
  const [sectionList, setSectionList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [assetType, setAssetType] = useState();
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [viewReport,setViewReport] = useState([]);
  const [fromDate, setfromDate] = useState(dayjs('2014-08-18T21:11:54'));;
  const [toDate, settoDate] = useState(dayjs('2014-08-18T21:11:54'));;
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });
  
  const handleChangefromDate = (newValue) => {
    setfromDate(newValue);
  };

  const handleChangetoDate = (newValue) => {
    setValue(newValue);
    settoDate(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

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


  const onViewClick = () => {
    
  }
  

  const onSubmit = (e) => {
    e.preventDefault();
      ViewAuditReportService({ 
        id:assetType ,
        fromDate:fromDate,
        toDate:toDate,
     },handleViewAuditReport, handleViewAuditReportException)    
  }
  const handleViewAuditReport = (dataObject) => {
    setViewReport(dataObject.data);
  }

  const handleViewAuditReportException = (errorStaus, errorMessage) => {
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

  const handleException = (errorObject, errorMessage) =>{
    console.log(errorMessage);
    setNotification({
      status: true,
      type: 'error',
      message:errorMessage,
    });
  }

  const handleCloseNotify = () => {
    setOpen(false)
    setNotification({
      status: false,
      type: '',
      message: '',
    });
  };

 
  const onAssetTypeChange = (e) => {
    setAssetType(e.target.value);
  }
  
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'id', headerName: 'Serial No', width: 180 },
    { field: 'employee_id', headerName: 'Audit Name', width: 200 },
    { field: 'employee_name', headerName: 'Department', width: 200 },
    { field: 'department', headerName: 'Section', width: 180 },
    { field: 'designation', headerName: 'Asset Type', width: 180 },
    {field: 'action', headerName: 'Action', width: 150, sortable: false,
    cellClassname: 'actions',
    type: 'actions',
        // getActions: (params) => [
        //     <EditData selectedRow={params.row} />,
        //     <DeleteData selectedRow={params.row} />,
        // ],
    }
  ];
  
  return (
    <div>
      <form style={{border:'solid' , borderColor:'whitesmoke'}}>
        <div>
          <h3 style={{marginLeft:'30px'}}>VIEW AUDITED REPORT</h3>
          <hr/>
        </div>
        <div style={{marginTop:'20px'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <label style={{marginLeft:'20px', marginRight:'40px'}}>Audited Date From :</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={fromDate}
                onChange={handleChangefromDate}
                renderInput={(params) => <TextField {...params} />}/>
              </Stack>
            </LocalizationProvider>
            <label style={{marginLeft:'80px', marginRight:'70px'}}> To</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={toDate}
                onChange={handleChangetoDate}
                renderInput={(params) => <TextField {...params} />}/>
              </Stack>
            </LocalizationProvider>
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
          <h3 style={{marginLeft:'30px'}}>AUDITED REPORT</h3>
        </div>
        <hr/>
        <div style={{ height: '200px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
          <DataGrid
          rows={rows}
          columns={columns} />
        </div>
        <Button style={{marginLeft:'50px', marginBottom:'30px',marginTop:'20px'}} variant="contained">Export</Button>
      </form>
    </div>
  )
}

export default ViewAuditReport;
