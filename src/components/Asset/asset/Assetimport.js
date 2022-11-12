import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export default function Assetimport() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [gstCertificate, setGstCertificate] = useState('');

    return (
        <div style={{border:'solid', borderColor:'whitesmoke', width:'70vh'}}>
            <div>
        <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
        {"IMPORT"} 
    </DialogTitle>
    </div>
    <div style={{width:'70vh',height:'30vh',  marginLeft:'90px'}}>
        <div style={{marginTop:'30px', display:'flex', alignItems:'center'}}>
        <label style={{marginLeft:'5px'}}> Import CSV File : </label>
        <TextField
                  style={{ width: '250px', marginLeft: '5px' }}
                  
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (reader.readyState === 2) {
                          setGstCertificate(reader.result);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  InputLabelProps={{ shrink: true }}
                  type="file"
                />
    </div>
    <div  style={{marginLeft:'20px', marginTop:'20px'}}>
    <Button variant="contained" component="label">
            Download Templete
    </Button>
    <Button style={{marginLeft:'20px'}} variant="contained">Import</Button>
    </div>
    </div>
              
    </div>  
       
    )
}