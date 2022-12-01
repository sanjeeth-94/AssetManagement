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
import NotificationBar from '../../../services/NotificationBar';

const SectionModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentList, setDepartmentList] = useState([])
    const [department,setDepartment]=useState("");
    const [section,setSection]=useState("");
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
    
    
    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(() => {
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);
        setDepartment(editData.department);
        setSection(editData.section);

    }, [editData]);
    
    const handleFetchSuccess = (dataObject) =>{
        setDepartmentList(dataObject.data);
    }
    
    const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }
    
    const onDepartmentChange = (e) => {
        setDepartment(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
        (
            SectionAddService({
                department:department,
                section:section,
            
            },handleSuccess, handleException)
        ) : (
            SectionUpdateService({
            id: editData.id,
            department:department,
            section:section,
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
    }
    const handleCloseNotify = () => {
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };
    
    return (
        <div>
            <Dialog
            open={open}
            onClose={handleClose}
            maxWidth='lg'>
                <form onSubmit={onSubmit}>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"ADD SECTION"}
                    </DialogTitle>
                    <div style={{width:'600px'}}>
                        <div style={{marginTop:'20px',marginLeft:'5px', display:'flex', alignItems:'center'}}>
                            <label style={{marginLeft:'5px'}}>Department:</label>
                            <Box>
                                <FormControl style={{width:'250px' ,marginLeft:'55px'}}>
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
                        <div style={{marginTop:'20px',marginLeft:'5px', display:'flex', alignItems:'center'}}>
                            <label style={{marginLeft:'1px'}}>Section:</label>
                            <TextField
                            style={{marginLeft:'60px', width:'300px'}} 
                            id="outlined-basic" 
                            label="" 
                            variant="outlined"
                            value={section} 
                            onChange={(e) => {setSection(e.target.value)}}/>
                        </div>
                        <div style={{alignItem:'left', marginTop:'20px'}}>
                            <Button type='reset' onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>
                                {isAdd === true ? 'Add'   : 'Update'}
                            </Button>
                        </div>
                    </div>
                </form>
            </Dialog>   
                    
      <NotificationBar
          handleClose={handleCloseNotify}
          notificationContent={openNotification.message}
          openNotification={openNotification.status}
          type={openNotification.type}
      />        
        </div>
    )
}

export default SectionModel