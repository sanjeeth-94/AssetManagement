import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {
        FetchDepaertmentService,
        FetchSectionService,
        FetchAssetTypeService , 
        FetchAssetNameService,
        FetchAsstTransferService
     } from '../../services/ApiServices';
import { MenuItem } from '@mui/material';
import NotificationBar from '../../services/NotificationBar';

const Transferasset = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentList, setDepartmentList] = useState([]);
    const [sectionList,setSectionList] = useState([]);

    const [departmentListMove, setDepartmentListMove] = useState([]);
    const [sectionListMove,setSectionListMove] = useState([]);
    const [assetTypeListMove,setAssetTypeListMove] = useState([]);
   
    const [assetNameList,setAssetNameList] = useState([]);
    const [assetName,setAssetName] = useState('');
    
    const [department,setDepartment]=useState("");
    const [departmentMove,setDepartmentMove]=useState("");
    const [section,setSection]=useState("");
    const [sectionMove,setSectionMove]=useState("");

    const [assetTypeList,setAssetTypeList] = useState([]);
    const [assetType,setAssetType] = useState('');
    const [assetTypeMove,setAssetTypeMove] = useState('');
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
    };
    const handleFetchDepartmentSuccess = (dataObject) =>{
        setSectionList(dataObject.data);

      }
      const handleFetchDepartmentException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
      }

      const onSectionChange = (e) => {
        setSection(e.target.value);
        FetchAssetTypeService ({
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
        FetchAssetNameService ({
            id: e.target.value
        },handleFetchAssetNameSuccess , handleFetchAssetNameException);
    };
    const handleFetchAssetNameSuccess = (dataObject) =>{
        setAssetNameList(dataObject.data);

      }
      const handleFetchAssetNameException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
      }
        const onAssetNameChange = (e)=>{
            setAssetName(e.target.value);
        }
  
        const onDepartmentMoveChange = (e) => {
            setDepartmentMove(e.target.value);
            FetchSectionService ({
                id: e.target.value
            },handleFetchDepartmentMoveSuccess, handleFetchDepartmentMoveException);
        };
        const handleFetchDepartmentMoveSuccess = (dataObject) =>{
            setSectionListMove(dataObject.data);
    
          }
          const handleFetchDepartmentMoveException = (errorStaus, errorMessage) =>{
            console.log(errorMessage);
          }
    
          const onSectionMoveChange = (e) => {
            setSectionMove(e.target.value);
            FetchAssetTypeService ({
                id: e.target.value
            },handleFetchAssetTypeMoveSuccess, handleFetchAssetTypeMoveException);
        };
        const handleFetchAssetTypeMoveSuccess = (dataObject) =>{
            setAssetTypeListMove(dataObject.data);
    
          }
          const handleFetchAssetTypeMoveException = (errorStaus, errorMessage) =>{
            console.log(errorMessage);
          }
    
        const onAssetTypeMoveChange = (e)=>{
            setAssetTypeMove(e.target.value);
           
        };
        
  const handleCloseNotify = () => {
    setOpen(false);
    setNotification({
      status: false,
      type: '',
      message: '',
    });
  };
        
       
  const onSubmit = (e) => {
    e.preventDefault();
    FetchAsstTransferService({
       id:assetName ,
       department:departmentMove,
       section:sectionMove,
       assetType:assetTypeMove,
      },handleFetchAsstTransferServiceSuccess, handleFetchAsstTransferServiceException)
    }
    const handleFetchAsstTransferServiceSuccess = (dataObject) =>{
        setAssetTypeMove('');
        setSectionMove('');
        setDepartmentMove('');
        setAssetType('');
        setAssetName('');
        setSection('');
        setDepartment('');
        setNotification({
            status: true,
            type: 'success',
            message: dataObject.message,
          });
      }
      const handleFetchAsstTransferServiceException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
        setNotification({
            status: true,
            type: 'error',
            message: errorMessage,
        });
      }

    return(
        <div style={{display:'flex'}}>
            <div >
                <form style={{width:'500px',border:'solid', borderColor:'whitesmoke'}} onSubmit={onSubmit}>
                    <h2 style={{marginLeft:'200px'}}>From</h2>
                    <hr />
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Department:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'28px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
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
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Section:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'59px'}}>
                                <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
                                <Select
                                labelId="Select Section"
                                id="Select Sectiont"
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
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Asset Type:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'34px'}}>
                                <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
                                <Select
                                labelId="Select Asset Type"
                                id="Select Asset Type"
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
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'70vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Asset Name:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'27px'}}>
                                <InputLabel id="demo-simple-select-label">Select Asset Name</InputLabel>
                                <Select
                                labelId="Select Asset Name"
                                id="Select Asset Name"
                                value={assetName}
                                label="Select Asset Name"
                                onChange={(e) => onAssetNameChange(e)}>
                                {assetNameList.map((data, index) => {
                                    return (
                                        <MenuItem value={data.id} key={index}>{data.assetName}</MenuItem>
                                    )
                                })}
                                
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginLeft:'150px', marginTop:'20px', marginBottom:'20px'}}>
                        <Button
                        
                         variant="contained"
                         type='submit'
                        >Move</Button>
                    </div>
                </form>
            </div>

            <div>
                <form style={{ marginLeft:'30px' ,width:'500px',border:'solid', borderColor:'whitesmoke'}}>
                    <h2 style={{marginLeft:'200px'}}>To</h2>
                    <hr/>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Department:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'22px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Department"
                                value={departmentMove}
                                onChange={(e) => onDepartmentMoveChange(e)}>
                                        {departmentList.map((data, index) => {
                                            return (
                                                <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                                            )
                                        })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Section:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'52px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sectionMove}
                                onChange={(e) => onSectionMoveChange(e)}>
                                        {sectionListMove.map((data, index) => {
                                            return (
                                                <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                                            )
                                        })}
                             
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Asset Type:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'30px', marginBottom:'20px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={assetTypeMove}
                                onChange={(e) => onAssetTypeMoveChange(e)}>
                                {assetTypeListMove.map((data, index) => {
                                    return (
                                        <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                                    )
                                })}

                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </form>
            </div>
            <NotificationBar
                handleClose={handleCloseNotify}
                notificationContent={openNotification.message}
                openNotification={openNotification.status}
                type={openNotification.type}
            />
        </div>       
    )
}

export default Transferasset;       
