import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Button} from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const LogoutButton = () => {

    const {logout} = useAuth0()

    return (
        <Button startIcon={<ExitToAppIcon/>} variant="contained" size="large" onClick={() => logout()}>LOGOUT</Button>
    )
}

export default LogoutButton;