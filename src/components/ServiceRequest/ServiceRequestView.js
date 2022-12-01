import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid } from '@mui/material';

const ServiceRequestView = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [rows, setRows] = useState([]);
  const [affectingMachines,setAffectingMachines]=useState('');
  const [utilizationPlan,setUtilizationPlan]=useState('');
  const [affectingManHours,setAffectingManHours]=useState('');
  const [utilizationPlan2,setUtilizationPlan2]=useState('');
  const [bpImages1,setBpImages1]=useState('');
  const [bpImages2,setBpImages2]=useState('');
  const [bpImages3,setBpImages3]=useState('');
  const [bpImages4,setBpImages4]=useState('');
  const columns = [
    { field: 'maintenanceId', headerName: 'Name	', width: 80 },
    { field: 'maintenanceType', headerName: 'Part Id', width: 100 },
    { field: 'assetName', headerName: 'Quantity	', width: 100 },
    { field: 'severity', headerName: 'UOM', width: 100 },
    { field: 'problemNote', headerName: 'Unit Price', width: 120 },   
  ]
  
  useEffect(() => {
    setAffectingMachines(editData.affectedMachine || '');
    setUtilizationPlan(editData.shutdownOrUtilization || '');
    setAffectingManHours(editData.timeFrom ||'' );
    setUtilizationPlan2(editData.offOrUtilization || '');
    setBpImages1(editData.bpImages1 || '');
    setBpImages2(editData.bpImages2 || '');
    setBpImages3(editData.bpImages3 || '');
    setBpImages4(editData.bpImages4 || '');
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
      maxWidth='lg'>
        <form onSubmit={onSubmit}>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {isAdd === true ? 'Service view ' : 'Close Maintainance Schedule '}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              { 
              isAdd=== true ?
              (
                <>
                <Grid container>
                  <Grid style={{ height: 200, width: '100%' }}>
                    <DataGrid
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5]}
                    onRowAdd/>
                  </Grid>
                  <div>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:'20px',widthLeft:'250px' }}>
                      <Accordion >
                        <AccordionSummary
                        fullwith 
                        expandIcon={<VisibilityIcon />}>
                          <Typography style={{marginLeft:'200px'}}>Impact and Plans</Typography>
                          <hr/>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:'20px',  }}>
                  <Accordion >
                    <AccordionSummary
                    fullwith 
                    expandIcon={<VisibilityIcon />}>
                      <Typography style={{marginLeft:'200px'}}>Impact and Plans</Typography>
                      <hr/>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                 </>
              ):(
                <>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginLeft:'30px'}}>
                  <lable>Remarks</lable>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  
                </Grid>
                </>
              )
            }
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

export default ServiceRequestView;
