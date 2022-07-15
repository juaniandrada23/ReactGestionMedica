import React from 'react';
import {Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Revisiones = ({revisiones, filter, setListUpdated}) => {

    const handleDelete = numeroRevision => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api1/' + numeroRevision, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setListUpdated(true)
    }

    return(
    <div style={{padding: "25px"}}>
     <table className='table' style={{border: "1px solid black"}}>
        <thead>
            <tr>
                <th>ID Paciente</th>
                <th>NumeroRevision</th>
                <th>Descripcion</th>
                <th>Medicacion</th>
                <th>Dosis</th>
                <th>Fecha</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {revisiones.filter(({fecha}) => fecha.toString().startsWith(filter.toString())).map( revision => (
            <tr key ={revision.numeroRevision}>
                <th>{revision.paciente}</th>
                <th>{revision.numeroRevision}</th>
                <th>{revision.descripcion}</th>
                <th>{revision.medicacion}</th>
                <th>{revision.dosis}</th>
                <th>{revision.fecha}</th>
                <th>
                <div className='mb-3'>
                    <Button variant="outlined" startIcon={<DeleteIcon />} size="medium" onClick={() => handleDelete(revision.numeroRevision)} className="btn btn-danger">Borrar</Button>
                </div>
                </th>
            </tr>
            )
            )}       
        </tbody>
     </table>
    </div>
    );
}



export default Revisiones;