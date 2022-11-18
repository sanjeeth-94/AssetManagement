import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { FetchAssetTypeService, FetchDepaertmentService, FetchSectionService, UserAddService, UserUpdateService } from '../../../services/ApiServices';

export default function Addlabel({ open, setOpen, isAdd, editData, setRefresh }) {
    const [departmentList, setDepartmentList] = useState([]);
    const [ sectionList,  setSectionList] = useState([]);
    const [ section,  setSection] = useState('');
    const [department, setDepartment] = useState('');
    const [ assetTypeList,  setAssetTypeList] = useState([]);
    const [ assetType,  setAssetType] = useState('');
    const [ assetId,  setAssetId] = useState('');
    const [redio, setRedio] = useState("asset");
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
});


useEffect(() => {
    FetchDepaertmentService(handleFetchSuccess, handleFetchException);
   
  }, [editData]);

  const handleFetchSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data);
  }
  const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }

  const onChangeRedio = (event) => {
    setRedio(event.target.value);
};

  const onDepartmentChange = (e) => {
    setDepartment(e.target.value);

    FetchSectionService({
        id: e.target.value
    }, handleFetchSection, handleFetchSectionException)

}
const handleFetchSection = (dataObject) => {
    setSectionList(dataObject.data);
}

const handleFetchSectionException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
}

const onSectionChange = (e) => {
    setSection(e.target.value);
    FetchAssetTypeService({ id: e.target.value }, handleFetchAssetType, handleFetchAssetTypeException)

}
const handleFetchAssetType = (dataObject) => {
    setAssetTypeList(dataObject.data);
}

const handleFetchAssetTypeException = (errorStaus, errorMessage) => {
    console.log(errorMessage);
}


const onAssetTypeChange = (e) => {
    setAssetType(e.target.value);
}
  
  const handleClose = () => {
    setOpen(false);
   
    };

  const onSubmit = (e) => {
    e.preventDefault();
     isAdd === true ?
      (
    
      UserAddService({
       
      },handleSuccess, handleException)
      ) : (
     
      UserUpdateService({
        id: editData.id,
       
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

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
  
  
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } 
    };

    return (
        <div >
            <div>
                <Dialog 
                open={open}
                onClose={handleClose}
                 fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                        {"ADD Label"} 
                    </DialogTitle>  
                    <form onSubmit={onSubmit}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           
                                <div style={{marginTop:'20px',marginLeft:'5px', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'15px'}}>Department : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl  style={{width:'250px' ,marginLeft:'60px'}}>
                                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                            <Select 
                                            labelId="Department"
                                            id="Department"
                                            label="Department"
                                            value={department}
                                            onChange={(e) => onDepartmentChange(e)}>
                                            {departmentList.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                                                )
                                            })}                                                                                                                                                                                                                                                                                                     
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{marginTop:'20px',marginLeft:'5px', display:'flex', alignItems:'center'}}>
                                    <label  style={{marginLeft:'15px'}}> Select Section : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl style={{width:'250px' ,marginLeft:'40px'}}>
                                            <InputLabel  id="demo-simple-select-label">Select Section</InputLabel>
                                            <Select
                                            labelId="SelectSection"
                                            id="Select Section"
                                            value={section}
                                            label="Select Section"
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
                                <div style={{marginTop:'20px',marginLeft:'5px', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'15px'}}>Asset Type : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl style={{width:'250px' ,marginLeft:'62px'}}>
                                            <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
                                            <Select 
                                            labelId="AssetType"
                                            id="AssetType"
                                            value={assetType}
                                            label="Asset Type"
                                            onChange={(e) => onAssetTypeChange(e)}>
                                            {assetTypeList.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                                                )
                                            })}   
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                                        <RadioGroup
                                                row aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                value={redio}
                                                onChange={onChangeRedio}>
                                            
                                            <FormControlLabel 
                                                style={{
                                                        marginLeft:'5px'
                                                        }} 
                                                        value="asset" 
                                                        control={<Radio />
                                                        } label="Select Asset"
                                                     />
                                            <FormControlLabel 
                                                style={{
                                                        marginLeft:'50px'
                                                        }} 
                                                        value="assetId"
                                                        control={<Radio />
                                                        } label="Select Asset Id" 
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </div>

                                {
                                    redio=== "asset" &&
                                    <div style={{marginTop:'20px',marginLeft:'5px',  display:'flex', alignItems:'center'}}>
                                    <label  style={{marginLeft:'15px'}}>Select Asset : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl  style={{width:'250px' ,marginLeft:'50px'}}>
                                            <InputLabel id="demo-simple-select-label">Select Asset Type First</InputLabel>
                                            <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                }
                                {
                                    redio=== "assetId" &&
                                    <div>
                                    <label>Asset ID</label>
                                    <TextField
                                        
                                        id="Vendor-Address"
                                        variant="outlined"
                                        onChange={(e) => { setAssetId(e.target.value) }}
                                    
                                    />
                                    </div>
                                }
                               
                                <div>
                                    <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                    row aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                        <FormControlLabel style={{marginLeft:'5px'}} value="BARCODE" control={<Radio />} label="BARCODE" />
                                        <FormControlLabel style={{marginLeft:'50px'}} value="QRCODE" control={<Radio />} label="QRCODE" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <div>
                                    <Button style={{marginLeft:'150px', marginTop:'20px'}}variant="contained">Submit</Button>
                                </div>
                           
                        </DialogContentText>
                    </DialogContent>
                    </form>
                </Dialog>
            </div>
        </div>      
    )
}