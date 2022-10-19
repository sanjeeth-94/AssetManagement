import Navbar from "./navbar/Navbar"
import Sidebar from "./sidebar/Sidebar"
import { Outlet } from "react-router-dom"


const DashBoard = () => {
 
  return (
    <div className='dashboard'>
      <Navbar className='navbar'/>   
        <div style={{
          display: 'inline-flex',
          width: '192vh'
        
        }}>
      <Sidebar className='sidebar'/> 
        <div style={{height:'100vh', width:'179.5vh',overflow:'auto'}}>
        <Outlet/>
        </div>  
      </div>  
    </div>
  )
}

export default DashBoard