import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {auth} from './firebase.js';
import { useHistory } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push("/");
        })
        .catch((e) =>{
            alert(e.message)
        })
    }

    return(
        <div className="login">
            <div className="login_container">
                <h3>Log In To Facebook</h3>
                <form>
                    <center>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
                    </center>
                    <center>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button type="submit" onClick={login} className="login_login"> Log In</button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <br />
                    </center>
                    <center>
                        <Link to="/register">
                            <button className="login_createNewAccount">Create New Account</button>
                        </Link>
                    </center>
                </form>                     
            </div>
        </div>
    )
}

export default Login