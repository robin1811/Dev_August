import React from 'react'
import "./header.css";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { auth } from '../firebase/fbconfig';



const handleLogout = (logout) =>{
    auth.signOut().then(() =>{
        logout();
    })    
}


const Header = (props) => {
    let {auth} = props;
    return (
        <div className="header">
            <div className="header-logo">
            <Link to="/"><img src="https://www.pepcoding.com/images/logo.png" alt=""/></Link>
            </div>
            <div className="header-links">
                {auth ? 
                <ul>
                <li><Link to="/templates">Resume Templates</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/" onClick={()=>{handleLogout(props.logout)}}>Logout</Link></li>
            </ul> :
            <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/register"><button class="btn">Register</button></Link></li>
            <li><Link to="/signin">Sign In</Link></li>
        </ul>
            }
            </div>
        </div>
      );
}

const mapStateToProps = (state) =>{
    return {
        auth : state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        logout : () =>{ dispatch( {type:"LOGOUT"}  )}
    }
}

 
export default connect(mapStateToProps , mapDispatchToProps)(Header);