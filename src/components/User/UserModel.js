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


const UserModel = ({open, setOpen, isAdd, editData}) => {
    const [departmentList, setDepartmentList] = useState([])
    const url = 'http://192.168.1.174:8000/api/user/add'
    const [employeeId, setemployeeId]=useState('')
    const [employeeName, setemployeeNamed]=useState('') 
    const [designation, setdesignation]=useState('')
    const [mobile_number, setmobile_number]=useState('')
    const [emailId, setemailId]=useState('')
    const [ userName, setuserName]=useState('')  
    const [ password, setpassword]=useState('')  
    const [ department, setDepartment]=useState('') 

    useEffect(() => {
        fetch("http://192.168.1.174:8000/api/department/showData",
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
    
          })
          .then(response => response.json())
          .then((dataObject) => {
            setDepartmentList(dataObject.data);
          });
          setemployeeId(editData.employee_id || '');
          setemployeeNamed(editData.employee_name || '');
          setDepartment(editData.department || '');
          setdesignation(editData.designation || '');
          setemailId(editData.email || '' );
          setmobile_number(editData.mobile_number || '');
          setuserName(editData.user_name || '');
          setpassword(editData.password || '')
      }, [editData]);
    
      function handleAdd(e) {
        e.preventDefault();
        
      }

      const onDepartmentChange = (e) => {
        setDepartment(e.target.value);
      }

      const handleClose = () => {
        employeeId=''
        employeeName='' 
        designation=''
        mobile_number=''
        emailId=''
        userName=''  
        password=''  
        department='' 
        setOpen(false);
      };
    
    const onSubmit = (e) =>{
        e.preventDefault();
        isAdd === true ?
        (fetch(url, {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              employee_id: employeeId,
              employee_name:employeeName,
              department: department,
              designation:designation,
              mobile_number:mobile_number,
              email: emailId,
              user_name:userName,
              password: password,
            }),
            referrerPolicy: 'no-referrer'
          }).then(response => response.json()).then(json => {
            console.log('json', json)
            localStorage.setItem("employeeDetails", JSON.stringify(JSON));
            setOpen(false);
          }).catch(e => {
            console.log("e", e)
          })) : (fetch(`http://192.168.1.174:8000/api/user/${editData.id}/update`, {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
              // 'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify({
              employee_id: employeeId,
              employee_name: employeeName,
              department: department,
              designation:designation,
              mobile_number: mobile_number,
              email: emailId,
              user_name: userName,
             
            }),
            referrerPolicy: 'no-referrer'
      
          }).then(response => response.json()).then(json => {
            console.log('json', json)
            localStorage.setItem("employeeDetails", JSON.stringify(JSON));
            // sessionStorage.setItem("userDetails", JSON.stringify(json));
            setOpen(false);
              
          }).catch(e => {
            console.log("e", e)
          }));
    }
  return (
     <Dialog
        open={open}
        fullWidth
    >
        <form onSubmit={onSubmit}>
        <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
        {isAdd === true ? 'Add ' : 'Edit '}User
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Employee ID :</label>
                <TextField id="employeeId" label="Employee ID" variant="outlined"
                onChange={(e) =>{setemployeeId(e.target.value)}}
                value={employeeId}
                />
            </div>
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Employee Name :</label>
                <TextField id="employeeName" label="Employee Name" variant="outlined"
                onChange={(e) =>{setemployeeNamed(e.target.value)}}
                value={employeeName}
                />
            </div>
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Department :</label>
                <Box sx={{ minWidth: 120 }}>
                <FormControl style={{ width: '300px' }}>
                    <InputLabel id="departmentlabel">Select Department</InputLabel>
                    <Select
                    labelId="departmentlabel"
                    id='department'
                    label="Department"
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
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Designation :</label>
                <TextField id="designation" label="Designation" variant="outlined" sx={{ alignitems: 'end' }} 
                onChange={(e) =>{setdesignation(e.target.value)}}
                value={designation} />
            </div>
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Mobile Number :</label>
                <TextField id="mobile_number" label="Mobile Number" variant="outlined"
                onChange={(e) =>{setmobile_number(e.target.value)}}
                value={mobile_number} />
            </div>
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Email ID :</label>
                <TextField id="emailId" label="Email ID" variant="outlined" 
                onChange={(e) =>{setemailId(e.target.value)}}
                value={emailId} />
            </div>
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>User Name:</label>
                <TextField id="userName" label="User Name" variant="outlined" 
                onChange={(e) =>{setuserName(e.target.value)}}
                value={userName} />
            </div>
            <div style={{display:'flex',marginlef:'20px',marginBottom:'10px'}}>
                <label style={{marginRight:'40px'}}>Password :</label>
                <TextField id="password" label="Password" variant="outlined" 
                onChange={(e) =>{setpassword(e.target.value)}}
                value={password} />
            </div>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <div className='addbutton'>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>
                {isAdd === true ? 'Add' : 'Update'}
            </Button>
        </div>
        </DialogActions>
        </form>
    </Dialog>
  )
}

export default UserModel
