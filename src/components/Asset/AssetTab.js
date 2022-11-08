import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Tagassetadd from './Tagassetadd';
import Transferasset from './Transferasset';
import Scraplog from './Scraplog'
import Scrapasset from './Scrapasset';
import Assetmaster from './Assetmaster'
import AssetList from './asset/AssetList';
import SectionList from './Section/SectionList';
import AssetTypeList from './AssetType/AssetTypeList';
import DepartmentList from './Department/DepartmentList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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


const AssetTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ASSET" {...a11yProps(0)} />
          <Tab label="DEPARTMENT" {...a11yProps(1)} />
          <Tab label="SECTION" {...a11yProps(2)} />
          <Tab label="ASSET TYPE" {...a11yProps(3)} />
          <Tab label="TAG ASSET" {...a11yProps(4)} />
          <Tab label="SCRAP ASSET" {...a11yProps(5)} />
          <Tab label=" TRANSFER ASSET" {...a11yProps(6)} />
          <Tab label="ASSET MASTER" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel  value={value} index={0} >
        

       <AssetList/>

     
      </TabPanel>
      <TabPanel value={value} index={1}>
      <DepartmentList />
     
      </TabPanel>
      <TabPanel value={value} index={2}>
       <SectionList />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <AssetTypeList />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Tagassetadd />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Scraplog/>
        <Scrapasset />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Transferasset />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Assetmaster />
      </TabPanel>
    </Box>
    </div>
  )
}

export default AssetTab;