import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NotificationBar from '../../services/NotificationBar';
import { AmcServiceAddService, 
  AmcServiceUpdateService,
  FetchDepaertmentService, 
  FetchSectionService ,
  FetchAssetTypeService, } from '../../services/ApiServices';

const AmcService = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [department  ,setDepartment]= useState();
  const [departmentList,setDepartmentList]= useState([]);
  const [section ,setSection]= useState();
  const [sectionList,setSectionList]=useState([]);
  const [assetList, setAssetList]= useState([]);
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [assetType, setAssetType] = useState('');
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
  
  const onAssetChange = (e) => {
    setDepartment(e.target.value);
    FetchSectionService ({
      id: e.target.value
    },handleFetchDepartmentSuccess, handleFetchDepartmentException);
    
  }
  
  const handleFetchAssetTypeServiceSuccess = (dataObject) =>{
    setAssetList(dataObject.data);
  }
  
  const handleFetchAssetTypeServiceException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  
  
  const onSubmit = (e) => {
    e.preventDefault();
    isAdd === true ?
    (
      AmcServiceAddService({
        department:department,
        section:section,
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
            FetchAssetTypeService({ id: e.target.value },handleFetchAssetType, handleFetchAssetTypeException)   
          }

          const handleFetchAssetType = (dataObject) => {
            setAssetTypeList(dataObject.data);
        }
          const handleFetchAssetTypeException = (errorStaus, errorMessage) => {
            console.log(errorMessage);
        }
    
    
        const onAssetTypeChange = (e) => {
            setAssetType(e.target.value);
        }
          
    
    const rows = [];
    const columns = [
        { field: 'Vendor Name', headerName: 'Vendor Name', width: 280 },
        { field: 'Asset Name', headerName: 'Asset Name', width: 240 },
        { field: 'Service Due Date', headerName: 'Service Due Date', width: 240 },
        { field: 'Action', headerName: 'Action', width: 240 },   
    ];

    
    return (
        <div style={{border:'solid' , borderColor:'whitesmoke'}}>
        <div style={{display:'flex', marginBottom:'30px',marginLeft:'30px',alignItems:'center',marginTop:'20px'}}>
            <label>Department:</label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=""
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
                    label=""
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
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"     
                    label=""
                    onChange={(e) => onAssetTypeChange(e)}>
                    {assetTypeList.map((data, index) => {
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
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="">
                    </Select>
                </FormControl>
            </Box>
            <Button variant="contained">Contained</Button>
        </div>
        <hr/>
        <div style={{ height: '300px', width: '80%', marginLeft:'40px', }}>
            <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            onRowAdd/>
        </div>
    </div>
  )
}

export default AmcService;
