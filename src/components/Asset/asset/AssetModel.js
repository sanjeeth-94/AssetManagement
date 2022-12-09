import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import {
    AssetAddService,
    AssetUpdateService,
    FetchDepaertmentService,
    FetchVenderService,
    FetchSectionService,
    FetchAssetTypeService,
    FetchVenderDataService,
    FetchAssetIdService,
   
} from '../../../services/ApiServices';

const AssetModel = ({ open, setOpen, isAdd, editData, setRefresh, refresh }) => {
    const [assetId, setAssetId] = useState();
    const [departmentList, setDepartmentList] = useState([]);
    const [department, setDepartment] = useState(editData?.department || '');
    const [section, setSection] = useState('');
    const [sectionList, setSectionList] = useState([]);
    const [assetName, setAssetName] = useState('');
    const [financialAssetId, setFinancialAssetId] = useState('');
    const [vendorName, setVendorName] = useState(editData?.vendorName ||'');
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
    const [warrantyStartDate, setWarrantyStartDate] = useState('');;
    const [warrantyEndDate, setwarrantyEndDate] = useState('');;
    const [warrantyDocument, setWarrantyDocument] = useState('');
    const [uploadDocument, setUploadDocument] = useState('');
    const [description, setDescription] = useState('');
    const [assetImage, setAssetImage] = useState('');
    const [vendorData, setVendorData] = useState([]);
    const [warranty, setWarranty] = useState("warranty");

    const handleChangeWarrantyStartDate = (e) => {
        setWarrantyStartDate(e.target.value);
        console.log(e.target.value);
    };

    const handleChangeWarrantyEndDate = (e) => {
        setwarrantyEndDate(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
        setAssetId('');
        setDepartment('');
        setSection('');
        setAssetName('');
        setFinancialAssetId('');
        setVendorName('');
        setPhoneNumber('');
        setEmailId('');
        setAssetType('');
        setVendorAddress('');
        setManufacturer('');
        setAssetModel('');
        setpoNo('');
        setInvoiceNo('');
    };

    useEffect(() => {
        FetchAssetIdService(handleFetchAssetId, handleFetchAssetIdException);
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);
        FetchVenderService(handleFetchVender, handleFetchVenderException);
        setAssetId(editData.assetId || '');
        setDepartment(editData?.department || '');
        setSection(editData?.section ||'');
        setAssetName(editData?.assetName || '');
        setFinancialAssetId(editData?.financialAssetId || '');
        setVendorName(editData?.vendorName || '');
        setPhoneNumber(editData?.phoneNumber || '');
        setEmailId(editData?.email || '');
        setAssetType(editData?.assetType || '');
        setVendorAddress(editData?.vendorAddress || '');
        setManufacturer(editData?.manufacturer || '');
        setAssetModel(editData?.assetModel || '');
        setpoNo(editData?.poNo || '');
        setInvoiceNo(editData?.invoiceNo || '');
        setWarrantyStartDate(editData?.warrantyStartDate || '');
        setwarrantyEndDate(editData?.warrantyEndDate || '');
      
    }, [editData, refresh]);

    const handleFetchSuccess = (dataObject) => {
        setDepartmentList(dataObject.data);
        if (editData?.department) {
            FetchSectionService({
                id: editData?.department
            }, handleFetchSectionEdit, handleFetchSectionEditException)
        }
    }
    
    const handleFetchSectionEdit = (dataObject) => {
        setSectionList(dataObject.data);
        if (editData?.section) {
            FetchAssetTypeService({ id:editData?.section}, handleFetchAssetTypeSectionEdit, handleFetchAssetTypeSectionEditException)
        }
   }

    const handleFetchAssetTypeSectionEdit = (dataObject) => {
       setAssetTypeList(dataObject.data)
    }

    const handleFetchAssetTypeSectionEditException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }

    const handleFetchSectionEditException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
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

    const handleFetchAssetId = (dataObject) => {
        setAssetId(dataObject.data);
    }

    const handleFetchAssetIdException = (errorStaus, errorMessage) => {
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
    }

    const handleFetchVenderDataServiceException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }

    const onChangeRedio = (event) => {
        setWarranty(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        isAdd === true ?
        (
            AssetAddService({
                assetId: assetId,
                department: department,
                section: section,
                assetName: assetName,
                financialAssetId: financialAssetId,
                vendorName: vendorName,
                phoneNumber: phoneNumber,
                email: emailId,
                assetType: assetType,
                vendorAddress: vendorAddress,
                manufacturer: manufacturer,
                assetModel: assetModel,  
                poNo: poNo,
                invoiceNo: invoiceNo,
                warrantyStartDate: warrantyStartDate,
                warrantyEndDate: warrantyEndDate,
                warrantyDocument: warrantyDocument,
                uploadDocument: uploadDocument,
                description: description,
                assetImage: assetImage,
                typeWarranty: warranty,
            }, handleSuccess, handleException)
        ) : (
            AssetUpdateService({
                id: editData.id,
                assetId: assetId,
                department: department,
                section: section,
                assetName: assetName,
                financialAssetId: financialAssetId,
                vendorName: vendorName,
                phoneNumber: phoneNumber,
                email: emailId,
                assetType: assetType,
                vendorAddress: vendorAddress,
                manufaturer: manufacturer,
                assetModel: assetModel,
                poNo: poNo,
                invoiceNo: invoiceNo,
                warrantyStartDate: warrantyStartDate,
                warrantyEndDate: warrantyEndDate,
                warrantyDocument: warrantyDocument,
                uploadDocument: uploadDocument,
                description: description,
                assetImage: assetImage,
                typeWarranty: warranty,

                }, handleSuccess, handleException)
            );
    }

    const handleSuccess = (dataObject) => {
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setOpen(false);
        setAssetId('');
        setDepartment('');
        setSection('');
        setAssetName('');
        setFinancialAssetId('');
        setVendorName('');
        setPhoneNumber('');
        setEmailId('');
        setAssetType('');
        setVendorAddress('');
        setManufacturer('');
        setAssetModel('');
        setpoNo('');
        setInvoiceNo('');
    }

    const handleException = (errorObject, errorMessage) => {
        console.log(errorMessage);
    }

    return (
        <div>
            <Dialog
                open={open}
                // onClose={handleClose}
                maxWidth='xl'>
                <form onSubmit={onSubmit}>
                    <DialogTitle style={{ background: 'whitesmoke' }}>
                        {"ADD ASSET"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <form>
                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item xs={12} sm={3} md={2} lg={1.5} xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label> Asset ID : </label>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={4} lg={4.5} xl={3}
                                    >
                                        <TextField
                                            id="Asset Id "
                                            fullWidth
                                            variant="outlined"
                                            value={assetId}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label style={{}}>Department:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <FormControl style={{}} fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                            <Select
                                                labelId="department"
                                                id="department"
                                                label="Select Department"
                                                value={department}
                                                onChange={(e) => onDepartmentChange(e)}>
                                                {
                                                    departmentList.map((data, index) => {
                                                    return (
                                                        <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'

                                        }}
                                    >
                                        <label >Section:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <FormControl fullWidth style={{}}>
                                            <InputLabel id="demo-simple-select-label">Select Section </InputLabel>
                                            <Select
                                                labelId="section"
                                                id="section"
                                                label="Select Section"
                                                value={section}
                                                onChange={(e) => onSectionChange(e)}>
                                                {sectionList.map((data, index) => {
                                                    return (
                                                        <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Asset Name : </label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            id="Asset-Name"
                                            label="Asset Name"
                                            variant="outlined"
                                            onChange={(e) => { setAssetName(e.target.value) }}
                                            value={assetName}
                                        />

                                    </Grid>

                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label> Financial Asset ID :</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="FinancialAssetID "
                                            label="Financial Asset ID  "
                                            variant="outlined"
                                            onChange={(e) => { setFinancialAssetId(e.target.value) }}
                                            value={financialAssetId}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label style={{}}>Vendor Name:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <FormControl fullWidth >
                                            <InputLabel >Select Vendor Name</InputLabel>
                                            <Select
                                               
                                                labelId="vendor"
                                                id="vendor"
                                                label="Select Vendor"
                                                value={vendorName}
                                                onChange={(e) => onVenderChange(e)}>
                                                {vendorNameList.map((data, index) => {
                                                    return (
                                                        <MenuItem value={data.vendorId} key={index}>{data.vendorName}</MenuItem>
                                                    )
                                                })}

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label> Phone Number : </label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="Phone Number"
                                            label="Phone Number "
                                            variant="outlined"
                                            value={phoneNumber}

                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label style={{}}>Email Id:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="Email Id "
                                            label="Email Id "
                                            variant="outlined"
                                            value={emailId}

                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Vendor Address : </label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="Vendor-Address"
                                            label="Vendor Address "
                                            variant="outlined"
                                            value={vendorAddress}

                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Asset Type :</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
                                            <Select
                                                labelId="Vendor Name"
                                                id="Vendor-Name"
                                                label="Asset Type"
                                                value={assetType}
                                                onChange={(e) => onAssetTypeChange(e)}>
                                                {assetTypeList.map((data, index) => {
                                                    return (
                                                        <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                                                    )
                                                })}

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Manufacturer: </label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="Manufacturer"
                                            label="Manufacturer"
                                            variant="outlined"
                                            value={manufacturer}
                                            onChange={(e) => { setManufacturer(e.target.value) }}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label style={{}}>Asset Model:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="AssetModel"
                                            label="Asset Modelr"
                                            variant="outlined"
                                            value={assetModel}
                                            onChange={(e) => { setAssetModel(e.target.value) }}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>PO No: </label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="PONo"
                                            label="PO No:"
                                            variant="outlined"
                                            value={poNo}
                                            onChange={(e) => { setpoNo(e.target.value) }}

                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label style={{}}>Invoice No :</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="InvoiceNo"
                                            label="Invoice No"
                                            variant="outlined"
                                            value={invoiceNo}
                                            onChange={(e) => { setInvoiceNo(e.target.value) }}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <FormControl>
                                            <FormLabel id="warranty"></FormLabel>
                                            <RadioGroup
                                                row aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                value={warranty}
                                                onChange={onChangeRedio}>
                                                <FormControlLabel value="warranty" control={<Radio />} label="Warranty" />
                                                <FormControlLabel style={{ marginLeft: '40px' }} value="NoWarranty" control={<Radio />} label="No Warranty" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    {
                                        warranty === 'warranty' &&
                                        <>
                                            <Grid item
                                                xs={12}
                                                sm={3}
                                                md={2}
                                                lg={1.5}
                                                xl={3}
                                                style={{
                                                    alignSelf: 'center',
                                                    textAlignLast: 'center'
                                                }}
                                            >
                                                <label>Warranty Start Date: </label>
                                            </Grid>
                                            <Grid item
                                                xs={12}
                                                sm={9}
                                                md={4}
                                                lg={4.5}
                                                xl={3}
                                            >
                                                <TextField
                                                    fullWidth
                                                    id="Vendor-Address"
                                                    variant="outlined"
                                                    type='date'
                                                    value={warrantyStartDate}
                                                    onChange={(e) => { handleChangeWarrantyStartDate(e) }}

                                                />
                                            </Grid>
                                            <Grid item
                                                xs={12}
                                                sm={3}
                                                md={2}
                                                lg={1.5}
                                                xl={3}
                                                style={{
                                                    alignSelf: 'center',
                                                    textAlignLast: 'center'
                                                }}
                                            >
                                                <label>Warranty End Date:</label>
                                            </Grid>
                                            <Grid item
                                                xs={12}
                                                sm={9}
                                                md={4}
                                                lg={4.5}
                                                xl={3}
                                            >
                                                <TextField
                                                    fullWidth
                                                    id="Vendor-Address"
                                                    variant="outlined"
                                                    type='date'
                                                    value={warrantyEndDate}
                                                    onChange={(e) => { handleChangeWarrantyEndDate(e) }}

                                                />
                                            </Grid>
                                        </>
                                    }
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Warranty Document:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
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
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Upload Document:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
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
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Description:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
                                            id="Description"
                                            label="Description"
                                            variant="outlined"
                                            value={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={3}
                                        md={2}
                                        lg={1.5}
                                        xl={3}
                                        style={{
                                            alignSelf: 'center',
                                            textAlignLast: 'center'
                                        }}
                                    >
                                        <label>Asset Image:</label>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={9}
                                        md={4}
                                        lg={4.5}
                                        xl={3}
                                    >
                                        <TextField
                                            fullWidth
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
                                    </Grid>
                                </Grid>
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
