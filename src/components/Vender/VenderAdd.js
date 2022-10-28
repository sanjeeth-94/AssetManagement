import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Addingvendor from './Addingvendor';
import DataTableVender from './Vendertypeview';
import VenderaddType from './VenderaddType';
import DataTableViews from './VenderView';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const VenderAdd = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ADD VENDOR" {...a11yProps(0)} />
          <Tab label="ADD VENDOR TYPE" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{marginLeft:'85%', marginBottom:'20px'}}>
        <Addingvendor  />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{marginLeft:'50%', marginBottom:'20px'}}>
        <VenderaddType/>
        </div>
        <DataTableVender />
      </TabPanel>
    </Box>
  )
}

export default VenderAdd;