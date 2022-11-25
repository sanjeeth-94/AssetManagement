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
import { color, width } from "@mui/system";
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
      <div >
                      AMC Due
                    </div>
                    <Link to='/Amcdue'><BuildIcon className='icondash' style={{
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
                       Audit Due
                    </div>
                    <Link to='/Auditdue'><SettingsApplicationsIcon className='icondash' style={{
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
                      Damage
                    </div>
                    <Link to='/Damage'><EventBusyIcon className='icondash' style={{
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
            {/* <div className="main__cards">
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                        
                    }}>
                        <p className="text-primary-p" >Total Asset</p>
                        <div style={{
                            
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title">0</span>
                            <Link to='/asset'><FileCopyIcon className='dash-icon' /> </Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">New Asset</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title">0</span>
                            <AddBoxIcon className='dash-icon1' /> 
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        display: 'inline',
                        color: 'white'
                    }}>
                        <p className="text-primary-p">Asset Tagged</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title">0</span>
                            <Link to='/tagassettable'><StyleIcon className='dash-icon2' /></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">Untagged Asset</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            
                            <span className="font-bold text-title">0</span>
                            <Link to='/Untagassettable'><LocalOfferIcon className='dash-icon3' /></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">hello</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title"></span>
                            <i className=""></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                           <img src={img} height="40px" width="40px"></img>
                           <p>AssetManagment</p>
                        </div>
                    </div>
                </div>
            </div> */}
{/*             
            <div className="blocks wrapper">
                {/* <div className="block green">
                    <div className="heading">
                      Warranty Due
                    </div>
                    <Link to='/WarrantyList'><SettingsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px'
                    }}/> </Link>
                </div> 
                <div className="block green">
                    <div className="heading">
                      Service Due
                      <Link to='/Servicedue'><ReportProblemIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/> </Link>
                    </div>
                    <div className="num">0</div>
                </div> 
                <div className="block green">
                    <div className="heading">
                       Inspection Due
                    </div>
                    <Link to='/InspectionDueList'><HandymanIcon className='icondash' style= {{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num"></div>
                </div>  */}
                {/* <div className="block green">
                    <div className="heading">
                      AMC Due
                    </div>
                    <Link to='/Amcdue'><BuildIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',

                    }}/></Link>
                    <div className="num">0</div>
                </div> 
                <div className="block green">
                    <div className="heading">
                       Certificate Due
                    </div>
                    <Link to='/Certificatedue'><NewReleasesIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div> 
                <div className="block green">
                    <div className="heading">
                       Insurance Due
                    </div>
                    <Link to='/Insurancedue'><HourglassFullIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                     }} /></Link>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                        Transfer Due
                    </div>
                    <Link to='/Transferdue'><SyncAltIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div> */}
                {/* <div className="block green">
                    <div className="heading">
                       Audit Due
                    </div>
                    <Link to='/Auditdue'><SettingsApplicationsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                        EOL
                    </div>
                    <Link to='/EOL'><Battery50Icon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                       Not Found
                    </div>
                    <DangerousIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Not in Use
                    </div>
                    <Link to='/Notinuse'><NotInterestedIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div> */}
                {/* <div className="block green">
                    <div className="heading">
                      Damage
                    </div>
                    <Link to='/Damage'><EventBusyIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Transfer
                    </div>
                    <Link to='/Transfer'><ShuffleIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      In Service
                    </div>
                    <Link to='/Inservice'><SettingsSuggestIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/></Link>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Sale
                    </div>
                    <Link to='/Sale'><InsertDriveFileIcon className='icondash' style={{
                        height: '60px',
                        width: '60px'
                    }}/></Link>
                    <div className="num">0</div>
                </div> */}
                {/* <div className="block green">
                    <div className="heading">
                      Scrap
                    </div>
                    <Link to='/Scrap'><DeleteIcon  className='icondash' style={{
                        height: '70px',
                        width: '70px'
                    }}/></Link>
                    <div className="num">0</div>
                </div> */}
            {/* </div> */} 
        </div>
        </>
    )
}

export default Main;