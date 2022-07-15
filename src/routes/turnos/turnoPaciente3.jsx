import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import RevisionesId from '../../Components/RevisionesId'
import { useAuth0 } from '@auth0/auth0-react';
import FooterLogin from '../../Components/FooterLogin';


function TurnosID3() {
    const {isAuthenticated} = useAuth0()

    const [listUpdated, setListUpdated] = useState(false)

    const [revs, setRevs] = useState([])


    useEffect(() => {
        
        const getServisios = () => {
            fetch(`https://apimedicina.herokuapp.com/api1/54`) 
            .then(res => res.json())
            .then(res => setRevs(res))
        }
        getServisios()
        setListUpdated(false)
    }, [listUpdated])

    return (
        <Fragment>
            <Navbar brand='Gestion Medica App'></Navbar>
            { isAuthenticated ?
                <div>
                    <h1 style={{textAlign: 'center'}}>REVISIONES DEL PACIENTE</h1>
                    <RevisionesId revs={revs}></RevisionesId>
                </div>
            : <h2 style={{textAlign: 'center'}}>Ingrese a la aplicacion como usuario para acceder </h2>}        
            { isAuthenticated ? <Footer/> : <FooterLogin></FooterLogin>}
        </Fragment>
    )
}

export default TurnosID3;