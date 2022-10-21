import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack'
import './Asset.css'

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

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
            <AddIcon className='Add'/>
            import
            </Button>
            <div>
                <Dialog
                
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" >
                    <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
                        {"IMPORT ASSET"}
                    </DialogTitle>
                    <div style={{width:'70vh',height:'30vh', }}>
                        <div style={{marginTop:'30px', display:'flex', alignItems:'center'}}>
                        <label style={{marginRight:'30px',marginLeft:'20px'}}> Import CSV File : </label>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button variant="contained" component="label">
                                Choose File 
                                <input hidden accept="image/*" multiple type="file" />
                            </Button >
                          
                        </Stack>
                    </div>
        
                    <div  style={{marginLeft:'20px', marginTop:'20px'}}>
                    <Button variant="contained" component="label">
                                Download Templete
                            </Button>
                    <Button style={{marginLeft:'20px'}} variant="contained">Import</Button>
                    </div>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}