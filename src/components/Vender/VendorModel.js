import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { VendorAddService, VendorUpdateService, FetchVendorTypeService } from '../../services/ApiServices';
import NotificationBar from '../../services/NotificationBar';


const VendorModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [vendorName, setvendorName] = useState('');
  const [vendorTypeList, setvendorTypeList] = useState([]);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [altEmail, setAltEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [altContactNo, setAltContactNo] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [remark, setRemark] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [gstCertificate, setGstCertificate] = useState('');
  const [msmeCertificate, setMsmeCertificate] = useState('');
  const [canceledCheque, setcanceledCheque] = useState('');
  const [vendorType, setVenderType] = useState('');
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });

  useEffect(() => {
    FetchVendorTypeService(handleFetchSuccess, handleFetchException);
    setvendorName(editData.vendorName || '');
    setVenderType(editData.vendorType || '');
    setAddress(editData.address || '');
    setEmail(editData.email || '');
    setAltEmail(editData.altEmail || '');
    setContactNo(editData.contactNo || '');
    setAltContactNo(editData.altContactNo || '');
    setContactPerson(editData.contactPerson || '');
    setRemark(editData.remark || '');
    setGstNo(editData.gstNo || '');
  }, [editData]);


  const handleFetchSuccess = (dataObject) => {
    setvendorTypeList(dataObject.data)
  }
  const handleFetchException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
  }

  const handleCloseNotify = () => {
    setOpen(false)
    setNotification({
      status: false,
      type: '',
      message: '',
    });
  };

  const handleClose = () => {
    setOpen(false);
    setvendorName('');
    setVenderType('');
    setAddress('');
    setEmail('');
    setAltEmail('');
    setContactNo('');
    setAltContactNo('');
    setContactPerson('');
    setRemark('');
    setGstNo('');
  };

  const handleSuccess = (dataObject) => {
    console.log(dataObject);
    setRefresh(oldValue => !oldValue);
    setNotification({
      status: true,
      type: 'success',
      message: dataObject.message,
    });
    setvendorName('');
    setVenderType('');
    setAddress('');
    setEmail('');
    setAltEmail('');
    setContactNo('');
    setAltContactNo('');
    setContactPerson('');
    setRemark('');
    setGstNo('');
  }

  const handleException = (errorObject, errorMessage) => {
    console.log(errorMessage);
    setNotification({
      status: true,
      type: 'error',
      message: errorMessage,
    });
  }

  const onVendorTypeChange = (e) => {
    setVenderType(e.target.value)
    console.log(e)

  }

  const onSubmit = (e) => {
    e.preventDefault();
    isAdd === true ?
      (

        VendorAddService({
          vendorName: vendorName,
          vendorType: vendorType,
          address: address,
          email: email,
          altEmail: altEmail,
          contactNo: contactNo,
          altContactNo: altContactNo,
          contactPerson: contactPerson,
          reMarks: remark,
          gstNo: gstNo,
          msmeCertificate: msmeCertificate,
          gstCertificate: gstCertificate,
          canceledCheque: canceledCheque,
        }, handleSuccess, handleException)
      ) : (

        VendorUpdateService({
          id: editData.id,
          vendorName: vendorName,
          vendorType: vendorType,
          address: address,
          email: email,
          altEmail: altEmail,
          contactNo: contactNo,
          altContactNo: altContactNo,
          contactPerson: contactPerson,
          reMarks: remark,
          gstNo: gstNo,
          msmeCertificate: msmeCertificate,
          gstCertificate: gstCertificate,
          canceledCheque: canceledCheque,

        }, handleSuccess, handleException)
      );

  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'>
        <form onSubmit={onSubmit}>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {isAdd === true ? 'Add ' : 'Edit '}Vendor
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                <label>Vendor Name :</label>
                <TextField style={{ marginLeft: '40px', width: '250px' }} id="outlined-basic" label="Vendor Name" variant="outlined"
                  onChange={(e) => { setvendorName(e.target.value) }}
                  value={vendorName}
                />
                <label style={{ marginLeft: '40px' }}>Vendor Type :</label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl style={{ width: '250px', marginLeft: '50px' }}>
                    <InputLabel id="venderTypelabel">Select Vender Type</InputLabel>
                    <Select
                      labelId="venderType"
                      id="venderType"
                      label="Vender Type"
                      onChange={(e) => onVendorTypeChange(e)}>
                      {vendorTypeList.map((data, index) => {
                        return (
                          <MenuItem value={data.id} key={index}>{data.vendorType}</MenuItem>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '80px' }}>Address :</label>
                <TextareaAutosize
                  style={{ width: '250', height: '40px', marginleft: '100px' }}
                  aria-label="empty textarea"
                  placeholder="Empty"
                  onChange={(e) => { setAddress(e.target.value) }}
                  value={address}
                />
                <label style={{ alignitems: 'start', marginLeft: '170px' }}>Email :</label>
                <TextField style={{ marginLeft: '50px' }} id="Email" label="Email" variant="outlined" sx={{ alignitems: 'end' }}
                  onChange={(e) => { setEmail(e.target.value) }}
                  value={email}
                />
              </div>
              <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                <label>Alt Email :</label>
                <TextField style={{ marginLeft: '75px' }}
                  id="AltEmail "
                  label="Alt Email "
                  variant="outlined"
                  onChange={(e) => { setAltEmail(e.target.value) }}
                  value={altEmail}
                />
                <label style={{ marginLeft: '80px' }}>Contact No :</label>
                <TextField
                  style={{ marginLeft: '55px' }}
                  id="ContactNo "
                  label="Contact No "
                  variant="outlined"
                  onChange={(e) => { setContactNo(e.target.value) }}
                  value={contactNo}
                />
              </div>
              <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }} >
                <label>Alt Contact No:</label>
                <TextField
                  style={{ marginLeft: '40px' }}
                  id="AltContactNo"
                  label="Alt Contact No"
                  variant="outlined"
                  onChange={(e) => { setAltContactNo(e.target.value) }}
                  value={altContactNo}
                />
                <label style={{ marginLeft: '60px' }}>Contact Person :</label>
                <TextField
                  style={{ marginLeft: '50px' }}
                  id="ContactPerson"
                  label="Contact Person"
                  variant="outlined"
                  onChange={(e) => { setContactPerson(e.target.value) }}
                  value={contactPerson}
                />
              </div>
              <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }} >
                <label>Remarks :</label>
                <TextField
                  style={{ marginLeft: '75px' }}
                  id="remark"
                  label="Remarks"
                  variant="outlined"
                  onChange={(e) => { setRemark(e.target.value) }}
                  value={remark}
                />
                <label style={{ marginLeft: '110px' }}>GST No:</label>
                <TextField
                  style={{ marginLeft: '55px' }}
                  id="GSTNo"
                  label="GST No"
                  variant="outlined"
                  onChange={(e) => { setGstNo(e.target.value) }}
                  value={gstNo}
                />
              </div>

              <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center', marginBottom: '20px' }} >
                <label>GST Certificate:</label>
                <TextField
                  style={{ width: '300px', marginLeft: '20px' }}
                  label="GST Certificate"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (reader.readyState === 2) {
                          setGstCertificate(reader.result);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  InputLabelProps={{ shrink: true }}
                  type="file"
                />
                <label style={{ marginLeft: '20px' }}>MSME Certificate:</label>
                <TextField
                  style={{ width: '300px', marginLeft: '10px' }}
                  label="MSME Certificate<"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (reader.readyState === 2) {
                          setMsmeCertificate(reader.result);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  InputLabelProps={{ shrink: true }}
                  type="file"
                />
              </div>
              <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <label>Canceled Cheque:</label>
                <TextField
                  style={{ width: '750px', marginLeft: '10px' }}
                  label="Canceled Cheque"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (reader.readyState === 2) {
                          setcanceledCheque(reader.result);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  InputLabelProps={{ shrink: true }}
                  type="file"
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
              {isAdd === true ? 'Add' : 'Update'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <NotificationBar
        handleClose={handleCloseNotify}
        notificationContent={openNotification.message}
        openNotification={openNotification.status}
        type={openNotification.type}
      />

    </div>
  )
}

export default VendorModel
