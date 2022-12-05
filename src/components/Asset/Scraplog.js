import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { FetchScrapAssetShowDataService } from '../../services/ApiServices';

const ScrapLog = ({open,setOpen }) => {
    const [rows, setRows] = useState([]);
    const columns = [
						
        { field: 'id', headerName: 'Serial No', width: 20 },
        { field: 'department', headerName: 'Department Name', width: 100 },
        { field: 'section', headerName: 'Section Same', width: 100 },
        { field: 'assetType', headerName: 'Asset Type', width: 100 },
        { field: 'assetName', headerName: 'Asset Name', width: 100 },
        { field: 'dateAndTime', headerName: 'Date & Time', width: 100 },
        { field: 'user', headerName: 'User', width: 100 },
        
    ];
    const onCancel=()=>{
        setOpen(false);
    }

    useEffect(() => {
        FetchScrapAssetShowDataService(handleFetchScrapAsset,handleFetchScrapAssetException);

      }, []);

      const handleFetchScrapAsset=(dataObject) => {
        setRows(dataObject.data);
      }
      const handleFetchScrapAssetException=(errorStaus, errorMessage) => {
        console.log(errorMessage);
      }
  return (
    <div>
       <Dialog
      
      open={open}
      fullScreen
      maxWidth='lg'
    >
    <DialogTitle style={{ background: 'whitesmoke' }}>
        ASSET SCRAP LOG
    </DialogTitle>
       <DialogContent>
          <DialogContentText >
            <div style={{marginLeft:'50px'}}>
            <Grid >
                <div style={{ height: '350px', width:'60%',marginTop:'30px'}}>
                <DataGrid
                rows={rows}
                columns={columns} />
                </div>
            </Grid>
            <Grid container style={{marginTop:'20px'}}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button variant="contained">Export</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button variant="contained" onClick={onCancel}>Cancel</Button>
                </Grid>
            </Grid>
            
           
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      
    </Dialog>
    </div>
  )
}

export default ScrapLog
