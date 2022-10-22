import React, { useEffect, useState, } from 'react'
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@mui/material'
import HttpsIcon from '@mui/icons-material/Https';
import "./login.css"
import { Link, useNavigate, } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  //API adress
  const url = "http://192.168.1.174:8000/api/user/login"
  const [data, setData] = useState({
    email: '',
    password: ''
  })


  function submit(e) {
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
      body: JSON.stringify({ email: data.email, password: data.password }),
      referrerPolicy: 'no-referrer'

    }).then(response => response.json()).then(json => {
      console.log('json', json)
      sessionStorage.setItem("userDetails", JSON.stringify(json));
      navigate("/main");
    }).catch(e => {
      console.log("e", e)
    })

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
          value={data.username}
        />

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
          value={data.password}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember_me" style={{ display: 'flex' }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
       
      </form>
    </Paper>
  )
}
export default Login