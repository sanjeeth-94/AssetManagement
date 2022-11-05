import "./Sidebar.css";
import React, { useState } from 'react'
import { ReactDOM } from "react";
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

const Sidebar = ({ toggleFunction, sidebarOpen }) => {
        return (
                <div className={sidebarOpen === false ? "sidebar_responsive" : " "} id="sidebar" style={{
            height:'100vh', width:'15vh'
                }}>
                        <div className="sidebar__title"></div>
                        <div className="sidebar__menu">
                                <div className="sidebar__link active_menu_link">
                    <FullscreenIcon className='icon'/>
                                </div>
                                <div className="sidebar__link">
                        <Link to='/main'><PieChartIcon className='icon'/></Link>

                                </div>
                                <div className="sidebar__link">
                        <Link to='/asset'><AddchartIcon className='icon'/></Link>

                                </div>
                                <div className="sidebar__link">
                   <Link to='/audit'><AssignmentIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                    <Link to='/Amc'><HandymanIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                     <Link to='/maintenanceschedule'><ManageAccountsIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                     <Link to='/maintainceaproval'><CheckCircleIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                        <Link to='/maintaincestatus'><QueryStatsIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                        <Link to='/alloction'><AccountTreeIcon className='icon'/></Link> 
                                </div>
                                <div className="sidebar__link">
                        <Link to='/servicerequest'><SettingsIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                        <Link to='/vender'><GroupAddIcon className='icon'/></Link>  
                                </div>
                                <div className="sidebar__link">
                        <Link to='/user'><PersonIcon className='icon'/></Link>
                                </div>
                                <div className="sidebar__link">
                        <LogoutIcon className='icon'/>
                                </div>
                        </div>
                </div>
        )
}

export default Sidebar;