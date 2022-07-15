import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Descripcion from './routes/descripcion';
import Turnos from './routes/turnos';
import Login from './routes/login';
import TurnosID from './routes/turnos/turnoPaciente1';
import TurnosID2 from './routes/turnos/turnoPaciente2';
import TurnosID3 from './routes/turnos/turnoPaciente3';
import {Auth0Provider} from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='descripcion' element={<Descripcion/>}></Route>
                <Route path='descripcion/App' element={<App/>}></Route>
                <Route path='descripcion/turnos' element={<Turnos/>}></Route>
                <Route path='descripcion/turnos/turnoPaciente1' element={<TurnosID/>}></Route>
                <Route path='descripcion/turnos/turnoPaciente2' element={<TurnosID2/>}></Route>
                <Route path='descripcion/turnos/turnoPaciente3' element={<TurnosID3/>}></Route>
            </Routes>
        </Auth0Provider>
    </BrowserRouter>
);

reportWebVitals();
