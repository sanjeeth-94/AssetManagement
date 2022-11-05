import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Allocationadd from './Allocationadd';
import Selfassessment from './Selfassessment';
import Untagadd from './Untagadd';
import unTagview from './unTagview';

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


const AllocationTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="ALLOCATION" {...a11yProps(0)} />
            <Tab label="UN-TAG" {...a11yProps(1)} />
            <Tab label="RETURN ASSET" {...a11yProps(2)} />
            <Tab label="SELF ASSESSMENT" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Allocationadd />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Untagadd />
          <unTagview />
        </TabPanel>
        <TabPanel value={value} index={2}>
          </TabPanel>
        <TabPanel value={value} index={3}>
            <Selfassessment />
        </TabPanel>
      </Box>
    </div>
  )
}

export default AllocationTab;