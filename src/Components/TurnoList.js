import React, { } from 'react';
import {Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import './Footer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const TurnoList = ({pacientes, setPaciente, paciente, setListUpdated, filter}) => {

    const handleDelete = idpacientes1 => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('https://apimedicina.herokuapp.com/api/' + idpacientes1, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre, apellido, dni, celular} = paciente
    const handleUpdate = idpacientes1 => {
        //validación de los datos
        if (nombre === '' || apellido === '' || dni <= 0 || celular <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)
        }
        fetch('https://apimedicina.herokuapp.com/api/' + idpacientes1, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de paciente
        setPaciente({
            nombre: '',
            apellido: '',
            dni: 0,
            celular: 0
        })

        setListUpdated(true)   
    }
    //----------------------------------------------------------------------------------------------//

    const handleID = idpacientes1 => {
        const requestInit = {
            method: 'GET'
        }
        fetch('https://apimedicina.herokuapp.com/api1/' + idpacientes1, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setListUpdated(true)
    }
    
    //---------------------------------------------------------------------------------------------//
    return(
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Dni</th>
                    <th>Celular</th>
                </tr>
            </thead>
            <tbody>
                {pacientes
                .filter(({apellido}) => apellido.toLowerCase().startsWith(filter.toLowerCase()))
                .map((paciente) => (
                <tr key={paciente.idpacientes1}>
                    <td>{paciente.idpacientes1}</td>
                    <td>{paciente.nombre}</td>
                    <td>{paciente.apellido}</td>
                    <td>{paciente.dni}</td>
                    <td>{paciente.celular}</td>
                    <td>
                        <div className='mb-3'>
                            <Button variant="outlined" startIcon={<DeleteIcon />} size="medium" onClick={() => handleDelete(paciente.idpacientes1)} className="btn btn-danger">Borrar</Button>
                        </div>
                        <div className='mb-3'>
                            <Button variant="contained" startIcon={<UpgradeIcon />} size="medium" onClick={() => handleUpdate(paciente.idpacientes1)} className="btn btn-dark">Actualizar</Button>
                        </div>
                        <div className='mb-3'>
                            <Button variant="contained" startIcon={<FavoriteIcon />} size="medium" onClick={() => handleID(paciente.idpacientes1)} className="btn btn-dark">Revisiones</Button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div> 
    )
}

export default TurnoList;
                        //<div>
                        //<Button onClick={() => handleID(paciente.idpacientes1)}>Open modal</Button>
                        //<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        //<Box sx={style}></Box>
                        //</Modal>
                        //</div>


