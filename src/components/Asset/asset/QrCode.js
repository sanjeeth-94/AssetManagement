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
  const [section,setSection]=useState('');
  const [assetType, setAssetType]=useState('');
  const url='https://varmatrix.com/AssetManagement';
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
      setSection(editData?.section || " ");
      setAssetType(editData?.assetType|| '');
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
                  {"ADD ASSET"}
              </DialogTitle>
              <DialogContent>
                  <DialogContentText>
                  <AccordionDetails>     
                  <Typography>
                  <ImageList sx={{ height: 120 }} cols={4}  rowHeight={164}>
                    <Grid container >
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                      style={{alignSelf:'center'}}
                      >
                      <img 
                          src={`https://varmatrix.com/AssetManagement${imgUrl}`}
                        />
                      </Grid>
                    </Grid>
                    <Grid container >
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}
                      style={{alignSelf:'center'}}
                      >
                      <label>{department}</label>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}
                      style={{alignSelf:'center'}}
                      >
                      <label>{section}</label>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}
                      style={{alignSelf:'center'}}
                      >
                      <label>{assetType}</label>
                      </Grid>
                    </Grid>
                  </ImageList>
                  </Typography>
              </AccordionDetails>
                </DialogContentText>
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
