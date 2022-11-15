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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import {
    AssetAddService,
    AssetUpdateService,
    FetchDepaertmentService,
    FetchVenderService,
    FetchSectionService,
    FetchAssetTypeService,
    FetchVenderDataService,
} from '../../../services/ApiServices';

const AssetModel = ({ open, setOpen, isAdd, editData, setRefresh, refresh }) => {

    const [assetId, setAssetId] = useState('');
    const [departmentList, setDepartmentList] = useState([]);
    const [department, setDepartment] = useState('');
    const [section, setSection] = useState('');
    const [sectionList, setSectionList] = useState([]);
    const [assetName, setAssetName] = useState('');
    const [financialAssetId, setFinancialAssetId] = useState('');
    const [vendorName, setVendorName] = useState('');
    const [vendorNameList, setVendorNameList] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [assetTypeList, setAssetTypeList] = useState([]);
    const [assetType, setAssetType] = useState('');
    const [vendorAddress, setVendorAddress] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [assetModel, setAssetModel] = useState('');
    const [poNo, setpoNo] = useState('');
    const [invoiceNo, setInvoiceNo] = useState('');
    const [warrantyStartDate, setWarrantyStartDate] = useState(dayjs('2014-08-18T21:11:54'));;
    const [warrantyEndDate, setwarrantyEndDate] = useState(dayjs('2014-08-18T21:11:54'));;
    const [warrantyDocument, setWarrantyDocument] = useState('');
    const [uploadDocument, setUploadDocument] = useState('');
    const [description, setDescription] = useState('');
    const [assetImage, setAssetImage] = useState('');
    const [vendorData, setVendorData] = useState([]);
    const [warranty, setWarranty] = useState("Warranty");

    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
   
   
    const handleChangeWarrantyStartDate = (newValue) => {
     
        setWarrantyStartDate(newValue);
    };

    const handleChangeWarrantyEndDate = (newValue) => {
        setValue(newValue);
        setwarrantyEndDate(newValue);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //to call display in department//
    useEffect(() => {
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);
        FetchVenderService(handleFetchVender, handleFetchVenderException);
    }, [editData, refresh]);

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

    // department on change and section API call//    
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
    const onVenderChange = (e) => {
        setVendorName(e.target.value);
        FetchVenderDataService({ id: e.target.value }, handleFetchVenderDataService, handleFetchVenderDataServiceException)
    }
    const handleFetchVenderDataService = (dataObject) => {
        setVendorData(dataObject.data);
        setPhoneNumber(dataObject?.data[0]?.contactNo || '');
        setEmailId(dataObject?.data[0]?.email || '');
        setVendorAddress(dataObject?.data[0]?.address || '');   
        // {vendorData.map((data) => {
        //     console.log('data', data.contactNo);
        //     setPhoneNumber(data.contactNo);
        //     setEmailId(data.email);
        //     setVendorAddress(data.address);          
  
        // })}
    }

    const handleFetchVenderDataServiceException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }
    const onChangeRedio= (event) =>
     {
        setWarranty(event.target.value);
    };


    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
            (
                AssetAddService({

                    assetId: assetId,
                    department:department,
                    section:section,
                    assetName:assetName,
                    financialAssetId:financialAssetId,
                    vendorName:vendorName,
                    phoneNumber:phoneNumber,
                    email:emailId,
                    assetType:assetType,
                    vendorAddress:vendorAddress,
                    manufaturer:manufacturer,
                    assetModel:assetModel,
                    poNo:poNo,
                    invoiceNo:invoiceNo,
                    warrantyStartDate:warrantyStartDate,
                    warrantyEndDate:warrantyEndDate,
                    warrantyDocument:warrantyDocument,
                    uploadDocument:uploadDocument,
                    description:description,
                    assetImage:assetImage,
                    typeWarranty:warranty,

                }, handleSuccess, handleException)
            ) : (
                AssetUpdateService({
                    id: editData.id,
                    assetId: assetId,
                    department:department,
                    section:section,
                    assetName:assetName,
                    financialAssetId:financialAssetId,
                    vendorName:vendorName,
                    phoneNumber:phoneNumber,
                    email:emailId,
                    assetType:assetType,
                    vendorAddress:vendorAddress,
                    manufaturer:manufacturer,
                    assetModel:assetModel,
                    poNo:poNo,
                    invoiceNo:invoiceNo,
                    warrantyStartDate:warrantyStartDate,
                    warrantyEndDate:warrantyEndDate,
                    warrantyDocument:warrantyDocument,
                    uploadDocument:uploadDocument,
                    description:description,
                    assetImage:assetImage,
                    typeWarranty:warranty,

                }, handleSuccess, handleException)
            );
    }

    const handleSuccess = (dataObject) => {
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setOpen(false);
    }

    const handleException = (errorObject, errorMessage) => {
        console.log(errorMessage);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='lg'>
                <form onSubmit={onSubmit}>
                    <DialogTitle style={{ background: 'whitesmoke' }}>
                        {"ADD ASSET"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <form>
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ marginLeft: '1px' }}>Asset ID : </label>
                                    <TextField
                                        style={{ marginLeft: '86px', width: '250px' }}
                                        id="Asset Id "
                                        label="Asset Id "
                                        variant="outlined"
                                        onChange={(e) => { setAssetId(e.target.value) }}
                                        value={assetId}
                                    />

                                    <label style={{ marginLeft: '90px' }}>Department:</label>
                                    <Box>
                                        <FormControl style={{ width: '250px', marginLeft: '55px' }}>
                                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                            <Select
                                                labelId="department"
                                                id="department"
                                                label="Select Department"
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

                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ marginLeft: '1px' }}>Section:</label>
                                    <Box>
                                        <FormControl style={{ width: '250px', marginLeft: '96px' }}>
                                            <InputLabel id="demo-simple-select-label">Select Section </InputLabel>
                                            <Select
                                                labelId="section"
                                                id="section"
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
                                    <label style={{ marginLeft: '90px' }}>Asset Name : </label>
                                    <TextField
                                        style={{ marginLeft: '50px' }}
                                        id="Asset-Name"
                                        label="Asset Name"
                                        variant="outlined"
                                        onChange={(e) => { setAssetName(e.target.value) }}
                                        value={assetName}
                                    />
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ marginLeft: '1px' }}>Financial Asset ID : </label>
                                    <TextField 
                                            style={{ 
                                                marginLeft: '20px', 
                                                width: '250px' 
                                                }} 
                                                id="Asset Id " 
                                                label="Asset Id " 
                                                variant="outlined" 
                                                onChange={(e) => { setFinancialAssetId(e.target.value) }}
                                                 value={financialAssetId} 
                                        />
                                    <label style={{ marginLeft: '88px' }}>Vendor Name:</label>
                                    <Box>
                                        <FormControl style={{ width: '250px', marginLeft: '40px' }}>
                                            <InputLabel >Select Department</InputLabel>
                                            <Select
                                                labelId="vendor"
                                                id="vendor"
                                                label="Select Vendor"
                                                onChange={(e) => onVenderChange(e)}>
                                                {vendorNameList.map((data, index) => {
                                                    return (
                                                        <MenuItem value={data.id} key={index}>{data.vendorName}</MenuItem>
                                                    )
                                                })}

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ marginLeft: '1px' }}>Phone Number : </label>
                                    <TextField
                                        style={{
                                            marginLeft: '40px',
                                            width: '250px'
                                        }}
                                        id="Asset Id "
                                        label="Asset Id "
                                        variant="outlined"
                                        value={phoneNumber}
                                      
                                    />
                                    <label style={{ marginLeft: '90px' }}>Email Id: </label>
                                    <TextField
                                        style={{
                                            marginLeft: '80px',
                                            width: '250px'
                                        }}
                                        id="Asset Id "
                                        label="Asset Id "
                                        variant="outlined"
                                        value={emailId}

                                    />
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label >Vendor Address : </label>
                                    <TextField
                                        style={{
                                            marginLeft: '35px',
                                            width: '250px'
                                        }}
                                        id="Vendor-Address"
                                        label="Vendor Address "
                                        variant="outlined"
                                        value={vendorAddress}
                        
                                    />
                                    <label style={{ marginLeft: '90px' }}>Asset Type :</label>
                                    <Box>
                                        <FormControl style={{ width: '250px', marginLeft: '50px' }}>
                                            <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
                                            <Select
                                                labelId="Vendor Name"
                                                id="Vendor-Name"

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
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label>Manufacturer: </label>
                                    <TextField 
                                        style={{ 
                                            marginLeft: '58px',
                                            width: '250px' 
                                            }} 
                                            id="Manufacturer" 
                                            label="Manufacturer"
                                             variant="outlined" 
                                             vallue={manufacturer}
                                             onChange={(e) => { setManufacturer(e.target.value) }}
                                        />
                                    <label style={{ marginLeft: '90px' }}>Asset Model: </label>
                                    <TextField 
                                        style={{ 
                                            marginLeft: '45px',
                                            width: '250px' 
                                            }} 
                                            id="AssetModel" 
                                            label="Asset Modelr" 
                                            variant="outlined" 
                                            vallue={assetModel}
                                            onChange={(e) => { setAssetModel(e.target.value) }}
                                    />
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label>PO No: </label>
                                    <TextField 
                                        style={{ 
                                            marginLeft: '109px',
                                            width: '250px' 
                                            }} 
                                            id="PONo" 
                                            label="PO No:" 
                                            variant="outlined"
                                            vallue={poNo}
                                            onChange={(e) => { setpoNo(e.target.value) }}                                   
                                    
                                    />
                                    <label style={{ marginLeft: '90px' }}>Invoice No :</label>
                                    <TextField 
                                        style={{ 
                                            marginLeft: '45px', 
                                            width: '250px' 
                                            }} 
                                            id="InvoiceNo" 
                                            label="Invoice No" 
                                            variant="outlined" 
                                            vallue={invoiceNo}
                                            onChange={(e) => { setInvoiceNo(e.target.value) }}         
                                    />
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '400px', display: 'flex', alignItems: 'center' }}>
                                    <FormControl>
                                        <FormLabel id="Warranty"></FormLabel>
                                        <RadioGroup
                                            row aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                                value={warranty}
                                                onChange={onChangeRedio}>
                                            <FormControlLabel value="Warranty" control={<Radio />} label="Warranty" />
                                            <FormControlLabel style={{ marginLeft: '40px' }} value="NoWarranty" control={<Radio />} label="No Warranty" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {
                                    warranty ==='Warranty' &&
                               
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label>Warranty Start Date:</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack style={{ width: '250px', marginLeft: '18px' }} spacing={3}>
                                            <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/DD/YYYY"
                                                value={warrantyStartDate}
                                                onChange={handleChangeWarrantyStartDate}
                                                renderInput={(params) => <TextField {...params} />} />
                                        </Stack>
                                    </LocalizationProvider>
                                    <label style={{ marginLeft: '85px' }}>Warranty End Date:</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack style={{ width: '250px' }} spacing={3}>
                                            <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/DD/YYYY"
                                                value={warrantyEndDate}
                                                onChange={handleChangeWarrantyEndDate}
                                                renderInput={(params) => <TextField {...params} />} />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                 }
                                 
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label >Warranty Document:</label>
                                    <TextField
                                        style={{ width: '300px', marginLeft: '20px' }}

                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setWarrantyDocument(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                    <label style={{ marginLeft: '250px' }}>Upload Document:</label>
                                    <TextField
                                        style={{ width: '300px', marginLeft: '20px' }}

                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setUploadDocument(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    <label >Description:</label>
                                    <TextField 
                                        style={{ 
                                            marginLeft: '80px', 
                                            width: '250px' 
                                            }} 
                                            id="Description" 
                                            label="Description" 
                                            variant="outlined" 
                                            vallue={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                    />
                                    <label style={{ marginLeft: '100px' }}>Asset Image:</label>
                                    <TextField
                                        style={{ width: '300px', marginLeft: '20px' }}

                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setAssetImage(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <div>
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

export default AssetModel
