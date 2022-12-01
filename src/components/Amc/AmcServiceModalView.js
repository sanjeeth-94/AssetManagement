import React, { useEffect, useState } from 'react';
import Delete from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Edit from '@mui/icons-material/Edit';
import { ViewAmcServiceService } from '../../services/ApiServices';

const AmcServiceModalView = ({ open, setOpen,  setRefresh , isView, editData}) => {
    const [isAdd, setIsAdd] = useState(false);
    const [reciveData , setReciveData]=useState('');
    const [rows, setRows]=useState([]);
    const [OpenView, setOpenView]=useState([]);
    const [data,setData]=useState('');
    const handleClose = () => {
      setOpen(false);
    };

    const columns = [
        { field: 'vendorName', headerName: 'Vender Name', width: 140 },
        { field: 's1startDate', headerName: 'Period From', width: 140 },
        { field: 'servicePattern', headerName: 'No.service', width: 140 },
        { field: 'section', headerName: 'Service [YY-MM-DD]', width: 120 },
        {field: 'action', headerName: 'Action', width: 180, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
          <EditData selectedRow={params.row}  />,
          <DeleteData selectedRow={params.row} />,
        ],
        }
    ];
    
    function EditData({ selectedRow}) {
        return (
            <Edit 
            className='prbuton'
            variant="contained"
            color='primary'
           />
        )
    }
    
    function DeleteData({ selectedRow }) {
        return (
          <Delete  
          variant="contained"
          color='primary'
          // onClick={() => {
          //     deleteAmc(selectedRow.id)
          // }}
          />
        )
    }

    useEffect(() => {
        if(editData?.id){
            ViewAmcServiceService({id:editData?.id},handleViewAmcService, handleViewAmcServiceException)
        }
      }, [editData]);

      const handleViewAmcService = (dataObject) => {
        setRows(dataObject?.data);
        console.log(dataObject?.data);
      }
    
      const handleViewAmcServiceException = (errorStaus, errorMessage) => {
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
                    <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
                        {"VENDER DETAILS"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form>
                              
                            <DataGrid style={{height:'200px', marginTop:'20px'}}
                                rows={rows}
                                columns={columns} 
                                setOpenView={OpenView}/>
        
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    )
         
         
}

export default AmcServiceModalView;
 
