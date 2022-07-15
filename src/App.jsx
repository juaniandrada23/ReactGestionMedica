import React, {Fragment, useState, useEffect} from 'react'; 
import Navbar from './Components/Navbar';
import TurnoList from './Components/TurnoList';
import Form from './Components/Form';
import PacienteFilter from './Components/PacienteFilter';
import LogoutButton from './Components/LogoutButton';
import HistorialRevisiones from './Components/HistorialRevisiones';
import Footer from './Components/Footer';
import '../src/routes/login.css'
import { useAuth0 } from '@auth0/auth0-react';
import FooterLogin from './Components/FooterLogin';



function App() {
  const {isAuthenticated} = useAuth0()


  const [paciente, setPaciente] = useState({
    nombre: '',
    apellido: '',
    dni: 0,
    celular: 0
  })

  const [filter, setFilter] = useState("")

  const [pacientes, setPacientes] = useState([]) 

  const [revisiones, setRevisiones] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getPacientes = () => {
      fetch('https://apimedicina.herokuapp.com/api')
      .then(res => res.json())
      .then(res => setPacientes(res))
    }
    getPacientes()
    setListUpdated(false)
  },[listUpdated])

  useEffect(() => {
    const getRevisiones = () => {
      fetch('https://apimedicina.herokuapp.com/api1')
      .then(res => res.json())
      .then(res => setRevisiones(res))
    }
    getRevisiones()
  },[])
  
  return (
    <Fragment>
      <Navbar brand='Gestion Medica App'/> 
      { isAuthenticated ?

      <div className='container'>
          <div className='row'>
              <div className='col-7'>
              <div style={{textAlign: 'center', margin:"auto",display:"flex",flexDirection:"column",width:"40vw",paddingTop:"1rem",paddingBottom:"1rem"}}>
                  <PacienteFilter setFilter={setFilter}/>
              </div>
                <h2 style={{textAlign: 'center'}}>Lista de pacientes</h2>
                <TurnoList paciente={paciente} setPaciente={setPaciente} setListUpdated={setListUpdated} pacientes={pacientes} filter={filter}/>
                <h3 style={{textAlign: 'center'}}>Historial general de revisiones</h3>
                <HistorialRevisiones revisiones={revisiones}/>
              </div>
              <div className='col-5 caja'>
                <h2 style={{textAlign: 'center'}}>Ingresar nuevo paciente</h2>
                <Form paciente={paciente} setPaciente={setPaciente}/>              
              </div>
          </div>
          <div className='row'>
              <div className='col-6'>

              </div>
              <div className='col-6'>
                  <h3 style={{textAlign: 'center'}}>
                  <LogoutButton/>
                  </h3>
              </div>
          </div>
      </div>
      : <h1 style={{textAlign: 'center'}}>Ingrese a la aplicacion como usuario para acceder </h1>}
        { isAuthenticated ? <Footer/> : <FooterLogin></FooterLogin>}
    </Fragment>
  );
}

export default App;
