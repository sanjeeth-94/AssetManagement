import "./Sidebar.css";
import React, { useEffect } from 'react'
import PieChartIcon from '@mui/icons-material/PieChart';
import AddchartIcon from '@mui/icons-material/Addchart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HandymanIcon from '@mui/icons-material/Handyman';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { LogoutService } from "../../services/ApiServices";
import { useState } from "react";
import NotificationBar from "../../services/NotificationBar";

const Sidebar = ({ toggleFunction, sidebarOpen }) => {
const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
        });
            
const [isFullscreen, setIsFullscreen] = useState(false);

const onClickLogOut = (e) => {
        e.preventDefault();
        LogoutService(handleLogoutService, handleLogoutServiceExeption)
}
const handleLogoutService = (dataObject) => {
        console.log(dataObject);
        setNotification({
                status: true,
                type: 'success',
                message: dataObject.message,
              });
        setTimeout(()=>{
                sessionStorage.clear();
                window.location.reload(true);
        },3000);
        
}
const handleLogoutServiceExeption = (errorObject, errorMessage) => {
        console.log(errorMessage);
        setNotification({
                status: true,
                type: 'error',
                message: errorMessage,
              });
}
const handleCloseNotify = () => {
        
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };
    
const onFullScreen =()=>{
        // document.body.requestFullscreen(); 
        if(isFullscreen === true){
                document.body.requestFullscreen();
                setIsFullscreen(false); 
        }
        if(isFullscreen === false){
                document.exitFullscreen();
                setIsFullscreen(true);
        }
}


return (
<div className={sidebarOpen === false ? "sidebar_responsive" : " "} id="sidebar" style={{
        height: '110vh', width: '11vh'
}}>
        <div className="sidebar__title"></div>
        <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
                <FullscreenIcon onClick={onFullScreen} className='icon' />
        </div>
        <div className="sidebar__link">
                <Link to='/main'><PieChartIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/asset'><AddchartIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/audit'><AssignmentIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/Amc'><HandymanIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/maintenanceschedule'><ManageAccountsIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/maintainceaproval'><CheckCircleIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/maintaincestatus'><QueryStatsIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/alloction'><AccountTreeIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/servicerequest'><SettingsIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/vender'><GroupAddIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <Link to='/user'><PersonIcon className='icon' /></Link>
        </div>
        <div className="sidebar__link">
                <LogoutIcon className='icon' onClick={onClickLogOut} />
        </div>
        </div>
        <NotificationBar
            handleClose={handleCloseNotify}
            notificationContent={openNotification.message}
            openNotification={openNotification.status}
            type={openNotification.type}
           
          />
</div>
)
}

export default Sidebar;