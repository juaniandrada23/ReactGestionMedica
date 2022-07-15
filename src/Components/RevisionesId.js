import React from 'react'

const RevisionesId = ({revs}) => {
    //FUNCIONES DEL MODEL PARA BUSCAR CADA REVISION POR ID-----------------------------------------//
  return (
    <div>
    <div style={{padding: "175px"}}>
     <table className='table' style={{border: "3px solid black"}}>
        <thead>
            <tr>
                <th>ID Paciente</th>
                <th>NumeroRevision</th>
                <th>Descripcion</th>
                <th>Medicacion</th>
                <th>Dosis</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {revs.map( revision => (
            <tr key ={revision.paciente}>
                <th>{revision.paciente}</th>
                <th>{revision.numeroRevision}</th>
                <th>{revision.descripcion}</th>
                <th>{revision.medicacion}</th>
                <th>{revision.dosis}</th>
                <th>{revision.fecha}</th>
            </tr>
            )
            )}       
        </tbody>
     </table>
    </div>                     
    </div>
  )
}

export default RevisionesId

                                //<Button variant="outlined" onClick={() => {handleID(paciente.idpacientes1)}}>Revisiones</Button>
                                //<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                //<Box sx={style}>
                                //</Box>
                                //</Modal>