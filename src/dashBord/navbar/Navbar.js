import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar" style={{
            height: '10vh',width:'98%'
        }}>
            <div className="nav_icon"> 
            </div>
            <div className="navbar__left">
                
                <a className="active_link" style={{marginLeft:'500px',marginTop:'20px'}} href="#">Asset Managment</a>
            </div>
            <div className="navbar__left">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;