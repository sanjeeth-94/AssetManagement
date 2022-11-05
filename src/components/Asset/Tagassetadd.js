import React, { useState } from 'react'
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
import './Asset.css'


export default function Tagassetadd() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [tagAssetType, setTageAssetType] = useState("Department");
  const handleChangeDate = (newValue) => {
      setValue(newValue);
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
      setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
  };

  const onTagAssetType = (event) => {
    // setTagAssetType(event.target.value);
  };

  return (
    <div>
      <hr style={{bottom:'solid'}}/>
      <div style={{background:'whitesmoke'}}>
      TAG ASSET
      </div>
      <hr style={{bottom:'solid'}}/>
      <div style={{marginTop:'20px',marginLeft:'400px', width:'150vh', display:'flex', alignItems:'center'}}>
        <FormControl>
          <FormLabel id="Department"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tagAssetType}
            onChange={onTagAssetType}>
            <FormControlLabel value="Department" control={<Radio />} label="Department" />
            <FormControlLabel value="AssetId" control={<Radio />} label="Asset Id" />
          </RadioGroup>
        </FormControl>
      </div>
      <div >
      {tagAssetType === 'Department' && 
        <form>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Department : </label>
            <Box>
              <FormControl style={{width:'450px' ,marginLeft:'55px'}}>
                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Department"
                onChange={handleChange}>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Section : </label>
            <Box>
              <FormControl style={{width:'450px' ,marginLeft:'85px'}}>
                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Department"
                onChange={handleChange}>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Asset Type : </label>
            <Box>
              <FormControl style={{width:'450px' ,marginLeft:'60px'}}>
                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Department"
                onChange={handleChange}>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Asset Name : </label>
            <Box>
              <FormControl style={{width:'450px' ,marginLeft:'50px'}}>
                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Department"
                onChange={handleChange}>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>RFID NO :  </label>
            <TextField style={{marginLeft:'70px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button style={{marginLeft:'20px'}} variant="contained">Scan</Button>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>RFID NO :  </label>
            <TextField style={{marginLeft:'70px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button style={{marginLeft:'20px'}} variant="contained">Write</Button>
          </div>
          <div>
            <Button style={{marginTop:'30px', marginLeft:'10px'}} variant="contained">Assign</Button>
          </div>
        </form>
      }
      {tagAssetType === 'AssetId' && 
        <form>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Asset Id : </label>
            <Box>
              <FormControl style={{width:'450px' ,marginLeft:'73px'}}>
                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Department"
                onChange={handleChange}>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Department :  </label>
            <TextField style={{marginLeft:'50px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div style={{marginTop:'30px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Section :  </label>
            <TextField style={{marginLeft:'80px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Asset Type :  </label>
            <TextField style={{marginLeft:'56px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Asset Name:  </label>
            <TextField style={{marginLeft:'53px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>RFID NO :  </label>
            <TextField style={{marginLeft:'70px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button style={{marginLeft:'20px'}} variant="contained">Scan</Button>
          </div>
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>RFID NO :  </label>
            <TextField style={{marginLeft:'70px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button style={{marginLeft:'20px'}} variant="contained">Write</Button>
          </div>
          <div>
            <Button style={{marginTop:'30px', marginLeft:'10px'}} variant="contained">Assign</Button>
          </div>
        </form>
      }
      </div>
    </div>
  )
}
