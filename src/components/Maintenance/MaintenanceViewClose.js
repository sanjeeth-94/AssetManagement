import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NotificationBar from '../../services/NotificationBar';
import { UserAddService, UserUpdateService,FetchDepaertmentService } from '../../services/ApiServices';

const MaintenanceViewClose = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    useEffect(() => {
        
      }, [editData]);
    
      const handleClose = () => {
        setOpen(false);
      
        };
    
        const onSubmit = (e) => {
            e.preventDefault();
           
          }
  return (
    <div>
      <Dialog
      open={open}
      maxWidth='lg'
    >
      <form onSubmit={onSubmit}>
        <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
          {isAdd === true ? 'Add ' : 'Edit '}User
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='addbutton'>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
              {isAdd === true ? 'Add' : 'Update'}
            </Button>
          </div>
         
        </DialogActions>
      </form>
    </Dialog>
    </div>
  )
}

export default MaintenanceViewClose
