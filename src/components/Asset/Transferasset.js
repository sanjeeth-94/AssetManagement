import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './Asset.css'

export default function Transferasset() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div style={{display:'flex'}}>
            <div >
                <form style={{width:'500px',border:'solid', borderColor:'whitesmoke'}}>
                    <h2 style={{marginLeft:'200px'}}>From</h2>
                    <hr />
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Department:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'28px'}}>
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
                        <label style={{marginLeft:'5px'}}>Section:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'59px'}}>
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
                        <label style={{marginLeft:'5px'}}>Asset Type:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'34px'}}>
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
                            <FormControl style={{width:'300px' ,marginLeft:'27px'}}>
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
                    <div style={{marginLeft:'150px', marginTop:'20px', marginBottom:'20px'}}>
                        <Button variant="contained">Move</Button>
                    </div>
                </form>
            </div>

            <div>
                <form style={{ marginLeft:'30px' ,width:'500px',border:'solid', borderColor:'whitesmoke'}}>
                    <h2 style={{marginLeft:'200px'}}>To</h2>
                    <hr/>
                    <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                        <label style={{marginLeft:'5px'}}>Department:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'22px'}}>
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
                        <label style={{marginLeft:'5px'}}>Section:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'52px'}}>
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
                        <label style={{marginLeft:'5px'}}>Asset Type:</label>
                        <Box>
                            <FormControl style={{width:'300px' ,marginLeft:'30px', marginBottom:'20px'}}>
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
                </form>
            </div>
        </div>       
    )
}

            
