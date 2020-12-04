import React from 'react';
import './LoginHeader.css';
import {Link} from 'react-router-dom';

function LoginHeader() {
    return(
        <div className="header">
            <Link className="link" to="/">
                <img src="https://i.ibb.co/WzybLQK/del.png" alt="Facebook Logo"
                    className="header_logo" />
            </Link>
            
            <Link className="/register" to="/register">
                <button className="header_button">Create New Account</button>
            </Link>
        </div>
    )
}

export default LoginHeader