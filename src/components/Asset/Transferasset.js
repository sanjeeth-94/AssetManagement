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
        <div>
            <form>
                <h2>From</h2>
                <hr />
                <div>
                    <label>Department : </label>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" placeholder="Select Department"></InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}>
                                <MenuItem value={10}>Accounting</MenuItem>
                                <MenuItem value={20}>production</MenuItem>
                                <MenuItem value={30}>R & D</MenuItem>
                                <MenuItem value={30}>Testing</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div>
                    <label>Section : </label>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" placeholder="Select Department First"></InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div>
                    <label>Asset Type : </label>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" placeholder="Select Section First"></InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>    
                </div>
                <div>
                    <label>Asset Name : </label>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"placeholder="Select Asset Type First"></InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div>
                    <Button variant="contained">Move</Button>
                </div>
            </form>
            <div>
                <form>
                    <h2>To</h2>
                    <hr />
                    <div>
                        <label>Department : </label>
                        <Box>
                            <FormControl halfWidth>
                                <InputLabel id="demo-simple-select-label"placeholder="Select Asset Type First"></InputLabel>
                                <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <label>Asset Type : </label>
                        <Box>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label"placeholder="Select Asset Type First"></InputLabel>
                                <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </form>
            </div>
        </div>
    )
}

            
