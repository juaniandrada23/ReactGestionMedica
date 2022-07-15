import React from "react";
import {TextField} from '@mui/material';

const RevisionFilter = ({setFilter}) => {
    return(
        <TextField label='Ingrese la fecha a filtrar de la revisión' variant="filled" onChange={(e) => setFilter(e.target.value)}/>
    );
};

export default RevisionFilter;