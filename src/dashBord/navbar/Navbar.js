import { Grid, Typography } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar" style={{
            height: '6vh',width:'98.2%'
        }}>

           <Grid container>
            <Grid className="navbar__left" item xs={12} sm={12} md={12} lg={12} xl={12}
                style={{alignSelf:'center',textAlign:'center'}}
            >
            <Typography variant="h5" gutterBottom
             style={{
                color: 'aqua',
            }} > 
            
                Asset Managment
            </Typography>
               
            </Grid>
           </Grid>
            {/* <div className="navbar__left">
                <a className="active_link" style={{marginLeft:'500px',marginTop:'20px'}} href="#">Asset Managment</a>
            </div> */}
            {/* <div className="navbar__left">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                </a> */}
            {/* </div> */}
        </nav>
    )
}

export default Navbar;