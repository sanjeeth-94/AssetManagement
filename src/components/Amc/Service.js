import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'VendorName', headerName: 'Vendor Name', width: 320 },
  { field: 'assetName', headerName: 'Asset Name', width: 320 },
  { field: 'ServiceDateAction', headerName: 'Service Date-Action', width: 380 },

];
const rows = [

];


export default function Service() {

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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Service</Button>
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='lg'>
          <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
            {"SERVICE"}
          </DialogTitle>
          <div>
            <hr style={{ bottom: 'solid' }} />
          </div>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form>
                <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
                  <label style={{ marginLeft: '30', marginRight: '20px' }}>Department:</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ marginLeft: '10px', marginRight: '20px', width: '200px' }}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                  <label style={{ marginLeft: '30', marginRight: '20px' }}>Section:</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ marginLeft: '10px', marginRight: '20px', width: '200px' }}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                  <label style={{ marginLeft: '30', marginRight: '20px' }}>Asset Type:</label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ marginLeft: '10px', marginRight: '20px', width: '200px' }}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
                  <label style={{ marginLeft: '30', marginRight: '20px' }}>Asset Name :</label>
                  <Box>
                    <FormControl style={{ marginLeft: '10px', marginRight: '10px', width: '200px' }}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                  <Button style={{ width: '150px', marginLeft: '60px' }} variant="contained">View</Button>
                </div>
                <form style={{ border: 'solid', marginTop: '20px' }}>
                  <div style={{ marginLeft: '30px' }}>
                    <h2>SERVICE DATE</h2>
                  </div>
                  <hr />
                  <div style={{ display: 'flex', marginLeft: '800px', alignItems: 'center', marginTop: '20px' }}>
                    <label style={{ marginRight: '20px' }}>Search:</label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </div>
                  <hr />
                  <div style={{ height: 400, width: '100%', marginTop: '30px' }}>
                    <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection/>
                  </div>
                </form>
              </form>
            </DialogContentText>
            </DialogContent>
          </Dialog>
       </div>
    </div>
  );
}