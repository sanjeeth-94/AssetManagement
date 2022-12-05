import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import dayjs from 'dayjs';
import { TagAssetAddService,
    TagAssetUpdateService,
    FetchDepaertmentService, 
    FetchAuditSectionService,
    FetchAuditAssetTypeService, 
    FetchSectionService,
    FetchAssetTypeService,
    FetchAssetNameService,
    FetchSelectAssetIdService,
    FetchIdAssetIdService,
    FetchTagAssetIdService,
    FetchTagAssetRfIdService
} from '../../../services/ApiServices';
import { Grid, MenuItem } from '@mui/material';

export default function TagAssetModel({ open, setOpen, isAdd, editData, setRefresh }) {
    const [departmentList,setDepartmentList] =useState([]);
    const [tagAssetType, setTageAssetType] = useState("Department");
    const [department, setDepartment] = useState('');
    const [sectionList,setSectionList] =useState([]);
    const [section, setSection] = useState('');
    const [assetTypeList,setAssetTypeList] =useState([]);
    const [assetType, setAssetType] = useState('');
    const [assetNameList,setAssetNameList] =useState([]);
    const [assetName, setAssetName] = useState('');
    const [assetIdList ,setAssetIdList]=useState([]);
    const [assetId, setAssetId]=useState('');
    const [rfIdNo1,setRfIdNo1]=useState('');
    const [rfIdNo2,setRfIdNo2]=useState('');

    const onTagAssetType = (event) => {
        setTageAssetType(event.target.value);
    };
    
    useEffect(() => {
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);
        FetchSelectAssetIdService(handleAssetIdService,handleAssetIdServiceException);
        FetchTagAssetRfIdService(handleAssetRfIdService,handleAssetRfIdServiceException)
    }, [editData]);

    const handleAssetRfIdService=(dataObject)=>{
        setRfIdNo2(dataObject.data);
    } 
    const handleAssetRfIdServiceException=(errorStaus, errorMessage)=>{
        console.log(errorMessage);
    }

    const handleAssetIdService = (dataObject) =>{
        setAssetIdList(dataObject.data);
    }
    
    const handleAssetIdServiceException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }
    
    const handleFetchSuccess = (dataObject) =>{
        setDepartmentList(dataObject.data);
    }
    
    const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }
    
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
    const onSectionChange = (e)=>{
        setSection(e.target.value);
        FetchAssetTypeService({id:e.target.value},handleAssetTypeService,handleAssetTypeException)
    }
    const handleAssetTypeService = (dataObject) => {
        setAssetTypeList(dataObject.data);
    }

    const handleAssetTypeException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }

    const onAssetTypeChange = (e)=>{
        setAssetType(e.target.value);
        FetchAssetNameService({id:e.target.value},handleAssetNameService,handleAssetNameServiceException)
    }
    const handleAssetNameService = (dataObject) => {
        setAssetNameList(dataObject.data);
    }

    const handleAssetNameServiceException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }

    const onAssetNameChange = (e)=>{
        setAssetName(e.target.value);
    }
    const onAssetIdChange =(e)=>{
        setAssetId(e.target.value);
        FetchIdAssetIdService({id:e.target.value},handleIdAssetIdService,handleIdAssetIdServiceException)
    }
    const handleIdAssetIdService=(dataObject)=>{
        setDepartment(dataObject?.data[0]?.department);
        setSection(dataObject?.data[0]?.section);
        setAssetType(dataObject?.data[0]?.assetype);
        setAssetName(dataObject?.data[0]?.assetName);
    
    }
    const handleIdAssetIdServiceException =(errorStaus, errorMessage)=>{
        console.log(errorMessage);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        FetchTagAssetIdService(
            { 

            tagAssetType:tagAssetType,
            assetId:assetId,
            department:department,
            section:section,
            assettype: assetType,
            assetName:assetName,
            scanRfidNo:rfIdNo1,
            rfidNo:rfIdNo2,
            
        },handleTagAssetId,handleTagAssetIdExeption)
    }
    const handleTagAssetId=(dataObject)=>{
        console.log(dataObject);
      
    }
    const handleTagAssetIdExeption=(errorStaus, errorMessage)=>{
        console.log(errorMessage);
    }
    return (
        <div>
            <Grid container>
                <Grid>
                    <h3 style={{background:'whitesmoke'}}>
                    TAG ASSET
                    </h3>
                </Grid>
            </Grid>
        <form onSubmit={onSubmit}>
            <hr style={{bottom:'solid'}}/>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                style={{alignSelf:'center', alignItems:'center', marginLeft:'35%'}}
                >
                <FormControl>
                    <FormLabel id="Department"></FormLabel>
                    <RadioGroup
                    row aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={tagAssetType}
                    onChange={onTagAssetType}>
                        <FormControlLabel value="Department" control={<Radio />} label="Department" />
                        <FormControlLabel value="AssetId" control={<Radio />} label="Asset Id" />
                    </RadioGroup>
                </FormControl>
                </Grid>

            </Grid>

        <div>
            {
                tagAssetType === 'Department' &&
            <>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                    >
                    <label >Department :</label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Department"
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
                    </Grid>

                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                    >
                    <label >Section : </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
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
                    </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                    style={{alignSelf:'center'}}
                    >
                    <label >Asset Type : </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Asset Type</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Asset Type"
                                value={assetType}
                                    onChange={(e) => onAssetTypeChange(e)}>
                                    {
                                        assetTypeList.map((data, index) => {
                                        return (
                                            <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                    style={{alignSelf:'center'}}
                    >
                        <label >Asset Name : </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Asset Name</InputLabel>
                                <Select
                                label="Select Asset Name"
                                value={assetName}
                                    onChange={(e) => onAssetNameChange(e)}>
                                    {
                                        assetNameList.map((data, index) => {
                                        return (
                                            <MenuItem value={data.id} key={index}>{data.assetName}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                </Grid>          
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                    style={{alignSelf:'center'}}
                    >
                        <label >RFID NO :  </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <TextField fullWidth 
                        id="outlined-basic" 
                        label="RFID NO" 
                        variant="outlined" 
                        value={rfIdNo1}
                        onChange={(e)=>setRfIdNo1(e.target.value)}
                        
                        />   
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>          
                        <Button variant="contained">Scan</Button>
                    </Grid>


                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                    style={{alignSelf:'center'}}
                    >
                        <label>RFID NO :  </label>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <TextField 
                        fullWidth 
                        id="outlined-basic" 
                        label="RFID NO" 
                        variant="outlined" 
                        value={rfIdNo2}
                                       
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Button variant="contained">Write</Button>
                    </Grid>
                </Grid>
            </>
            }        
            {
             tagAssetType === 'AssetId' && 
             <>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                        <label >Asset Id : </label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Asset Id</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Asset Id"
                                value={assetId}
                                onChange={(e) => onAssetIdChange(e)}>
                                {assetIdList.map((data, index) => {
                                    return (
                                        <MenuItem value={data.id} key={index}>{data.assetId}</MenuItem>
                                    )
                                })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                        <label >Department :  </label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <TextField  
                            fullWidth 
                            id="outlined-basic" 
                            variant="outlined" 
                            value={department}
                            />
                        </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                        <label >Section :</label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <TextField 
                            fullWidth 
                            id="outlined-basic"  
                            variant="outlined" 
                            value={section}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                        <label >Asset Type :  </label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <TextField 
                            fullWidth 
                            id="outlined-basic"  
                            variant="outlined" 
                            value={assetType}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                            <label >Asset Name:  </label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <TextField 
                            fullWidth 
                            id="outlined-basic"  
                            variant="outlined" 
                            value={assetName}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                        <label> RFID NO :  </label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <TextField 
                            fullWidth 
                            id="outlined-basic"  
                            variant="outlined" 
                            value={rfIdNo1}
                            onChange={(e)=>setRfIdNo1(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <Button  variant="contained">Scan</Button>
                        </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop:'5px'}}>
                    <Grid item xs={0} sm={6} md={3} lg={3} xl={3}/>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}
                        style={{alignSelf:'center'}}
                        >
                        <label> RFID NO :  </label>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <TextField 
                            fullWidth 
                            id="outlined-basic"  
                            variant="outlined" 
                            value={rfIdNo2}
                           
                        />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <Button variant="contained">Write</Button>
                        </Grid>
                </Grid>
             </>
            }
                <div>
                    <Button 
                    style={{
                        marginTop:'10px', 
                        marginLeft:'25%'
                        }} variant="contained"
                        type='submit'
                        >
                            Assign
                    </Button>
                </div>
                </div>
            </form>
  
        </div>
       
    )
}


