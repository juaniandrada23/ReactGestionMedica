import React from 'react';
import {Button} from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Footer.css'


const Form = ({paciente, setPaciente}) => {

    const handleChange = e => {
        setPaciente({
            ...paciente,
            [e.target.name]: e.target.value
        })
    }

    let{nombre, apellido, dni, celular} = paciente

    const handleSubmit = () => {
        
        //validación de los datos
        if (nombre === '' || apellido === '' || dni <= 0 || celular <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)
        }
        fetch('https://apimedicina.herokuapp.com/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))



    }

    return ( 
        <Box sx={{ width: 600, maxWidth: '100%',}}>
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <TextField fullWidth label="Nombre" value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control" />
            </div>
            <div className="mb-2">
                <TextField fullWidth label="Apellido" value={apellido} name="apellido" onChange={handleChange} type="text" id="apellido" className="form-control"/>
            </div>
            <div className="mb-2">
                <TextField fullWidth label="DNI" value={dni} name="dni" onChange={handleChange} type="number" id="dni" className="form-control"/>
            </div>
            <div className="mb-2">
                <TextField fullWidth label="Celular" value={celular} name="celular" onChange={handleChange} type="number" id="celular" className="form-control"/>
            </div>
            <Button variant="contained" size="large" type="submit" className="btn btn-primary">Enviar</Button>
        </form>
        </Box>
    );
}
 
export default Form;