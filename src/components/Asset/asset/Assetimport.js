import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


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
      <div>
    <Grid container spacing={2} style={{border:'solid', borderColor:'whitesmoke', width:'100%'}} >
        <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
            {"IMPORT"} 
          </DialogTitle>
          </Grid>
         </Grid>
             <Grid container  style={{marginTop:'30px'}}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}
             style={{
              alignSelf: 'center',
              textAlignLast: 'center'

          }}
            >
            <label > Import CSV File : </label>
            
             </Grid>
             <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
             <TextField
                  
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
            </Grid>
             
             </Grid>
             <Grid container  style={{marginTop:'30px', marginBottom:'30px'}}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}
             style={{
              alignSelf: 'center',
              textAlignLast: 'center'

          }}
            >
            <Button variant="contained" component="label">
            Download Templete
            </Button>
             </Grid>
             <Grid item xs={12} sm={6} md={6} lg={6} xl={6}
             
             >
             <Button style={{marginLeft:'20px'}} variant="contained">Import</Button>
            </Grid>
             
     </Grid>
       
     </Grid>
     </div>
       
    )
}