import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const InspectionList = () => {
    
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const rows = [];   
 
     const columns = [
        { field: 'Vendor Name', headerName: 'Vendor Name ', width: 280 },
        { field: 'Asset Name', headerName: 'Inspection date - Action', width: 240 },
       
      ];
  return (
    <div>
        <div style={{display:'flex', marginBottom:'30px',marginLeft:'30px',alignItems:'center'}}>
            <label>Department:</label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Box>

                <label>Section:</label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            
                <label>Asset Type</label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            
                <label>Asset Name :</label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl style={{width:'150px',marginLeft:'30px',marginRight:'30px'}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Box>
                <Button variant="contained">Contained</Button>
        </div>
        <form style={{border:'solid'}}>
        <div>
            <h3 style={{marginLeft:'30px',marginTop:'10px'}}>INSPECTION DATE</h3>
        </div>
        <hr/>
       <div style={{ height: 200, width: '80%', marginLeft:'40px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        onRowAdd/>
    </div>
    </form>
    </div>
  )
}

export default InspectionList
