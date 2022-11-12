import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { DepartmentAddService, DepartmentUpdateService } from '../../../services/ApiServices';
import NotificationBar from '../../../services/NotificationBar';

const DepartmentModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [departmentName,setDepartmentName]=useState("")
    const[description,setDescription]=useState("")
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
    useEffect(() => {
        setDepartmentName(editData.department_name|| '');
        setDescription(editData.description || '');
    }, [editData]);

    const handleClose = () => {              
        setOpen(false);
        setDepartmentName('');
        setDescription('');
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
        isAdd === true ?
        (
            DepartmentAddService({
                department_name:departmentName,
                description:description,
            },handleSuccess, handleException)
        ) : (
                DepartmentUpdateService({
                    id: editData.id,
                    department_name:departmentName,
                    description:description,
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
            message: errorMessage,
          });
    }
  
    return (
        <div>
            <Dialog 
            open={open}
            onClose={handleClose}fullWidth>
                <form onSubmit={onSubmit}> 
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                      {"ADD DEPARTMENT"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Department Name:</label>
                                <TextField style={{marginLeft:'20px', width:'250px'}}
                                label=""
                                variant="outlined"
                                onChange={((e)=>{setDepartmentName(e.target.value)})}
                                value={departmentName}
                                />
                            </div>
                            <div style={{marginTop:'10px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label>Description:</label>
                                <TextareaAutosize
                                style={{ width:'250px', height:'40px',marginLeft:'70px', marginTop:'20px'}}
                                aria-label="empty textarea"
                                placeholder="Address"
                                onChange={((e)=>{setDescription(e.target.value)})}
                                value={description}
                                />
                            </div>
                            <div>
                                <Button type='reset' onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>
                                    {isAdd === true ? 'Add' : 'Update'}
                                </Button>
                            </div>
                        </DialogContentText>
                    </DialogContent>
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

export default DepartmentModel
