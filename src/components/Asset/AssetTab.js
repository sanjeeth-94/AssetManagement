import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Assetadd from './Assetadd';
import Assetimport from './Assetimport';
import Addlabel from './Addlabel';
import Adddept from './Adddept';
import Addsection from './Addsection';
import Assettypeadd from './Assettypeadd';
import Tagassetadd from './Tagassetadd';
import Transferasset from './Transferasset';
import Assetview from './Assetview';
import Deptview from './Deptview';
import Sectionview from './Sectionview';
import Assettypeview from './Assettypeview';
import Scraplog from './Scraplog'
import Scrapasset from './Scrapasset';
import Assetmaster from './Assetmaster'
import './Asset.css'

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
        <div style={{display:'flex'}}>
      <div style={{display:'flex' ,height:'10vh',marginLeft:'650px',}}> 
       <Assetadd  />
      </div>
      <div style={{display:'flex' ,height:'10vh',marginLeft:'10px',}}> 
       <Assetimport />  
      </div>
      <div style={{display:'flex' ,height:'10vh',marginLeft:'10px',}}> 
       <Addlabel /> 
      </div>
      </div>
      <div>
        <hr/>
       <Assetview />    
      </div>   
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Adddept />
      <Deptview />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Addsection />
        <Sectionview />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Assettypeadd />
        <Assettypeview />
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