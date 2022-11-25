import DashBoard from './dashBord/DashBoard'
import Login from './login/Login';
import {Navigate, Outlet, Route,Routes, useNavigate,} from 'react-router-dom';
import Main from './components/mian/Main';
import AssetTab from './components/Asset/AssetTab';
import AuditTab from './components/Audit/AuditTab';
import { useEffect } from 'react';
import AmcTab from './components/Amc/AmcTab';
import MaintenanceTab from './components/Maintenance/MaintenanceTab';
import AllocationTab from './components/Allocation/AllocationTab';
import VenderAdd from './components/Vender/VenderAdd';
import UserList from './components/User/UserList';
import Servicedue from './components/DashboardItems/Servicedue';

import Tagassettable from './components/Asset/Tagassettable';
import Untagassettable from './components/Allocation/Untagassettable';
import MaintenanceSchedule from './components/MaintenanceSchedule/MaintenanceSchedule';
import MaintenanceSchedulList from './components/check/MaintenanceSchedulList';
import WarrantyList from './components/Amc/WarrantyList';
import Certificate from './components/Amc/Certificate/Certificate';
import ServiceRequestList from './components/ServiceRequest/ServiceRequestList';
import InspectionDueList from './components/Amc/Certificate/InspectionDueList';


function App() {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  //   return !userDetails?.access_token? navigate('/login' ) : navigate('/main')
  // },[]);
  function ProtectedRoutes() {
    const navigate = useNavigate();
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (userDetails) {
      return !userDetails?.access_token? navigate('/login' ) : <Outlet />
    }
    
    return <Navigate replace to="/login" />;
  }
  
  return (
    <Routes>
      <Route path="/login"  element={<Login/>}/> 
      <Route element={<ProtectedRoutes/>}>
        <Route path="/" element={<DashBoard/>}>
          <Route path="/main" element={<Main/>}/>
          <Route path="/asset" element={<AssetTab/>}/>
          <Route path='/audit' element={<AuditTab/>}/>
          <Route path='/amc' element={<AmcTab/>}/>
          <Route path='/maintenanceschedule' element={<MaintenanceSchedule/>}/>
          <Route path='/maintainceaproval' element={<MaintenanceSchedulList/>}/>
          <Route path='/maintaincestatus' element={<MaintenanceTab/>}/>
          <Route path='/alloction' element={<AllocationTab/>}/>
          <Route path='/servicerequest' element={<ServiceRequestList/>}/>
          <Route path='/vender' element={<VenderAdd/>}/>
          <Route path='/user' element={<UserList/>}/>
          <Route path='/logout' element={<MaintenanceTab/>}/>
          <Route path='/servicedue' element={<Servicedue/>}/>
          <Route path='/tagassettable' element={<Tagassettable/>}/>
          <Route path='/untagassettable' element={<Untagassettable/>}/>
          <Route path='/warrantyList' element={<WarrantyList/>}/>
          <Route path='/amcTab' element={<AmcTab/>}/>
          <Route path='/maintenanceSchedulList' element={<MaintenanceSchedulList/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
          <Route path='/InsepectionDueList' element={<InspectionDueList/>}/>
        </Route> 
      </Route>
    </Routes> 
  );
}

export default App;
