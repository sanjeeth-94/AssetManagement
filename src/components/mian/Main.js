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
import Battery20RoundedIcon from '@mui/icons-material/Battery20Rounded';
import img from "./rdl.png"
import { color, width } from "@mui/system";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StyleIcon from '@mui/icons-material/Style';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Main = () => {
    return (
      
        <div className="main__container" style={{
            height: '200vh',   
        }}>
            <div className="main__cards">
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
                            <FileCopyIcon className='dash-icon' />  
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
                            <StyleIcon className='dash-icon2' />
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
                            <LocalOfferIcon className='dash-icon3' />
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
            </div>
            <div className="blocks wrapper">
                <div className="block green">
                    <div className="heading">
                      Warranty Due
                    </div>
                    <SettingsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px'
                    }}/> 
                </div> 
                <div className="block green">
                    <div className="heading">
                      Service Due
                      <ReportProblemIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/> 
                    </div>
                    <div className="num">0</div>
                </div> 
                <div className="block green">
                    <div className="heading">
                       Inspection Due
                    </div>
                    <HandymanIcon className='icondash' style= {{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num"></div>
                </div> 
                <div className="block green">
                    <div className="heading">
                      AMC Due
                    </div>
                    <BuildIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',

                    }}/>
                    <div className="num">0</div>
                </div> 
                <div className="block green">
                    <div className="heading">
                       Certificate Due
                    </div>
                    <NewReleasesIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div> 
                <div className="block green">
                    <div className="heading">
                       Insurance Due
                    </div>
                    <HourglassFullIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                     }} />
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                        Transfer Due
                    </div>
                    <SyncAltIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                       Audit Due
                    </div>
                    <SettingsApplicationsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                        EOL
                    </div>
                    <Battery50Icon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
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
                    <NotInterestedIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Damage
                    </div>
                    <EventBusyIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',

                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Transfer
                    </div>
                    <ShuffleIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      In Service
                    </div>
                    <SettingsSuggestIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'40px',
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Sale
                    </div>
                    <InsertDriveFileIcon className='icondash' style={{
                        height: '60px',
                        width: '60px'
                    }}/>
                    <div className="num">0</div>
                </div>
                <div className="block green">
                    <div className="heading">
                      Scrap
                    </div>
                    <DeleteIcon  className='icondash' style={{
                        height: '70px',
                        width: '70px'
                    }}/>
                    <div className="num">0</div>
                </div>
            </div>
        </div>
    )
}

export default Main;