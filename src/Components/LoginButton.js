import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0()

    return (
        <div>
            <Button startIcon={<LoginIcon/>} variant="contained" size="large" onClick={() => loginWithRedirect()}>LOGIN</Button>
        </div>
    )
}

export default LoginButton