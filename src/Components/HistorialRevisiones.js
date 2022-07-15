import React from 'react';

const HistorialRevisiones = ({revisiones}) => {
    return(
     <table className='table' style={{border: '1px'}}>
        <thead>
            <tr>
                <th>ID Paciente</th>
                <th>NumeroRevision</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {revisiones.map( revision => (
            <tr key ={revision.numeroRevision}>
                <th>{revision.paciente}</th>
                <th>{revision.numeroRevision}</th>
                <th>{revision.fecha}</th>
            </tr>
            )
            )}       
        </tbody>
     </table>
    );
}



export default HistorialRevisiones;