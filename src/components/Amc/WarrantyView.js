import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ViewWarranty } from '../../services/ApiServices';

const WarrantyView = ({ open, setOpen,  setRefresh , editData,isAdd  }) => {
    const [rows, setRows]=useState([]);
    const[description,setDescription]=useState("");
    const[assetId,setAssetId]=useState("");
    const [assetType,setAssetType] = useState("");
    const [section,setSection] = useState("");
    const [manufacturer,setManufacturer]=useState("");
    const [assetModel,setAssetModel]=useState("");

    useEffect(() => {
        ViewWarranty({id:editData.id},handleViewAmcService, handleViewAmcServiceException)
    }, [editData]);
    
    const handleViewAmcService = (dataObject) => {
        setAssetId(editData?.id|| '');
        setAssetType(dataObject?.data[0]?.assetType|| '');
        setSection(dataObject?.data[0]?.section|| '');
        setManufacturer(dataObject?.data[0]?.manufacturer|| '');
        setAssetModel(dataObject?.data[0]?.manufacturer|| '');
        setDescription(dataObject?.data[0]?.description|| '');
    }
    
    const handleViewAmcServiceException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }
    
    const handleClose = () => {              
        setOpen(false);
        setDescription('');
    };

    return (
        <div>
            <Dialog  
            open={open}
            maxWidth='lg'>
                <form>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                      {"VIEW ASSET DETAILS"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Asset Id:</label>
                                <TextField style={{marginLeft:'20px', width:'250px'}}
                                label=""
                                variant="outlined"
                                value={assetId}/>
                            </div>
                             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Asset Type:</label>
                                <TextField style={{marginLeft:'20px', width:'250px'}}
                                label=""
                                variant="outlined"
                                value={assetType}/>
                            </div>
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Section:</label>
                                <TextField style={{marginLeft:'20px', width:'250px'}}
                                label=""
                                variant="outlined"
                                value={section}/>
                            </div>
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Manufacture:</label>
                                <TextField style={{marginLeft:'20px', width:'250px'}}
                                label=""
                                variant="outlined"
                                value={manufacturer}/>
                            </div>
                            <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label style={{marginLeft:'1px'}}>Asset Model:</label>
                                <TextField style={{marginLeft:'20px', width:'250px'}}
                                label=""
                                variant="outlined"
                                value={assetModel}/>
                            </div>
                            <div style={{marginTop:'10px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                <label>Description:</label>
                                <TextareaAutosize
                                style={{ width:'250px', height:'40px',marginLeft:'70px', marginTop:'20px'}}
                                aria-label="empty textarea"
                                placeholder="Address"
                                onChange={((e)=>{setDescription(e.target.value)})}
                                value={description}/>
                            </div>
                            <div>
                                <Button type='reset' onClick={handleClose}>Cancel</Button>
                                <Button type='submit'></Button>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                </form>
            </Dialog>  
        </div>
    )
}
export default WarrantyView;

   


