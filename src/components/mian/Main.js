import React from "react";
import "./Main.css";
import SettingsIcon from '@mui/icons-material/Settings';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import HandymanIcon from '@mui/icons-material/Handyman';
import BuildIcon from '@mui/icons-material/Build';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Battery50Icon from '@mui/icons-material/Battery50';
import DangerousIcon from '@mui/icons-material/Dangerous';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import img from "./rdl.png"
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StyleIcon from '@mui/icons-material/Style';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Main = () => {
    return (
        <>
        <Grid container spacing={2} style={{marginTop:'20px', marginLeft:'20px'}}>
            <Grid item xs={6} sm={4} md={3.5} lg={1.7} xl={1.9}
            style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
                marginTop:'10px',
                border: 'solid',
                borderColor: 'aqua',  
            }}>
                <p >Total Asset</p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',   
                }}> 
                <Link to='/asset'><FileCopyIcon className='dash-icon' /> </Link>
            </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3.5} lg={1.7} xl={1.9}
            style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
                marginTop:'10px',
                border: 'solid',
                borderColor: 'aqua',
               

            }}>
                <p >New Asset</p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                    
                }}>    
              
               <AddBoxIcon className='dash-icon1' /> 
            </div>
        </Grid>

        <Grid item xs={6} sm={4} md={3.5} lg={1.7} xl={1.9}
            style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
                marginTop:'10px',
                border: 'solid',
                borderColor: 'aqua',
               

            }}>
                <p >Asset Tagged</p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                    
                }}>    
               
                 <Link to='/tagassettable'><StyleIcon className='dash-icon2' /></Link>
            </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3.5} lg={1.8} xl={1.8}
            style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
                marginTop:'10px',
                border: 'solid',
                borderColor: 'aqua',
               

            }}>
                <p >Untagged Asset</p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                    
                }}>    
               
               <Link to='/Untagassettable'><LocalOfferIcon className='dash-icon3' /></Link>
            </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3.5} lg={1.8} xl={1.8}
            style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
                marginTop:'10px',
                border: 'solid',
                borderColor: 'aqua',
               

            }}>
                <p >hello</p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                    
                }}>    
                
            </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3.5} lg={1.8} xl={1.8}
            style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
                marginTop:'10px',
                border: 'solid',
                borderColor: 'aqua',
 
            }}>
                
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    
                    
                }}>    
              
              <img src={img} height="40px" width="40px"></img>
                 <p>AssetManagment</p>
            </div>
        </Grid>
      </Grid>

     <Grid container spacing={2} style={{marginLeft:'20px'}}>
       
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
        <div>
        <label>Warranty Due</label>
       </div>
       <Link to='/WarrantyList'><SettingsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        marginBottom:'20px'
                    }}/> </Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
        <div>
        <label> Service Due</label>
       </div>
                       <Link to='/Servicedue'><ReportProblemIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                      
                    }}/> </Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
        <div >
                       Inspection Due
         </div>
                    <Link to='/Inceptiondue'><HandymanIcon className='icondash' style= {{
                        height: '60px',
                        width: '60px',
                    
                    }}/></Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
              <div>
                      AMC Due
                    </div>
                    <Link to='/Amcdue'><BuildIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                      

                    }}/></Link>
        </Grid>
      

     </Grid>
   
     <Grid container spacing={2} style={{marginLeft:'20px'}}>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
       <div>
                       Certificate Due
                    </div>
                    <Link to='/Certificatedue'><NewReleasesIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
        <div >
                       Insurance Due
                    </div>
                    <Link to='/Insurancedue'><HourglassFullIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                     }} /></Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
              <div>
                        Transfer Due
                    </div>
                    <Link to='/Transferdue'><SyncAltIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>

        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
                    <div >
                       Audit Due
                    </div>
                    <Link to='/Auditdue'><SettingsApplicationsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>
      

     </Grid>

    
     <Grid container spacing={2} style={{marginLeft:'20px'}}>
       
        
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
       <div >
                        EOL
                    </div>
                    <Link to='/EOL'><Battery50Icon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
       <div >
                       Not Found
                    </div>
                    <DangerousIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
             <div>
                      Not in Use
                    </div>
                    <Link to='/Notinuse'><NotInterestedIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
                  <div>
                      Damage
                    </div>
                    <Link to='/Damage'><EventBusyIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>

     </Grid>

     
     <Grid container spacing={2} style={{marginLeft:'20px'}}>
       
       
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
        <div >
                      Transfer
                    </div>
                    <Link to='/Transfer'><ShuffleIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
       <div >
                      In Service
                    </div>
                    <Link to='/Inservice'><SettingsSuggestIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
                style={{
                color: 'white',
                display: 'box'  ,
                background:'rgb(91, 87, 87)',
                marginRight:'20px',
             
                border: 'solid',
                borderColor: 'aqua',
                marginTop:'30px'
 
            }}>
              <div >
                      Sale
                    </div>
                    <Link to='/Sale'><InsertDriveFileIcon className='icondash' style={{
                        height: '60px',
                        width: '60px'
                    }}/></Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2.7} lg={2.7} xl={3} 
               style={{
               color: 'white',
               display: 'box'  ,
               background:'rgb(91, 87, 87)',
               marginRight:'20px',
            
               border: 'solid',
               borderColor: 'aqua',
               marginTop:'30px'

           }}>
                  <div >
                      Scrap
                    </div>
                    <Link to='/Scrap'><DeleteIcon  className='icondash' style={{
                        height: '70px',
                        width: '70px'
                    }}/></Link>
       </Grid>

     </Grid>

     
        <div className="main__container" style={{
            height: '150vh',   
        }}>
            
        </div>
        </>
    )
}

export default Main;