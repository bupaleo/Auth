import React from 'react';
import Login from '../Components/Login'
import Sign from '../Components/Sign'
import Code from '../Components/Code'
import Email from '../Components/Email'

import module from './Authorization.module.scss'
function Authorization(props) {
    return (
        <div>
                <Login/>
                {/* <Sign/>
                <Code/>
                <Email/> */}
        </div>
    );
}

export default Authorization;