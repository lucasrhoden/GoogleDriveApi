import React, {useState, useEffect } from 'react';
import axios from "axios";

import "./Login.css";

function Login() {

    const [href, sethref] = useState("");

    useEffect(() => {
        axios.get(
          'http://localhost:9000/token',
        ).then(res => {
            sethref(res.data)
        }).catch(err => console.log(err));
    },[]);
    
    return (
        <div className="login">
            <div>
                <h3>Welcome to Google Docs App</h3>
                <a className="btn" href={href}>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img 
                                className="google-icon" 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google-icon"/>
                        </div>
                        <p className="btn-text"><b>Sign in with google</b></p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Login
