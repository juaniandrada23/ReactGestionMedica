import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Button} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

const Contacto = () => {

    const theme = createTheme({
        palette: {
          secondary: {
            main: '#0288d1',
          },
        },
      });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gestionMedicaApp', 'template_dnrwl2e', form.current, 'dGoFdoqto78odvrQ-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <form className='form1' ref={form} onSubmit={sendEmail}  theme={theme}> <ThemeProvider theme={theme}>
            <div className='container1'>
                <div>
                    <h4>Para atención al cliente, contáctenos:</h4>
                </div>
                <div className='row cliente'>
                    <div className='col-6 row'>
                        <TextField type="text" id="nombre" name='nombre' label="Nombre" variant="filled" color="secondary" focused />
                    </div> 
                    <div className='col-6 row ape'>
                        <TextField type="text" id="apellido" name='apellido' label="Apellido" variant="filled" color="secondary" focused/>
                    </div>
                </div>

                <div className='row datos'>
                    <div className='col-6 row'>
                        <TextField id="email" name='email' type="email" label="Email" variant="filled" color="secondary" focused/>
                    </div>
                    <div className='col-6 row esp'>
                    <FormControl color="secondary" focused fullWidth >
                        <InputLabel id="especialidad" >Especialidad</InputLabel>
                        <Select labelId="especialidad" id="especialidad" name="especialidad" label="Especialidad" > 
                            <MenuItem value={'Clinica Medica'}>Clinica Medica</MenuItem>
                            <MenuItem value={'Oftalmologia'}>Oftalmologia</MenuItem>
                            <MenuItem value={'Oncologia'}>Oncologia</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                </div>

                <div className='row mensajes'>
                    <div className='col-6 row'>
                    <TextField id="mensaje" label="Mensaje" name="mensaje" multiline rows={4} color="secondary" focused />
                    </div>
                    <div className='col-6 row msj'>
                    <FormControl color="secondary" focused fullWidth >
                        <InputLabel  id="requiero" >Requisito</InputLabel>
                        <Select  labelId="requiero" id="requiero" name="requiero" label="Requisito" > 
                            <MenuItem value={'Revisión'}>Revisión</MenuItem>
                            <MenuItem value={'Consulta y revisión'}>Consulta y revisión</MenuItem>
                            <MenuItem value={'Reprogramar revisión'}>Reprogramar revisión</MenuItem>
                        </Select>
                    </FormControl>
                    <div className='botonSend'>
                        <Button startIcon={<EmailIcon />} value="Send" type="submit" variant="contained">Enviar</Button>
                    </div>
                    </div>
                </div>
            </div>
            </ThemeProvider>
        </form>     
    );
};

export default Contacto;
