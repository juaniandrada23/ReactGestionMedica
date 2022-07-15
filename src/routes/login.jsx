import React from 'react'
import LoginButton from '../Components/LoginButton';
import Profile from '../Components/Profile'
import LogoutButton from '../Components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react';
import './login.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FooterLogin from '../Components/FooterLogin';
import {Button} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const Login = () => {
    const {isAuthenticated} = useAuth0()

    return (
        <div className='log'>
            <Navbar brand='Gestion Medica App'/>
            <h1 style={{textAlign: 'center'}}> LOGIN PRUEBA </h1>
            { isAuthenticated ? <section>
                                    <div className='row'>
                                        <div className='col-6 icon'>
                                        <Button startIcon={<HomeIcon/>} variant="contained" key="one" href='./descripcion'>App</Button>
                                        </div>
                                        <div className='col-6'>
                                            <h2 style={{textAlign: 'center'}}><LogoutButton/></h2>
                                        </div>
                                    </div>                                   
                                </section>                                  
                : <h1 style={{textAlign: 'center'}}><LoginButton/></h1>

            }
            <Profile/>
            { isAuthenticated ? <Footer/> : <FooterLogin></FooterLogin>}
        </div>
    );
};

export default Login