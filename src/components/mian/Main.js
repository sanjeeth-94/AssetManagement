import React, { useEffect, useState } from "react";
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
import {
        AmcDueCountService, 
        AssetsCountService, 
        AuditDueCountService, 
        CertificateDueCountService, 
        DamageCountService, 
        EolCountService, 
        InsuranceDueCountService, 
        SalesCountService, 
        TagAssetsCountService, 
        UntagCountService, 
        WarrantyDueCountService 
      } from "../../services/ApiServices";

const Main = () => {
    const [assetCount, setAssetCount]= useState('');
    const [tagAssets,setTagAssets]= useState('');
    const [untagCount,setUntagCount]= useState('');
    const [ warrantyDueCount ,setWarrantyDueCount]= useState('');
    const [amcDueCount,setAmcDueCount]= useState('');
    const [ certificateDueCount, setCertificateDueCount]= useState('');
    const [ insuranceDueCount, setInsuranceDueCount]= useState('');
    const [auditDueCount,setAuditDueCount]= useState('');
    const [eolCount,setEolCount]= useState('');
    const [damageCount,setDamageCount]= useState('');
    const [salesCount,setSalesCount]= useState('');
    
    useEffect(()=>{
        AssetsCountService(handleAssetsCountService,handleAssetsCountException);
        TagAssetsCountService(handleTagAssetsCountService,handleTagAssetsCountException);
        UntagCountService(handleUntagCountService,handleUntagCountException);
        WarrantyDueCountService(handleWarrantyDueCountService,handleWarrantyDueCountexception);
        AmcDueCountService(handleAmcDueCountService,handleAmcDueCountException);
        CertificateDueCountService(handleCertificateDueCountService,handleCertificateDueCountException);
        InsuranceDueCountService(handleInsuranceDueCountService, handleInsuranceDueCountExceotion);
        AuditDueCountService(handleAuditDueCountService,handleAuditDueCountException);
        EolCountService(handleEolCountService,handleEolCountException);
        DamageCountService(handleDamageCountService,handleDamageCountException);
        SalesCountService(handleSalesCountService,handleSalesCountException);
    },[]);

    const handleAssetsCountService = (dataObject) => {
        setAssetCount(dataObject?.assets || '0');
    }

    const handleAssetsCountException=()=>{   }

    const handleTagAssetsCountService = (dataObject) => {
        setTagAssets(dataObject?.tagAssets || '0');
    }

    const handleTagAssetsCountException=()=>{   }

    const handleUntagCountService=(dataObject)=>{
        setUntagCount(dataObject?.data?.untag);
    }

    const handleUntagCountException=()=>{}

    const handleWarrantyDueCountService=(dataObject)=>{
            setWarrantyDueCount(dataObject?.warrantyDue);
    }
    const handleWarrantyDueCountexception=()=>{}

    const handleAmcDueCountService=(dataObject)=>{
        setAmcDueCount(dataObject?.amcDue);
    }
    const handleAmcDueCountException=()=>{}

    const handleCertificateDueCountService=(dataObject)=>{
        setCertificateDueCount(dataObject?.data?.certificateDue);
    }   

    const handleCertificateDueCountException=()=>{}

    const handleInsuranceDueCountService=(dataObject)=>{
        setInsuranceDueCount(dataObject?.data?.insurancenDue);
    }
    const handleInsuranceDueCountExceotion=()=>{}

    const handleAuditDueCountService=(dataObject)=>{
            setAuditDueCount(dataObject.auditDueCount);
    }
    const handleAuditDueCountException=()=>{}

    const handleEolCountService=(dataObject)=>{
        setEolCount(dataObject.eol);
    }
    const handleEolCountException=()=>{}

    const handleDamageCountService=(dataObject)=>{
        setDamageCount(dataObject.damageCount);

    }
    const handleDamageCountException=()=>{}

    const handleSalesCountService=(dataObject)=>{
        setSalesCount(dataObject.sales);
    }
    const handleSalesCountException=()=>{}

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
                    
                }}>
                <label style={{ marginRight:'70%' , color:'aqua'}}>{assetCount}</label>
                <Link to='/asset' ><FileCopyIcon className='dash-icon' /> </Link>
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
               <label style={{ marginRight:'70%' , color:'aqua'}}>{}</label>
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
                <label style={{ marginRight:'70%' , color:'aqua'}}>{tagAssets}</label>
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
               <label style={{ marginRight:'70%' , color:'aqua'}}>{untagCount}</label>
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
 
        <p>Warranty Due</p>
   
        <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    
                }}>
       <label style={{ marginRight:'60%' , color:'aqua', }}>{warrantyDueCount}</label>
       <Link to='/WarrantyList'><SettingsIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        marginBottom:'20px'
                    }}/> </Link>

        </div>
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
              <p>AMC Due </p>
                    <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    
                }}>
                     <label style={{ marginRight:'60%' , color:'aqua', }}>{amcDueCount}</label>
                   
                    <Link to='/Amcdue'><BuildIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                      

                    }}/></Link>
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
       <p>Certificate Due</p>
                <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            
                    }}>
                    <label style={{ marginRight:'35%' , color:'aqua', }}>{certificateDueCount}</label>
                    <Link to='/Certificatedue'><NewReleasesIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
                    </div>
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
        <p>Insurance Due </p>
        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            
                    }}>
                    <label style={{ marginRight:'35%' , color:'aqua', }}>{insuranceDueCount}</label>
                    <Link to='/Insurancedue'><HourglassFullIcon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                     }} /></Link>

                     </div>
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
       <p >    EOL   </p>
       <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            
                    }}>
                    <label style={{ marginRight:'35%' , color:'aqua', }}>{eolCount}</label>
                    <Link to='/EOL'><Battery50Icon className='icondash' style={{
                        height: '60px',
                        width: '60px',
                        margin:'20px',
                    }}/></Link>
        </div>
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
              <p >Sale</p>
              <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            
                    }}>
                    <label style={{ marginRight:'35%' , color:'aqua', }}>{salesCount}</label>
                    <Link to='/Sale'><InsertDriveFileIcon className='icondash' style={{
                        height: '60px',
                        width: '60px'
                    }}/></Link>
                    </div>
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