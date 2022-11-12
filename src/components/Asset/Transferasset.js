import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {FetchDepaertmentService,FetchSectionService,FetchAssetTypeService ,  } from '../../services/ApiServices';

const Transferasset = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentList, setDepartmentList] = useState([])
    const [department,setDepartment]=useState("");
    const [section,setSection]=useState("");
    const [assetTypeList,setAssetTypeList] = useState([]);
    const [assetType,setAssetType] = useState('');
    
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
    };
    return(
        <div style={{display:'flex'}}>
            <div >
                <form style={{width:'500px',border:'solid', borderColor:'whitesmoke'}}>
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
                                >
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Section:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'59px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                
                                label="Select Department"
                                >
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Asset Type:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'34px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                               
                                label="Select Department"
                               >
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Asset Name:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'27px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                
                                label="Select Department"
                                >
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{marginLeft:'150px', marginTop:'20px', marginBottom:'20px'}}>
                        <Button variant="contained">Move</Button>
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
                                >
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
                                
                                label="Select Department"
                                >
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
                                
                                label="Select Department"
                                >
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </form>
            </div>
        </div>       
    )
}

export default Transferasset;       
