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
import { SectionAddService,SectionUpdateService,FetchDepaertmentService  } from '../../../services/ApiServices';

const SectionModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentList, setDepartmentList] = useState([])
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    const handleClickOpen = () => {
        setOpen(true);
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
        setDepartmentList(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
        (
            SectionAddService({
                
            },handleSuccess, handleException)
            ) : (
                SectionUpdateService({
            id: editData.id,
          
          }, handleSuccess, handleException)
        );
    }
    
    const handleSuccess = (dataObject) =>{
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setOpen(false);
    }
    
    const handleException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
    }
    return (
        <div>
            <div>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"ADD SECTION"}
                    </DialogTitle>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Department:</label>
                        <Box>
                            <FormControl style={{width:'250px' ,marginLeft:'55px'}}>
                                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
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
                        <label style={{marginLeft:'1px'}}>Section:</label>
                        <TextField style={{marginLeft:'60px', width:'300px'}} id="outlined-basic" label="" variant="outlined" />
                    </div>
                    <div style={{marginTop:'30px', marginLeft:'200px', marginBottom:'20px'}}>
                        <Button variant="contained">ADD</Button>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default SectionModel