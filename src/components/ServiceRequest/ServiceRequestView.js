import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { Grid } from '@mui/material';
import { ViewRequestService } from '../../services/ApiServices';

const ServiceRequestView = ({ open, setOpen,  setRefresh , editData,isAdd  }) => {
  const [rows, setRows]=useState([]);
  const[description,setDescription]=useState("");
  const[assetId,setAssetId]=useState("");
  const [assetType,setAssetType] = useState("");
  const [section,setSection] = useState("");
  const [manufacturer,setManufacturer]=useState("");
  const [assetModel,setAssetModel]=useState("");
  
  useEffect(() => {
    ViewRequestService({id:editData.id},handleViewRequestService, handleViewRequestServiceException)
  }, [editData]);
  
  const handleViewRequestService = (dataObject) => {
    setAssetId(editData?.id|| '');
    setAssetType(dataObject?.data[0]?.assetType|| '');
    setSection(dataObject?.data[0]?.section|| '');
    setManufacturer(dataObject?.data[0]?.manufacturer|| '');
    setAssetModel(dataObject?.data[0]?.manufacturer|| '');
    setDescription(dataObject?.data[0]?.description|| '');
  }
  
  const handleViewRequestServiceException = (errorStaus, errorMessage) => {
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
            {"Service Due"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} style={{ marginTop: '20px'}}>
              <Grid  xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Asset Name:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
              <TextField  fullWidth
              label=""
              variant="outlined"
              value={assetId}/>
              </Grid>
              <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Department</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
              <TextField fullWidth
              label=""
              variant="outlined"
              value={assetType}/>
              </Grid>
              <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Asset Type:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
              <TextField  fullWidth
                 label=""
                 variant="outlined"
                 value={section}/>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '20px'}}>
              <Grid xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
                <label>Section:</label>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
              <TextField fullWidth
                 label=""
                 variant="outlined"
                 value={manufacturer}/>
              </Grid>
              <Grid>
                <label>Asset Model:</label>
              </Grid>
              <Grid>
                
              </Grid>
            </Grid>
          </DialogContent>
        </form>

      </Dialog>
    </div>
  )
  
  
}
export default ServiceRequestView;

   
// return (
  //   <div>
  //     <Dialog 
  //     open={open}
  //     maxWidth='lg'>
  //       <form>
  //         <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
  //           {"Service view"}
  //         </DialogTitle>
  //         <DialogContent>
            
  //           <Grid  container spacing={2} style={{ marginTop: '20px'}}>
  //           <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
  //           <label>Asset Name:</label>
  //         </Grid>
          
  //         <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={assetId}/>
  //            </Grid>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Department:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={assetType}/>
  //             </div>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Asset Type:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={section}/>
  //             </div>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Section:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={manufacturer}/>
  //             </div>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Asset Model:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={assetModel}/>
  //             </div>
  //             <div style={{marginTop:'10px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label>AMC Status:</label>
  //               <TextareaAutosize
  //               style={{ width:'250px', height:'40px',marginLeft:'70px', marginTop:'20px'}}
  //               aria-label="empty textarea"
  //               placeholder="Address"
  //               onChange={((e)=>{setDescription(e.target.value)})}
  //               value={description}/>
  //             </div>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Warrenty Status:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={assetModel}/>
  //             </div>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Insurance Status:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={assetModel}/>
  //             </div>
  //             <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
  //               <label style={{marginLeft:'1px'}}>Problem Note:</label>
  //               <TextField style={{marginLeft:'20px', width:'250px'}}
  //               label=""
  //               variant="outlined"
  //               value={assetModel}/>
  //             </div>
  //             <div>
  //               <Button type='reset' onClick={handleClose}>Cancel</Button>
  //               <Button type='submit'></Button>
  //             </div>
  //           </Grid>
  //         </DialogContent>
  //       </form>
  //     </Dialog>       
  //   </div>
  // )

