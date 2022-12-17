import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NotificationBar from '../../services/NotificationBar';
import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const UserSelfAssessment = ({ open2, setOpen2,  editData, setRefresh }) => {
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
      });

      const handleCloseNotify = () => {
        setOpen(false)
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };

    const onSubmit = (e) => {

        e.preventDefault();
    }
  return (
    <Dialog
      open={open2}
      maxWidth='lg' >
      <form onSubmit={onSubmit}>
        <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            Asset Return
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
                <Grid container>
                    <Grid>

                    </Grid>
                </Grid>
            </div>         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='addbutton'>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
             Return
            </Button>
          </div>
         
        </DialogActions>
      </form>
        <NotificationBar
            handleClose={handleCloseNotify}
            notificationContent={openNotification.message}
            openNotification={openNotification.status}
            type={openNotification.type}
        />
    </Dialog>
  )
}

export default UserSelfAssessment
