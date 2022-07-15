import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Revisiones from '../Components/Revisiones'
import RevisionFilter from '../Components/RevisionFilter'
import Footer from '../Components/Footer'
import FormRevision from '../Components/FormRevision'
import './login.css'
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from '@mui/material'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FooterLogin from '../Components/FooterLogin';

function Turnos() {
    const {isAuthenticated} = useAuth0()
//import {Button} from '@mui/material'
    const [revision, setRevision] = useState({
        descripcion: '',
        medicacion: '',
        dosis: '',
        fecha: '',
        paciente: 0,
      })

    const [listUpdated, setListUpdated] = useState(false)

    const [revisiones, setRevisiones] = useState([])

    const [filter, setFilter] = useState("")

    useEffect(() => {
        const getServisios = () => {
            fetch('https://apimedicina.herokuapp.com/api1')
            .then(res => res.json())
            .then(res => setRevisiones(res))
        }
        getServisios()
        setListUpdated(false)
    }, [listUpdated])

    return (
        <Fragment>
            <Navbar brand='Gestion Medica App'></Navbar>
            { isAuthenticated ?
            <div className='row'>
                <div className='col-7'>
                    <div style={{textAlign: 'center', margin:"auto",display:"flex",flexDirection:"column",width:"40vw",paddingTop:"1rem",paddingBottom:"1rem"}}>
                        <RevisionFilter setFilter={setFilter}/>
                    </div>
                    <h2 style={{textAlign: 'center'}}>Lista de Revisiones</h2>
                    <Revisiones revisiones={revisiones} filter={filter} setListUpdated={setListUpdated} revision={setRevision}/>
                </div>
                <div className='col-5 caja'>
                    <h2 style={{textAlign: 'center'}}>Generar nueva revision</h2>
                    <FormRevision revision={revision} setRevision={setRevision}/>
                </div>
            </div>
            : <h1 style={{textAlign: 'center'}}>Ingrese a la aplicacion</h1>}
            { isAuthenticated ?
            <div className='row'>
                <div className='col-4 fila'>
                    <Button startIcon={<MedicalServicesIcon/>} variant="contained" key="one" href='./turnos/turnoPaciente1'>Revisiones del paciente 1</Button>
                </div>
                <div className='col-4 fila'>
                    <Button startIcon={<MedicalServicesIcon/>} variant="contained" key="one" href='./turnos/turnoPaciente2'>Revisiones del paciente 2</Button>
                </div>
                <div className='col-4 fila'>
                    <Button startIcon={<MedicalServicesIcon/>} variant="contained" key="one" href='./turnos/turnoPaciente3'>Revisiones del paciente 3</Button>
                </div>
            </div>
            : <h1 style={{textAlign: 'center'}}>como usuario para acceder </h1>}

        { isAuthenticated ? <Footer/> : <FooterLogin></FooterLogin>}
        </Fragment>
    )
}

export default Turnos;