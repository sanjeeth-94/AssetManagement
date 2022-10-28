import DashBoard from './dashBord/DashBoard'
import Login from './login/Login';
import {Route,Routes, useNavigate,} from 'react-router-dom';
import PrivateRoutes from './ProtectedRouts';
import Main from './components/mian/Main';
import AssetTab from './components/Asset/AssetTab';
import AuditTab from './components/Audit/AuditTab';
import { useEffect } from 'react';
import AmcTab from './components/Amc/AmcTab';
import MaintenanceTab from './components/Maintenance/MaintenanceTab';
import Check from './components/check/check';
import AllocationTab from './components/Allocation/AllocationTab';
import ServiceRequestTab from './components/ServiceRequest/RequestedserviceTab';
import VenderAdd from './components/Vender/VenderAdd';
import UserList from './components/User/UserList';
import Warrantydue from './components/DashboardItems/Warrantydue';
import Servicedue from './components/DashboardItems/Servicedue';
import Inceptiondue from './components/DashboardItems/Inceptiondue';


function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    return !userDetails?.access_token? navigate('/login' ) : navigate('/main')
  },[]);

  return (
    <Routes>
      <Route path="/login"  element={<Login/>}/> 
      <Route element={<PrivateRoutes/>}>
           <Route path="/" element={<DashBoard/>}>
              <Route path="/main" element={<Main/>}/>
              <Route path="/asset" element={<AssetTab/>}/>
              <Route path='/audit' element={<AuditTab/>}/>
              <Route path='/amc' element={<AmcTab/>}/>
              <Route path='/maintaince' element={<MaintenanceTab/>}/>
              <Route path='/maintainceaproval' element={<Check/>}/>
              <Route path='/maintaincestatus' element={<MaintenanceTab/>}/>
              <Route path='/alloction' element={<AllocationTab/>}/>
              <Route path='/servicerequest' element={<ServiceRequestTab/>}/>
              <Route path='/vender' element={<VenderAdd/>}/>
              <Route path='/user' element={<UserAdd/>}/>
              <Route path='/logout' element={<MaintenanceTab/>}/>
              <Route path='/warrantydue' element={<Warrantydue/>}/>
              <Route path='/servicedue' element={<Servicedue/>}/>
              <Route path='/inceptiondue' element={<Inceptiondue/>}/>

        </Route> 
      </Route>
    </Routes> 
  );
}

export default App;
