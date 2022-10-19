import { TurnedIn } from '@mui/icons-material'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes =()=>{
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
    //  let auth={'token': false}
    return(
        userDetails?.access_token? <Outlet/>: <Navigate to ="/login"/>
                
    )
}
export default PrivateRoutes
