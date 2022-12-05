import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DataGrid } from '@mui/x-data-grid';
import { MenuItem } from '@mui/material';
import { FetchAssetTypeService, FetchDepaertmentService, FetchSectionService } from '../../services/ApiServices';



export default function Assetmaster() {
  const [departmentList, setDepartmentList] = useState([]);
  const [sectionList,setSectionList] = useState([]);
  const [department,setDepartment]=useState("");
  const [section,setSection]=useState("");
  const [assetTypeList,setAssetTypeList] = useState([]);
  const [assetType,setAssetType] = useState('');
  const [rows, setRows ]= useState([]);

  const columns = [
    { field: 'Serial No', headerName: 'Serial No', width: 80 },
    { field: 'Department', headerName: 'Department', width: 140 },
    { field: 'Section', headerName: 'Section', width: 140 },
    { field: 'Machine Name', headerName: 'Machine Name', width: 140 },
    { field: 'Asset Type', headerName: 'Asset Type', width: 140 },
    { field: 'Manufacturer', headerName: 'Manufacturer', width: 140 },
    { field: 'Asset Model', headerName: 'Asset Model', width: 140 },
    { field: 'PO Details', headerName: 'PO Details', width: 140 },
    { field: 'Invoice Details', headerName: 'Invoice Details', width: 140 },
    { field: 'Waranty Start Date', headerName: 'Waranty Start Date', width: 140 },
    { field: 'Waranty End Date', headerName: 'Waranty End Date', width: 140 },
  ];
 
    useEffect(() => {
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);

    }, []);
    
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
    };
    const handleFetchDepartmentSuccess = (dataObject) =>{
        setSectionList(dataObject.data);

      }
      const handleFetchDepartmentException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
      }

      const onSectionChange = (e) => {
        setSection(e.target.value);
        FetchAssetTypeService({
            id: e.target.value
        },handleFetchAssetTypeSuccess, handleFetchAssetTypeException);
    };
    const handleFetchAssetTypeSuccess = (dataObject) =>{
        setAssetTypeList(dataObject.data);

      }
      const handleFetchAssetTypeException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
      }

    const onAssetTypeChange = (e)=>{
        setAssetType(e.target.value);
        
    };
       
  const onSubmit = (e) => {
    e.preventDefault();
    // FetchAsstTransferService({
      
    //   },handleFetchAsstTransferServiceSuccess, handleFetchAsstTransferServiceException)
    }
    const handleFetchAsstTransferServiceSuccess = () =>{
     
      }
      const handleFetchAsstTransferServiceException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
      }
 
  
  return(
    <div>
      <form>
        <div style={{marginTop:'20px',marginLeft:'2px', width:'150vh', display:'flex', alignItems:'center'}}>
          <label style={{marginLeft:'1px'}}>Department:</label>
          <Box>
            <FormControl style={{width:'150px' ,marginLeft:'16px'}}>
              <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
              <Select
              label="Select Department"
              value={department}
              onChange={(e) => onDepartmentChange(e)}>
                      {departmentList.map((data, index) => {
                          return (
                              <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                          )
                      })}
              </Select>
            </FormControl>
          </Box>
          <label style={{marginLeft:'15px'}}>Section:</label>
          <Box>
            <FormControl style={{width:'250px' ,marginLeft:'16px'}}>
              <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
              <Select
             
              label="Select Section"
              value={section}
              onChange={(e) => onSectionChange(e)}>
                      {sectionList.map((data, index) => {
                          return (
                              <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                          )
                      })}
            
              </Select>
            </FormControl>
          </Box>
          <label style={{marginLeft:'15px'}}>Asset Type:</label>
          <Box>
            <FormControl style={{width:'250px' ,marginLeft:'36px'}}>
              <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
              <Select
              label="Select Asset Type"
              value={assetType}
              onChange={(e) => onAssetTypeChange(e)}>
              {assetTypeList.map((data, index) => {
                  return (
                      <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                  )
              })}
              </Select>
            </FormControl>
          </Box>
          <Button style={{marginLeft:'15px'}} variant="contained">Submit</Button>
        </div>
        <form style={{border:'solid',borderColor:'whitesmoke',marginTop:'30px'}}>
          <h3 style={{marginTop:'30px',marginLeft:'40px'}}>VIEW ASSET</h3>
          <hr/>
          <div style={{ height: 400, width: '100%' , marginTop:'20px'}}>
            <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            onRowAdd/>
          </div>
        </form>
      </form>
    </div>
  )
}