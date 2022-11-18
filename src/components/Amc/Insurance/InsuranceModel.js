import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NotificationBar from '../../../services/NotificationBar';
import MenuItem from '@mui/material/MenuItem';
import { AmcServiceAddService,
  AmcServiceUpdateService,
  FetchDepaertmentService,
  FetchSectionService,
  FetchAssetTypeService,
  FetchVenderService,
  FetchVenderDataService,
  FetchAssetNameService,
} from '../../../services/ApiServices';

const InsuranceModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [vendorName, setVendorName] = useState('');
  const [vendorNameList, setVendorNameList] = useState([]);
  const [venderAddress, setVenderAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [premiumCost, setPremiumCost] = useState();
  const [department, setDepartment] = useState();
  const [departmentList, setDepartmentList] = useState([]);
  const [section, setSection] = useState();
  const [sectionList, setSectionList] = useState([]);
  const [fromDate, setfromDate] = useState('');
  const [toDate, settoDate] = useState('');
  const [assetType, setAssetType] = useState();
  const [gstCertificate, setGstCertificate] = useState('');
  const [assetList, setAssetList] = useState([]);
  const [asset, setAsset] = useState('');
  const [vendorData, setVendorData] = useState([]);
  const [ assetNameList, setAssetNameList] = useState([]);
  const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });

    const handleClose = () => {
      setOpen(false);
    };

    const handleChangefromDate = (e) => {
      setfromDate(e.target.value);
      console.log(e.target.value);
    };

  
    const handleChangetoDate = (e) => {
      settoDate(e.target.value);
      console.log(e.target.value);
    };

    useEffect(() => {
      FetchDepaertmentService(handleFetchSuccess, handleFetchException);
      FetchVenderService(handleFetchVender, handleFetchVenderException);
    }, [editData]);
  
    const handleFetchSuccess = (dataObject) => {
      setDepartmentList(dataObject.data);
    }
  
    const handleFetchException = (errorStaus, errorMessage) => {
      console.log(errorMessage);
    }
  
    const handleFetchVender = (dataObject) => {
      setVendorNameList(dataObject.data);
    }
  
    const handleFetchVenderException = (errorStaus, errorMessage) => {
      console.log(errorMessage);
    }

    const onDepartmentChange = (e) => {
      setDepartment(e.target.value);
      FetchSectionService({
        id: e.target.value
      }, handleFetchDepartmentSuccess, handleFetchDepartmentException);
    }
  
    const handleFetchDepartmentSuccess = (dataObject) => {
      setSectionList(dataObject.data);
    }
  
    const handleFetchDepartmentException = (errorStaus, errorMessage) => {
      console.log(errorMessage);
    }
  
    const onSectionChange = (e) => {
      setSection(e.target.value);
      FetchAssetTypeService({
        id: e.target.value
      }, handleFetchAssetTypeServiceSuccess, handleFetchAssetTypeServiceException);
    }

    const handleFetchAssetTypeServiceSuccess = (dataObject) => {
      setAssetList(dataObject.data);
     
    }
    
    const handleFetchAssetTypeServiceException = (errorStaus, errorMessage) => {
      console.log(errorMessage);
    }
  
    const onAssetChange = (e) => {
      setAsset(e.target.value)
  
      FetchAssetNameService({
        id: e.target.value
      }, handleFetchAssetNameServiceSuccess, handleFetchAssetNameServiceException);
    }
    const handleFetchAssetNameServiceSuccess = (dataObject) => {
      setAssetNameList(dataObject.data);
     
    }

    const handleFetchAssetNameServiceException= (errorStaus, errorMessage) => {
      console.log(errorMessage);
    }
  
    const onAssetTypeChange = (e) => {
      setAssetType(e.target.value);
    }
  
    const onVenderChange = (e) => {
      setVendorName(e.target.value);
      FetchVenderDataService({ id: e.target.value }, handleFetchVenderDataService, handleFetchVenderDataServiceException)
    }
  
    const handleFetchVenderDataService = (dataObject) => {
      setVendorData(dataObject.data);
      setPhoneNumber(dataObject?.data[0]?.contactNo || '');
      setEmailId(dataObject?.data[0]?.email || '');
      setVenderAddress(dataObject?.data[0]?.address || '');
    }

    const handleFetchVenderDataServiceException = (errorStaus, errorMessage) => {
      console.log(errorMessage);
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      isAdd === true ?
      (
        AmcServiceAddService({
          department: department,
          section: section,
          vendorName: vendorName,
          phoneNumber: phoneNumber,
          email: emailId,
          fromDate:fromDate,
          toDate:toDate,
        }, handleSuccess, handleException)
      ) : (
        AmcServiceUpdateService({
          id: editData.id,
          department: department,
          section: section,
          vendorName: vendorName,
          phoneNumber: phoneNumber,
          email: emailId,
          fromDate:fromDate,
          toDate:toDate,
        }, handleSuccess, handleException)
      );
    }
    
    
      
    
      
    
      const handleSuccess = (dataObject) =>{
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setNotification({
          status: true,
          type: 'success',
          message: dataObject.message,
        });
      
      }
    
      const handleException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
        setNotification({
          status: true,
          type: 'error',
          message:errorMessage,
        });
      }
    
      const handleCloseNotify = () => {
       setOpen(false)
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };
  return (
    <div>
        <Dialog
      open={open}
      maxWidth='lg'
    >
      <form onSubmit={onSubmit}>
        <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
          {'Service Due'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
                <form>
                <div style={{ display: 'flex', alignItems: 'center', marginTop:'20px' }}>
                    <label style={{ marginLeft: '20px', marginRight: '30px' }}>Name: </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '190px' ,marginLeft:'9px' }}>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label=""
                        value={vendorName}
                        onChange={(e) => onVenderChange(e)}>
                          {vendorNameList.map((data, index) => {
                            return (
                              <MenuItem value={data.vendorId} key={index}>{data.vendorName}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                    <label style={{ marginLeft: '60px', marginRight: '30px' }}>E-mail: </label>
                    <TextField
                    id="Email"
                    label=""
                    variant="outlined"
                    value={emailId} />
                    <label
                    style={{
                      marginLeft: '60px',
                      marginRight: '30px'
                    }}>
                      Address :
                    </label>
                    <TextField
                    id=""
                    label=""
                    variant="outlined"
                    value={venderAddress} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <label
                    style={{
                      marginLeft: '20px',
                      marginRight: '30px'
                    }}>
                      Phone :
                    </label>
                    <TextField
                    style = {{ width: '190px'}}
                    id=" Phone"
                    label=""
                    variant="outlined"
                    value={phoneNumber}/>
                  </div>
                    <form style={{border:'solid',borderColor:'whitesmoke',marginTop:'20px'}}>
                        <div style={{marginTop:'20px',marginLeft:'20px',display:'flex',alignItems:'center'}}>
                            <label style={{marginRight:'30px',marginLeft:'30px'}}>Period : FROM</label>
                            <TextField
                      style={{width:'200px'}}
                      id="Vendor-Address"
                      variant="outlined"
                      type='date'
                      value={fromDate}
                      onChange={(e) => { handleChangefromDate(e) }}/>
                            
                            <label style={{marginRight:'100px',marginLeft:'40px'}}>To</label>
                            <TextField
                      style={{width:'200px'}}
                      id="Vendor-Address"
                      variant="outlined"
                      type='date'
                      value={toDate}
                      onChange={(e) => { handleChangetoDate(e) }}/>
                        </div>
                        <div style={{marginTop:'20px',display:'flex',alignItems:'center'}}>
                            <label style={{marginLeft:'50px',marginRight:'35px'}}>Premium Cost</label>
                            <TextField
                      id="premium"
                      label="Premium Cost"
                      variant="outlined"
                      onChange={(e) => { setPremiumCost(e.target.value) }}
                      value={premiumCost} />
                            <label style={{marginLeft:'60px',marginRight:'20px'}}>Insurance Doc</label>
                            <TextField
                      style={{ width: '300px', marginLeft: '20px' }}
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
                      type="file"/>
                    </div>
                        <div style={{display:'flex',alignItems:'center',marginTop:'20px'}}>
                        <label style={{marginLeft:'50px',marginRight:'45px'}}>Department :</label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                
                                label="Age"
                                
                                onChange={(e) => onDepartmentChange(e)}>
                            {departmentList.map((data, index) => {
                              return (
                                <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                              )
                            })}
                                </Select>
                            </FormControl>
                            </Box>
                            <label style={{marginLeft:'70px',marginRight:'68px'}}>Section:</label>
                            <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                               
                                label="Age"
                                onChange={(e) => onSectionChange(e)}>
                                {sectionList.map((data, index) => {
                                  return (
                                    <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                                  )
                                })}
                                </Select>
                            </FormControl>
                            </Box>
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginTop:'20px',marginBottom:'30px'}}>
                        <label style={{marginLeft:'50px',marginRight:'50px' , }}>Asset Type :</label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age" 
                                onChange={(e) => onAssetChange(e)}>
                            {assetList.map((data, index) => {
                              return (
                                <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                              )
                            })}
                                
                                </Select>
                            </FormControl>
                            </Box>
                            <label style={{marginLeft:'60px',marginRight:'40px'}}>Asset Name :</label>
                            <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{width:'220px'}}>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                onChange={(e) => onAssetChange(e)}>
                            {assetNameList.map((data, index) => {
                              return (
                                <MenuItem value={data.id} key={index}>{data.assetName}</MenuItem>
                              )
                            })}
                                
                                </Select>
                            </FormControl>
                            </Box>
                        </div>
                    </form>              
                </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <div className='addbutton'>
              <Button style={{ border: 'solid', width: '150px' }} onClick={handleClose} autoFocus>Apply</Button>
            </div>
          <NotificationBar
                    handleClose={handleCloseNotify}
                    notificationContent={openNotification.message}
                    openNotification={openNotification.status}
                    type={openNotification.type}
                />
        </DialogActions>
      </form>
    </Dialog>
    </div>
  )
}

export default InsuranceModel
