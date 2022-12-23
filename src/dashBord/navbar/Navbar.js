import { Grid, Typography } from "@mui/material";
import "./Navbar.css";
import img from "./rdl.png"

const Navbar = () => {
    return (
        <nav className="navbar" style={{
            height: '6vh',width:'98.2%'
        }}>
            <Grid container>
                <Grid className="navbar__left" item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h5" gutterBottom
                    style={{
                        marginLeft:'50%',
                        alignItems:'left',
                        alignContent:'',
                        color: 'aqua',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <img src={img} style={{alignItems:'left',marginLeft:'62%'}}height="40px" width="40px"/>
                        Asset Managment
                    </Typography>
                </Grid>
           </Grid>    
        </nav>
    )
}

export default Navbar;