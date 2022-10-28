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
import UserAdd from './components/User/UserAdd';
import Warrantydue from './components/DashboardItems/Warrantydue';
import Servicedue from './components/DashboardItems/Servicedue';
import Inceptiondue from './components/DashboardItems/Inceptiondue';
import Amcdue from './components/DashboardItems/Amcdue';
import Certificatedue from './components/DashboardItems/Certificatedue';
import Insurancedue from './components/DashboardItems/Insurancedue';
import Transferdue from './components/DashboardItems/Transferdue';
import Auditdue from './components/DashboardItems/Auditdue';
import Eol from './components/DashboardItems/Eol';
import Notinuse from './components/DashboardItems/Notinuse';
import Damage from './components/DashboardItems/Damage';
import Transfer from './components/DashboardItems/Transfer';
import Inservice from './components/DashboardItems/Inservice';
import Sale from './components/DashboardItems/Sale';
import Scrap from './components/DashboardItems/Scrap';

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
          <Route path='/amcdue' element={<Amcdue/>}/>
          <Route path='/certificatedue' element={<Certificatedue/>}/>
          <Route path='/insurancedue' element={<Insurancedue/>}/>
          <Route path='/transferdue' element={<Transferdue/>}/>
          <Route path='/auditdue' element={<Auditdue/>}/>
          <Route path='/eol' element={<Eol/>}/>
          <Route path='/notinuse' element={<Notinuse/>}/>
          <Route path='/damage' element={<Damage/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
          <Route path='/inservice' element={<Inservice/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/scrap' element={<Scrap/>}/>
        </Route> 
      </Route>
    </Routes> 
  );
}

export default App;
