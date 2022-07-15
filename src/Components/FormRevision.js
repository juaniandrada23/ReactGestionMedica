import React from 'react';
import {Button} from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Footer.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FormRevision = ({revision, setRevision}) => {

    const handleChange = e => {
        setRevision({
            ...revision,
            [e.target.name]: e.target.value
        })
    }

    let{descripcion, medicacion ,fecha,paciente, dosis} = revision

    const handleSubmit = () => {
        
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(revision)
        }
        fetch('http://localhost:9000/api1/', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de paciente
        setRevision({
            descripcion: '',
            medicacion: '',
            paciente: 0,
            fecha: '',
            dosis: '',
        })
    }

    return ( 
        <Box sx={{ width: 600, maxWidth: '100%',}}>
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <TextField fullWidth label="Descripcion" value={descripcion} name="descripcion" onChange={handleChange} type="text" id="descripcion" className="form-control" />
            </div>
            <div className="row mb-2">
                <div className='col-6'>
                    <FormControl fullWidth>
                        <InputLabel id="medicacion">Medicacion</InputLabel>
                        <Select labelId="medicacion" id="medicacion" value={medicacion} name="medicacion" label="Medicacion" onChange={handleChange}> 
                            <MenuItem value={'Alprazolam'}>Alprazolam</MenuItem>
                            <MenuItem value={'Clonazepam'}>Clonazepam</MenuItem>
                            <MenuItem value={'Paracetamol'}>Paracetamol</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='col-6'>
                <FormControl fullWidth>
                        <InputLabel id="dosis">Dosis</InputLabel>
                        <Select labelId="dosis" id="dosis" value={dosis} name="dosis" label="Dosis" onChange={handleChange}> 
                            <MenuItem value={'50gr'}>50 gramos</MenuItem>
                            <MenuItem value={'100gr'}>100 gramos</MenuItem>
                            <MenuItem value={'150gr'}>150 gramos</MenuItem>
                        </Select>
                </FormControl>
                </div>
            </div>
            <div className="mb-2">
                <input type="date" name="fecha" value={fecha} onChange={handleChange}></input>
            </div>
            <div className="mb-2">
                <TextField fullWidth label="Paciente ID" value={paciente} name="paciente" onChange={handleChange} type="number" id="paciente" className="form-control"/>
            </div>
            <Button endIcon={<KeyboardArrowUpIcon/>} variant="contained" size="large" type="submit" className="btn btn-primary">Enviar</Button>
        </form>
        </Box>
    );
}
 
export default FormRevision;