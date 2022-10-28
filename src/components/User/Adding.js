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


export default function Adding() {
  const [departmentList, setDepartmentList] = useState([])

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
      })
  }, []);


  const url = 'http://192.168.1.174:8000/api/user/add'

  const [data, setData] = useState({
    employeeId: '',
    employeeName: '',
    department: '',
    designation: '',
    mobile_number: '',
    emailId: '',
    userName: '',
    password: ''
  })

  function handleAdd(e) {
    e.preventDefault();
    //APPI token 
    fetch(url, {
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
        employee_id: data.employeeId,
        employee_name: data.employeeName,
        department: data.department,
        designation: data.designation,
        mobile_number: data.mobile_number,
        email: data.emailId,
        user_name: data.userName,
        password: data.password,


      }),
      referrerPolicy: 'no-referrer'

    }).then(response => response.json()).then(json => {
      console.log('json', json)
      localStorage.setItem("employeeDetails", JSON.stringify(JSON));
      // sessionStorage.setItem("userDetails", JSON.stringify(json));
      setOpen(false);
        
    }).catch(e => {
      console.log("e", e)
    })

  }




  const handleUser = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)

  }

  const onDepartmentChange = (e) => {
    setData((dataSet) => {
      return { ...dataSet, department: e.target.value }
    })
  }


  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth='lg'>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {"ADD USER"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form>
                <div  style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                  <label>Employee ID :</label>
                  <TextField style={{marginLeft:'45px', width:'250px'}}  id="employeeId" label="Employee ID" variant="outlined"
                    onChange={(e) =>
                      handleUser(e)}
                    value={data.employeeId}/>        
                  <label style={{marginLeft:'50px'}} >Employee Name :</label>
                  <TextField style={{marginLeft:'28px', width:'250px'}}  id="employeeName" label="Employee Name" variant="outlined"
                    onChange={(e) =>
                      handleUser(e)}
                    value={data.employeeName}/>
                </div>
                <div  style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }} >
                  <label>Department :</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '250px' , marginLeft:'50px'}}>
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
                  <label style={{ alignitems: 'start', marginLeft:'50px' }}>Designation :</label>
                  <TextField style={{marginLeft:'65px', width:'250px'}} id="designation" label="Designation" variant="outlined" sx={{ alignitems: 'end' }} onChange={(e) =>
                    handleUser(e)}
                    value={data.designation} />
                </div>
                <div  style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                  <label>Mobile Number :</label>
                  <TextField style={{marginLeft:'25px', width:'250px'}}  id="mobile_number" label="Mobile Number" variant="outlined" onChange={(e) =>
                    handleUser(e)}
                    value={data.mobile_number} />
                  <label style={{marginLeft:'50px'}}>Email ID :</label>
                  <TextField style={{marginLeft:'90px', width:'250px'}} id="emailId" label="Email ID" variant="outlined" onChange={(e) =>
                    handleUser(e)}
                    value={data.emailId} />
                </div>
                <div  style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                  <label>User Name:</label>
                  <TextField style={{marginLeft:'58px', width:'250px'}} id="userName" label="User Name" variant="outlined" onChange={(e) =>
                    handleUser(e)}
                    value={data.userName} />
                  <label style={{marginLeft:'50px'}}>Password :</label>
                  <TextField style={{marginLeft:'77px', width:'250px'}} id="password" label="Password" variant="outlined" onChange={(e) =>
                    handleUser(e)}
                    value={data.password} />
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div>
              <Button style={{marginLeft:'200px'}} onClick={handleClose}>Cancel</Button>
              <Button onClick={handleAdd} autoFocus>Add</Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}