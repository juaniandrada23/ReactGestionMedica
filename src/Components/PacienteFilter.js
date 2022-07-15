import React from "react";
import {TextField} from '@mui/material';

const PacienteFilter = ({setFilter}) => {
    return(
        <TextField label='Ingrese el apellido del paciente' variant="filled" onChange={(e) => setFilter(e.target.value)}/>
    );
};

export default PacienteFilter;