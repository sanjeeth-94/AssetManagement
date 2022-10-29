import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import './Asset.css'

export default function Scrapasset() {
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
    setTageAssetType(event.target.value);
  };

    return(
      <div>
        <hr style={{bottom:'solid'}}/>
        <div style={{background:'whitesmoke'}}>
          SCRAP ASSET
        </div>
        <hr style={{bottom:'solid'}}/>
        <div style={{marginTop:'5px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
          <label style={{marginLeft:'5px'}}>Scrap Type:  </label>
          <FormControl>
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tagAssetType}
            onChange={onTagAssetType}>
              <FormControlLabel style={{marginLeft:'80px'}}value="Scrap" control={<Radio />} label="Scrap" />
              <FormControlLabel style={{marginLeft:'80px'}} value="EOL" control={<Radio />} label="EOL" />
              </RadioGroup>
          </FormControl>
        </div>
        <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
          <label style={{marginLeft:'5px'}}>Department : </label>
          <Box>
            <FormControl style={{width:'450px' ,marginLeft:'53px'}}>
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
          <label style={{marginLeft:'5px'}}>Asset Name:</label>
          <Box>
            <FormControl style={{width:'450px' ,marginLeft:'105px'}}>
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
          <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
            <label style={{marginLeft:'5px'}}>Warranty Document:</label>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    )
}