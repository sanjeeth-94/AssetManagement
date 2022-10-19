import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import AmcServiceadd from './AmcServiceadd';
import Warranty from './Warranty';
import Certificateadd from './Certificateadd';
import Service from './Service';
import Servicedue from './Servicedue';

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

const AmcTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="AMC SERVICE" {...a11yProps(0)} />
          <Tab label="CERTIFICATE" {...a11yProps(1)} />
          <Tab label="WARRANTY" {...a11yProps(2)} />
          <Tab label="INSURANCE" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AmcServiceadd />
        <Service />   
        <Servicedue />            
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Certificateadd />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Warranty />
      </TabPanel>
    </Box>
    </div>
  )
}

export default AmcTab;