import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText, DialogTitle, Grid, Typography  } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Edit from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { ViewCertificateService } from '../../../services/ApiServices';
import CertificatePatternView from './CertificatePatternView';


const CertificateModalView = ({ open, setOpen,  setRefresh , isView, editData}) => {
    const [rows, setRows]=useState([]);
    const [open1, setOpen1] = useState(false);
    const [editData2, setEditData2] = useState('');
    const handleClose = () => {
      setOpen(false);
    };

    const columns = [
        { field: 'vendorName', headerName: 'Vender Name', width: 140 },
        { field: 'periodFrom', headerName: 'Period From', width: 140 },
        { field: 'inspectionPattern', headerName: 'No.service', width: 140 },
        { field: 'serviceList', 
        headerName: 'Service [YY-MM-DD]',
         width: 120,
         renderCell: (params) => {
            
            var service = parseInt(params.row.servicePattern);
            var data= params.row.serviceList;
            var serviceList = [];
            if (service>0)
            {
              if(service === 1)
              {
                  serviceList[0] = {startDate:data.s1startDate,runHours:data.s1runHours,endDate:data.s1startDate} ;

              }else if (service === 2)
              {
                  serviceList[0] = {startDate:data.s1startDate,runHours:data.s1runHours,endDate:data.s1startDate };
                  serviceList[1] = {startDate:data.s2startDate,runHours:data.s2runHours,endDate:data.s2startDate } ;

              }else if (service === 3){

                  serviceList[0] = {startDate:data.s1startDate,runHours:data.s1runHours,endDate:data.s1startDate };
                  serviceList[1] = {startDate:data.s2startDate,runHours:data.s2runHours,endDate:data.s2startDate };
                  serviceList[2] = {startDate:data.s3startDate,runHours:data.s3runHours,endDate:data.s3startDate };
                 

              }else if (service === 4){
                  serviceList[0] = {startDate:data.s1startDate,runHours:data.s1runHours,endDate:data.s1startDate };
                  serviceList[1] = {startDate:data.s2startDate,runHours:data.s2runHours,endDate:data.s2startDate };
                  serviceList[2] = {startDate:data.s3startDate,runHours:data.s3runHours,endDate:data.s3startDate };
                  serviceList[3] = {startDate:data.s4startDate,runHours:data.s4runHours,endDate:data.s4startDate };
                

              }else if (service === 5){
                  serviceList[0] = {startDate:data.s1startDate,runHours:data.s1runHours,endDate:data.s1startDate };
                  serviceList[1] = {startDate:data.s2startDate,runHours:data.s2runHours,endDate:data.s2startDate };
                  serviceList[2] = {startDate:data.s3startDate,runHours:data.s3runHours,endDate:data.s3startDate };
                  serviceList[3] = {startDate:data.s4startDate,runHours:data.s4runHours,endDate:data.s4startDate };
                  serviceList[4] = {startDate:data.s5startDate,runHours:data.s5runHours,endDate:data.s5startDate };
                
              }
            }else {
              serviceList[0]="no data "
            }
            console.log(serviceList);

              return(
                  <div style={{
                      display: 'inline'
                  }}>
                      
                      {
                          serviceList.map((data, index)=>{
                              return(
                                  <Typography>
                                          From :{data.startDate} To:  {data.endDate} 
                                  </Typography>
                              )
                          })
                      }
                      
                  </div>
              )
          }
         },
        {field: 'action', headerName: 'Action', width: 180, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
          <EditData selectedRow={params.row}  />,
         
        ],
        }
    ];
    
    function EditData({ selectedRow}) {
        return (
            <Edit 
            onClick={() => {
                
                setEditData2(selectedRow);
                setOpen1(true);
                
            }}
           />
        )
    }
    
   
    useEffect(() => {
        if(editData?.id){
            ViewCertificateService({id:editData?.id},handleViewCertificate, handleViewCertificateException)
        }
      }, [editData]);

      const handleViewCertificate = (dataObject) => {
        setRows(dataObject?.data);
        console.log(dataObject?.data);
      }
    
      const handleViewCertificateException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
      }
    return (
        <div>
            <Dialog 
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth='lg'>
                <form >
                    
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                              
                            <DataGrid style={{height:'200px', marginTop:'20px'}}
                                rows={rows}
                                columns={columns} 
                                />
                              
                                <CertificatePatternView
                                 open={open1}
                                 setOpen={setOpen1}
                             />
                        
        
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button type='reset' onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
         
         
}

export default CertificateModalView;
 
