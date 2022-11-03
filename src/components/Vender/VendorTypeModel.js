import React, {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { VendorTypeAddService, VendorTypeUpdateService } from '../../services/ApiServices';

const VendorTypeModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
    const [VendorTypeList, setVendorTypeList]= useState('')
    const [description,setDescription]=useState('')   
    
    useEffect(() => {
        setVendorTypeList(editData.vendorType ||'');
        setDescription(editData.description || '');

      }, [editData]);   

    const handleSuccess = (dataObject) => {
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setOpen(false);
      }

      const handleException = (errorObject, errorMessage) => {
        console.log(errorMessage);
      }

    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
          (
    
            VendorTypeAddService({
                vendorType:VendorTypeList,
                description:description
            
            }, handleSuccess, handleException)
          ) : (
    
            VendorTypeUpdateService({
              id: editData.id,
            
    
            }, handleSuccess, handleException)
          );
    
      }
    
    const handleClose = () => {
        setOpen(false);
      };
      
  return (
    <div>
  <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'
        >
             <form onSubmit={onSubmit}>
          <DialogTitle id="alert-dialog-title" sx={{background:'grey'}}>
          {isAdd === true ? 'ADD ' : 'EDIT '}VENDOR TYPE
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{marginTop:'20px',marginLeft:'20px',display:'flex',alignItems:'center'}}>
                <lable style={{marginRight:'40px'}}>Vendor Type:</lable>
                <TextField id="VendorType" label="Vendor Type" variant="outlined"  
                  onChange={(e) => { setVendorTypeList(e.target.value) }}
                  value={VendorTypeList}/>
              </div>
              <div style={{marginTop:'20px',marginLeft:'20px',display:'flex',alignItems:'center'}}>
                <lable>Description:</lable>
                <TextField
                   style={{width:'500px',marginLeft:'45px'}}
                    id="Description"
                    label="Description"
                    multiline
                    rows={4} 
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={description}
                />
              </div>
              
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

export default VendorTypeModel
