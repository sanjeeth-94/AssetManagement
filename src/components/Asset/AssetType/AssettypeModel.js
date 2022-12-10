import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AssetTypeAddService, 
    AssetTypeUpdateService,
    FetchDepaertmentService,
    FetchSectionService , 
} from '../../../services/ApiServices';

const AssetTypeModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [department,setdepartment]=useState("");
    const [departmentList, setDepartmentList] = useState([]);
    const [section,setSection]=useState("");
    const [sectionList,setSectionList]=useState([]);
    const [assetType,setAssetType]=useState('');
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleClickOpen = () => {
        setOpen(true);
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
    
    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
        (
            AssetTypeAddService({
                department:department,
                section:section,
                assetType:assetType,
            },handleSuccess, handleException)
        ) : (
            AssetTypeUpdateService({
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
    }
    
    const handleException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
    }

    const onDepartmentChange = (e) => {
        setdepartment(e.target.value);
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
      }
      
        return (
            <div>
                <div>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                   fullWidth>
                    <form onSubmit={onSubmit}>
                        <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                            {"ADD SECTION"}
                        </DialogTitle>
                        
                        <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                            <label style={{marginLeft:'5px'}}>Depatmrent:</label>
                            <Box>
                                <FormControl style={{width:'250px' ,marginLeft:'55px'}}>
                                    <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Department"
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
                                <FormControl style={{width:'250px' ,marginLeft:'55px'}}>
                                    <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Department"
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
                            <label style={{marginLeft:'1px'}}>Asset Type :</label>
                            <TextField 
                                style={{marginLeft:'60px', width:'300px'}}
                                id="outlined-basic" label=""
                                variant="outlined" 
                                onChange={(e)=>{setAssetType(e.target.value)}}
                            />
                        </div>
                        <div>
                            <Button type='reset' onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>
                            {isAdd === true ? 'Add' : 'Update'}
                            </Button>
                        </div>
                    </form>
                </Dialog>
            </div>
        </div>
    )
}

export default AssetTypeModel;
