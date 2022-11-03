import React, { useEffect, useState, } from 'react'
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@mui/material'
import HttpsIcon from '@mui/icons-material/Https';
import "./login.css"
import { Link, useNavigate, } from 'react-router-dom';
import { LoginService } from '../services/ApiServices';
import ApplicationStore from '../utils/ApplicationStore';

const Login = () => {
  const navigate = useNavigate();
  const successCaseCode = [200, 201];
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  function submit(e) {
    e.preventDefault();
    LoginService({ email: data.email, password: data.password })
      .then((response) => {
        if (successCaseCode.indexOf(response.status) > -1) {
          console.log('Login Succesfull..!');
          return response.json();
        }
        throw {
          errorStatus: response.status,
          errorObject: response.json(),
        };
      }).then((data) => {
        ApplicationStore().setStorage('userDetails', data);
        navigate("/main");
      }).catch((error) => {
        error?.errorObject?.then((errorResponse) => {
          console.log(errorResponse.error ? errorResponse.error : errorResponse.message);
        });
      });
        
  }

  const handleLogin = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const paperStyle = {
    padding: 40,
    height: '60vh',
    width: 350,
    margin: "0px auto",
    backgroundColor: 'lightgrey'
  }
  
  const avatarStyle = { backgroundColor: 'blue' }
  return (
    <Paper elevation={10} style={paperStyle}>
      <form onSubmit={submit}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><HttpsIcon /></Avatar>
          <h3> Login In </h3>
        </Grid>
        <TextField
        type='email'
        id="email"
        label="Email"
        variant="outlined"
        placeholder='Enter User Email'
        required
        fullWidth
        name='email'
          //  value={user}
        onChange={(e) =>
            handleLogin(e)
          }
          value={data.username}/>
          <TextField
          id="password"
          margin="normal"
          label="Password"
          variant="outlined"
          placeholder='Enter password'
          required
          fullWidth
          type='password'
          name='password'
          onChange={(e) =>
            handleLogin(e)
          }
          value={data.password}/>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember_me" style={{ display: 'flex' }}/>
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Sign In
        </Button>      
      </form>
    </Paper>
  )
}

export default Login