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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NotificationBar from '../../services/NotificationBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {  UserUpdateService,FetchDepaertmentService,FetchAuditAssetTypeService, FetchSectionService, FetchAssetTypeService, FetchAssetNameService, AlloctionAddService, FetchEmployeeIdService, FetchEmployeeNameService, FetchUserNameService } from '../../services/ApiServices';

const AllocationModel = ({ open, setOpen, isAdd, editData, setRefresh }) => {
  const [departmentList, setDepartmentList] = useState([]);
  const [department, setDepartment] = useState(editData?.department || '');
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setemployeeNamed] = useState('');
  const [designation, setdesignation] = useState('');
  const [mobile_number, setmobile_number] = useState('');
  const [employeeIdList,setEmployeeIdList] = useState([]);
  const [emailId, setemailId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [auditdate,setAuditDate] = useState('');
  const [sectionList, setSectionList]=useState([]);
  const [section, setSection]=useState('');
  const [assetTypeList, setAssetTypeList]=useState([]);
  const [assetType, setAssetType]=useState('');
  const [auditName,setAuditName]=useState('');
  const [ assetNameList, setAssetNameList]=useState([]);
  const [assetName,setAssetName]=useState('');
  const [user, setuser] = useState("EmpId");
  const [temporary, setTemporary] = useState("Temporary");
  const [tempFromDate , setTempFromDate] = useState('');
  const [tempToDate , setTempToDate] = useState('');
  const [employeeNameList,setEmployeeNameList]= useState([]);
  const [userDepartmentList, setUserDepartmentList]=useState([]);
  const [ userNameList,   setUserNameList]=useState([]);
  const [userDepartment,setUserDepartment]=useState();
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });
  
  useEffect(() => {
    FetchDepaertmentService(handleFetchSuccess, handleFetchException);
    FetchEmployeeIdService(handleEmployeeSuccess, handleEmployeeException);
    setDepartment(editData?.departmentId || '');
    setSection(editData?.sectionsId || '');  
    setAssetType(editData?.assetTypesId || '');
    setAssetName(editData?.assetNameId || '');
    setUserDepartment(editData?.departmentId || '');
    setEmployeeId(editData?.employee_id|| '');
    setUserName(editData?.employeeName || '' );
    
  }, [editData]);
  
  const handleFetchSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data);
    setUserDepartmentList(dataObject.data);
    if(editData?.departmentId)
    {
      FetchSectionService({
        id: editData?.departmentId
      }, handleFetchSectionEdit, handleFetchSectionEditException);
      
      FetchUserNameService({
        id: editData?.departmentId
      },UserNameService,UserNameServiceExeption);

    } 
  }

  const UserNameService=(dataObject)=>{
    setUserNameList(dataObject.data);
  }
  const UserNameServiceExeption=(errorStaus, errorMessage)=> {
    console.log(errorMessage);

  }
  const  handleFetchSectionEdit=(dataObject)=>{
    setSectionList(dataObject.data);
    if(editData?.sectionsId)
    {
      FetchAssetTypeService({ id:editData?.sectionsId}, handleFetchAssetTypeSectionEdit, handleFetchAssetTypeSectionEditException)
      
    }
    
  }
 
  const handleFetchAssetTypeSectionEdit = (dataObject) => {
    setAssetTypeList(dataObject.data);
    if(editData?.assetTypesId)
    {
      FetchAssetNameService({ id:editData?.assetTypesId}, handleFetchAssetNameServiceEdit, handleFetchAssetNameServiceException)
      
    }
 }
 const handleFetchAssetNameServiceEdit=(dataObject)=>{
  setAssetNameList(dataObject.data);
 }
 const handleFetchAssetNameServiceException=(errorStaus, errorMessage)=> {
  console.log(errorMessage);
}

 const handleFetchAssetTypeSectionEditException = (errorStaus, errorMessage) => {
     console.log(errorMessage);
 }
  const handleFetchSectionEditException=(errorStatus , errorMassege)=>{   
    console.log(errorMassege);
  }

  
  const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }

  const handleEmployeeSuccess = (dataObject) =>{
    setEmployeeIdList(dataObject.data);

  }
  
  const handleEmployeeException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }

  const onUerDepartmentChange=(e)=>{
    setUserDepartment(e.target.value);
   
    FetchUserNameService({id:e.target.value},handleUserNameSuccess, handleUserNameException);
  }

  const handleUserNameSuccess =(dataObject)=>{
    setUserNameList(dataObject.data);
  }
  const handleUserNameException=(errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }

  const onDepartmentChange = (e) => {
    setDepartment(e.target.value);
    FetchSectionService({id:e.target.value},handleSectionServiceSuccess, handleSectionServiceException);
  }

  const handleSectionServiceSuccess = (dataObject) =>{
    setSectionList(dataObject.data);
  }
  
  const handleSectionServiceException= (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  const onSectionChange = (e) => {
    setSection(e.target.value);
    FetchAssetTypeService({id: e.target.value},handleFetchAssetTypeSuccess, handleFetchAssetTypeException);
  }
  
  const handleFetchAssetTypeSuccess = (dataObject) =>{
    setAssetTypeList(dataObject.data);
   
  }
  
  const handleFetchAssetTypeException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  
  const onAssetTypeChange = (e) => {
    setAssetType(e.target.value);
    FetchAssetNameService({id: e.target.value},handleAssetNameSuccess, handleAssetNameAssetException);
  }
  const handleAssetNameSuccess = (dataObject) =>{
    setAssetNameList(dataObject.data);
   
  }
  
  const handleAssetNameAssetException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  const onAssetNameChange= (e) => {
    setAssetName(e.target.value);
  }

  const onChangeRedio = (event) => {
    setuser(event.target.value);
};
const onChangeTemporary = (event) => {
  setTemporary(event.target.value);
};

const onEmployeeChange=(e)=>{
      setEmployeeId(e.target.value);
      FetchEmployeeNameService({id:e.target.value},handelEmployeeName,handelEmployeeNameException)
}
const handelEmployeeName=(dataObject)=>{
  setemployeeNamed(dataObject.empName);

}
const handelEmployeeNameException=(errorObject, errorMessage) =>{
  console.log(errorMessage);
}

  const handleClose = () => {
    setOpen(false);  
  };
  
  const onChangeUserName=(e)=>{
    setemployeeNamed(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    isAdd === true ?
    (
      
      AlloctionAddService({
        department:department,
        section:section,
        assetType:assetType,
        assetName:assetName,
        userType:user,
        user:employeeName,
        empId:employeeId,
        empName:employeeName,
        userDepartment:userDepartment,
        position:temporary,
        fromDate:tempFromDate,
        toDate:tempToDate,
      },handleSuccess, handleException)
    ) : (
      UserUpdateService({
        id: editData.id,
        department:department,
        section:section,
        assetType:assetType,
        assetName:assetName,
        userType:user,
        user:employeeName,
        empId:employeeId,
        empName:employeeName,
        userDepartment:userDepartment,
        position:temporary,
        fromDate:tempFromDate,
        toDate:tempToDate,
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
      fullScreen>
        <form onSubmit={onSubmit}>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {isAdd === true ? 'Add ' : 'Edit '}User
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{display:'flex'}}>
                <div style={{marginTop:'80px', marginLeft:'40px',border:'solid',width:'500px'}}>
                  <h2 style={{marginLeft:'200px'}}>ASSET</h2>
                  <hr/>
                  <div style={{marginTop:'20px', }}>
                    <label style={{marginLeft:'40px', marginRight:'40px'}}>Department : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                        <InputLabel id="departmentlabel">Select Department</InputLabel>
                        <Select
                       
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
                    </Box>
                    <label style={{marginLeft:'40px',  marginTop:'20px'}}>Section : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                        <InputLabel id="sectionList">Select section</InputLabel>
                        <Select
                        labelId="sectionList"
                        id='section'
                        label="Select section"
                        value={section}
                        onChange={(e) => onSectionChange(e)}>
                          {
                            sectionList.map((data, index) => {
                            return (
                              <MenuItem value={data.id} key={index}>{data.section}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                    <label style={{marginLeft:'50px', marginRight:'35px'}}>Asset Type : </label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                        <InputLabel id="assetTypeList">Select Asset Type</InputLabel>
                        <Select
                        labelId="assetTypeList"
                        id='assetType'
                        label="AssetType"
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
                    <label style={{marginLeft:'50px', marginRight:'35px'}}>Asset Name:</label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                        <InputLabel id="assetTypeList">Select Asset Name</InputLabel>
                        <Select
                        labelId="assetTypeList"
                        id='assetType'
                        label="AssetType"
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
                  </div>
                </div>
                <div style={{marginTop:'80px', marginLeft:'200px',border:'solid',width:'500px'}}>
                  <h2 style={{marginLeft:'200px'}}>User</h2>
                  <hr/>
                  <div style={{marginTop:'20px', }}>
                    <div style={{marginLeft:'40px'}}>
                      <FormControl>
                        <RadioGroup
                        row
                          onChange={onChangeRedio}
                        value={user}
                        >
                          <FormControlLabel value="EmpId" control={<Radio />} label="Emp Id" />
                          <FormControlLabel value="Department" control={<Radio />} label="Department" />
                      </RadioGroup>
                    </FormControl>
                    </div>
                    {
                      user ==='EmpId' &&
                      <>
                   
                  <label style={{marginLeft:'40px', marginRight:'40px'}}>Emp Id: </label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                      <InputLabel id="departmentlabel">Select Employee Id</InputLabel>
                      <Select
                      labelId="departmentlabel"
                      id='department'
                      label="Select Employee Id"
                      value={employeeId}
                      onChange={(e) => onEmployeeChange(e)}>
                        {
                          employeeIdList?.map((data, index) => {
                          return (
                            <MenuItem value={data.employee_id} key={index}>{data.employee_id}</MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                  <div style={{display:'flex'}}>
                  <label style={{marginLeft:'40px',  marginTop:'20px'}}>Emp Name: </label>
                  <TextField 
                          variant="outlined" 
                          value={employeeName}
                    />
                 </div>
                  </>
                }{
                  user !=='EmpId' &&
                  <>
                   
                  <label style={{marginLeft:'40px', marginRight:'40px'}}>Department: </label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                      <InputLabel id="departmentlabel">Select Department</InputLabel>
                      <Select
                      labelId="departmentlabel"
                      id='department'
                      label="Select Department"
                      value={userDepartment}
                      onChange={(e) => onUerDepartmentChange(e)}>
                        {
                            userDepartmentList.map((data, index) => {
                            return (
                              <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                  <label style={{marginLeft:'40px',  marginTop:'20px'}}>User: </label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '300px',marginLeft:'40px',marginBottom:'10px' }}>
                      <InputLabel id="sectionList">Select section</InputLabel>
                      <Select
                      labelId="sectionList"
                      id='section'
                      label="Select section"
                      value={employeeName}

                      onChange={(e) => onChangeUserName(e)}>
                        {
                          userNameList.map((data, index) => {
                          return (
                            <MenuItem value={data.id} key={index}>{data.user_name}</MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                  </>

                }
                  <div style={{marginLeft:'40px'}}>
                    <FormControl>
                      <RadioGroup
                      row                   
                      onChange={onChangeTemporary}
                      value={temporary}
                      >
                        <FormControlLabel value="Temporary" control={<Radio />} label="Temporary" />
                        <FormControlLabel value="Permanent" control={<Radio />} label="Permanent" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  {
                      temporary === 'Temporary' &&
                      <>
                      <div>
                      <label style={{marginLeft:'40px', marginRight:'40px',alignContent:'center'}}>From:</label>
                      <TextField 
                          id="outlined-basic"  
                          type='date' 
                          variant="outlined" 
                          value={tempFromDate}
                          onChange={(e)=>setTempFromDate(e.target.value)}
                          />
                      </div>
                      <div style={{marginTop:'10px'}}>
                      <label style={{marginLeft:'40px', marginRight:'66px',alignContent:'center'}}>to:</label>
                      <TextField style={{marginBottom:'10px'}}
                          id="outlined-basic"  
                          type='date' 
                          variant="outlined" 
                          value={tempToDate}
                          onChange={(e)=>setTempToDate(e.target.value)}
                          />
                      </div>
                      </>

                  }
                
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='addbutton'>
            <Button type='reset' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
              {isAdd === true ? 'Allocate' : 'Update Allocate'}
            </Button>
          </div>
          <NotificationBar
          handleClose={handleCloseNotify}
          notificationContent={openNotification.message}
          openNotification={openNotification.status}
          type={openNotification.type}/>
        </DialogActions>
      </form>
    </Dialog>
    </div>
  )
}

export default AllocationModel
