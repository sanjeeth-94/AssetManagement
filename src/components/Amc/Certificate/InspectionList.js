import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  AmcServiceAddService,
  AmcServiceUpdateService,
  FetchDepaertmentService,
  FetchSectionService ,
  FetchAssetTypeService, 
  FetchAssetNameService, 
} from '../../../services/ApiServices';

const InspectionList = ({ open, setOpen, isAdd, editData, setRefresh,isService }) => {
  const [department  ,setDepartment]= useState();
  const [departmentList,setDepartmentList]= useState([]);
  const [section ,setSection]= useState();
  const [sectionList,setSectionList]=useState([]);
  const [assetList, setAssetList]= useState([]);
  const [assetType, setAssetType] = useState('');
  const [asset, setAsset] = useState('');
  const [ assetNameList, setAssetNameList] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });
  
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
  
  const onSubmit = (e) => {
    e.preventDefault();
    isAdd === true ?
    (
      AmcServiceAddService({
        department:department,
        section:section,
        assetType:assetType,
      },handleSuccess, handleException)
          ) : (
            AmcServiceUpdateService({
              id: editData.id,
              department:department,
              section:section,
              assetType:assetType,
            }, handleSuccess, handleException)
        );
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
            }, handleFetchAssetTypeServiceSuccess, handleFetchAssetTypeServiceException);
          }
        
          const handleFetchAssetTypeServiceSuccess = (dataObject) => {
            setAssetList(dataObject.data);
           
          }
          
          const handleFetchAssetTypeServiceException = (errorStaus, errorMessage) => {
            console.log(errorMessage);
          }

          const onAssetChange = (e) => {
            setAsset(e.target.value)
        
            FetchAssetNameService({
              id: e.target.value
            }, handleFetchAssetNameServiceSuccess, handleFetchAssetNameServiceException);
          }
          const handleFetchAssetNameServiceSuccess = (dataObject) => {
            setAssetNameList(dataObject.data);
           
          }
          
          const handleFetchAssetNameServiceException= (errorStaus, errorMessage) => {
            console.log(errorMessage);
          }
        
    
    
        const onAssetTypeChange = (e) => {
            setAssetType(e.target.value);
        }
          
  
  const rows = [];
  const columns = [
    { field: 'vendorId', headerName: 'Serial No', width: 200 },
    { field: 'vendorName', headerName: 'Vendor Name', width: 200 },
    { field: '', headerName: 'Inspection Date', width: 200 },
    { field: '', headerName: 'Asset Name', width: 180 },
  ];

  return (
    <div>
      <div style={{display:'flex', marginBottom:'30px',marginLeft:'30px',alignItems:'center'}}>
        <label>Department:</label>
        <Box sx={{ minWidth: 120 }}>
          <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(e) => onDepartmentChange(e)}>
              {departmentList.map((data, index) => {
                return (
                  <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
        <label>Section:</label>
        <Box sx={{ minWidth: 120 }}>
          <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
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
        <label>Asset Type</label>
        <Box sx={{ minWidth: 120 }}>
          <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
            <InputLabel id="Asset Type"></InputLabel>
            <Select
            labelId="Asset Type"
            id="Asset Type"
            label="Asset Type"
            onChange={(e) => onAssetChange(e)}>
                    {assetList.map((data, index) => {
                      return (
                        <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                      )
                    })}
            </Select>
          </FormControl>
        </Box>
        <label>Asset Name :</label>
        <Box sx={{ minWidth: 120 }}>
          <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
            <InputLabel id="Asset Name "></InputLabel>
            <Select
            labelId="Asset Name "
            id="Asset Name "
            label="Asset Name "
            onChange={(e) => onAssetChange(e)}>
            {assetNameList.map((data, index) => {
              return (
                <MenuItem value={data.id} key={index}>{data.assetName}</MenuItem>
              )
            })}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained"onClick={onSubmit}>View</Button>
      </div>
      <form style={{border:'solid', borderColor:'whitesmoke'}}>
        <div>
          <h3 style={{marginLeft:'30px',marginTop:'10px'}}>INSPECTION DATE</h3>
        </div>
        <hr/>
        <div style={{ height: 200, width: '80%', marginLeft:'40px' }}>
          <DataGrid
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[5]}
          onRowAdd/>
        </div>
      </form>
    </div>
  )
}

export default InspectionList
