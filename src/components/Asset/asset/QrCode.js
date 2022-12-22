import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AccordionDetails, Grid, Typography } from '@mui/material';
import { AssetShowLabelService } from '../../../services/ApiServices';


const QrCode = ({open1, setOpen1,editData}) => {
  const [department,setDepartment]=useState('');
  const [date,setDate]=useState('');
  const [section,setSection]=useState('');
  const [assetType, setAssetType]=useState('');
  const url=' https://varmatrix.com/AssetManagement/AssetManagement';
  const [imgUrl,setImgUrl]=useState('')
    const handleClose = () => {
        setOpen1(false);
    }
    const onSubmit=()=>{

    }
    useEffect(()=>
    {
      AssetShowLabelService({id:editData.id},handleAssetShowLabelService, handleAssetShowLabelException);
      setDepartment(editData?.department || '');
      setSection(editData?.selectSection || " ");
      setAssetType(editData?.selectAssetType || '');
      setDate(editData?.date || '');
    },[editData])

    const handleAssetShowLabelService=(dataObject)=>{
      setImgUrl(dataObject?.data[0]?.codeGenerator );
    }

    const handleAssetShowLabelException=()=>{

    }

  return (
    <div>
        <Dialog
          open={open1}
          maxWidth='xl'>
          <form onSubmit={onSubmit}>
              <DialogTitle style={{ background: 'whitesmoke' }}>
                  {"Label"}
              </DialogTitle>
              <DialogContent>
                <Grid container style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  marginTop:'20px',
                  width:'500px',
                  height:'150px',
                }} >
                  <Grid item 
                    style={{alignSelf:'center'}}
                  >
                    <img style={{width:'150px',height:'150px',alignSelf:'center',alignItems:'center'}}
                      src={`${url}${imgUrl}`}
                    />
                  </Grid>
                  <Grid container style={{display:'block',maginTop:'10px',marginLeft:'10px'}}>
                    <Grid item 
                      style={{alignSelf:'center'}}
                    >
                        <label>Department :</label>  
                        <label>{department}</label>
                    </Grid>
                    <Grid item 
                      style={{alignSelf:'center'}}
                    >
                      <label>Section :</label>
                      <label>{section}</label>
                    </Grid>
                    <Grid item 
                      style={{alignSelf:'center'}}
                    >
                      <label> Asset Type :</label>
                      <label>{assetType}</label>
                    </Grid>
                    <Grid item 
                      style={{alignSelf:'center'}}
                    >
                      <label> Date :</label>
                      <label>{date}</label>
                    </Grid>
                  </Grid>   
                </Grid>
              </DialogContent>
              <DialogActions>
                <div>
                  <Button type='reset' onClick={handleClose}>Cancel</Button>
                  <Button type='submit'>
                    Download
                  </Button>
                </div>
              </DialogActions>
          </form>
        </Dialog>
    </div>
  )
}

export default QrCode
