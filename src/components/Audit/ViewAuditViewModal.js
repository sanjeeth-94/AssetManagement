import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { FetchAssetTypeService, FetchDepaertmentService, FetchSectionService} from '../../services/ApiServices';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const ViewAuditViewModal =({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [department  ,setDepartment]= useState();
  const [departmentList,setDepartmentList]= useState([]);
  const [section ,setSection]= useState();
  const [sectionList,setSectionList]=useState([]);
  const [assetList, setAssetList]= useState([]);
  const [assetType, setAssetType] = useState('');
  const [ assetNameList, setAssetNameList] = useState([]);
  const [asset, setAsset] = useState('');
  const [rows ,setRows]=useState([]);


    const [openNotification, setNotification] = useState({
      status: false,
      type: 'error',
      message: '',
    });

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 120 },
        { field: 'auditDate', headerName: 'Date', width: 140 },
        { field: 'auditName', headerName: 'Audit Name', width: 140 },
        { field: 'department', headerName: 'Department', width: 140 },
        { field: 'section', headerName: 'Section', width: 140 },
        { field: 'assetType', headerName: 'Asset Type', width: 140 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,
    }]

    useEffect(() => {
        FetchDepaertmentService(handleFetchSuccess, handleFetchException);
    
      }, [editData]);
      
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
        },handleFetchDepartmentSuccess, handleFetchDepartmentException);
        
      }
      
      
      
      const handleCloseNotify = () => {
        setOpen(false)
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };
      
      const handleFetchDepartmentSuccess = (dataObject) =>{
        setSectionList(dataObject.data);
      }
      
      const handleFetchDepartmentException = (errorStaus, errorMessage) =>{
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
      }
      
      const onAssetTypeChange = (e) => {
        setAssetType(e.target.value);
        
      }
      
      const handleFetchAssetNameServiceSuccess = (dataObject) => {
        setAssetNameList(dataObject.data || []);
      }
      
      const handleFetchAssetNameServiceException= (errorStaus, errorMessage) => {
        console.log(errorMessage);
      }

      const handleClose = () => {
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
        onClose={handleClose}
        maxWidth='lg'>
          <form >
            <DialogTitle style={{background:'whitesmoke'}}>
              {"AUDIT ASSETS"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
              <form>
              <Grid  container spacing={2} style={{ marginTop: '20px'}}>
              <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
            <label>Audit Name:</label>
          </Grid>
          <Grid item
          xs={12}
          sm={9}
          md={2}
          lg={2}
          xl={2}
          
      >
          <TextField
              fullWidth
              id="Audit Name"
              label="Audit Name"
              variant="outlined"
             
          />

      </Grid>
          <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
            <label>Department:</label>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=""
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
          <Grid item xs={12} sm={6} md={1} lg={1} xl={1}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
            <label>Section:</label>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=""
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
          <Grid item xs={12} sm={6} md={1} lg={1} xl={1}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
            <label>Asset Type</label>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"    
                label=""
                onChange={(e) => onAssetTypeChange(e)}>
                  {assetList.map((data, index) => {
                    return (
                      <MenuItem value={data.id} key={index}>{data.assetType}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
                </Grid>
                <Grid container style={{display:'inline'}}> 
                <Grid>
                    <h3>Existing Asset</h3>
                </Grid>
                <Grid>
                <DataGrid style={{height:'200px'}}
                rows={rows}
                columns={columns} />
                </Grid>

                </Grid>

                <Grid container style={{display:'inline'}}> 
                <Grid>
                  <h3>Missing Asset</h3>
                </Grid>
                <Grid>
                <DataGrid style={{height:'200px'}}
                rows={rows}
                columns={columns} />
                </Grid>

                </Grid>

                <Grid container style={{display:'inline'}}> 
                <Grid>
                    <h3>Additional Added Asset</h3>
                </Grid>
                <Grid>
                <DataGrid style={{height:'200px'}}
                rows={rows}
                columns={columns} />
                </Grid>
                </Grid>
              </form>
            </DialogContentText>
          </DialogContent>   
        </form>                         
      </Dialog>
    </div>
  )
}

export default ViewAuditViewModal
