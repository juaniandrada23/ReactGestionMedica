import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Components/Footer.css'
import Box from '@mui/material/Box';
import { useAuth0 } from '@auth0/auth0-react';
import FooterLogin from '../Components/FooterLogin';
import Contacto from './contacto';
import Imagenes from '../Components/Imagenes';

const Descripcion = () => {
  const {isAuthenticated} = useAuth0()

    return (
        <div>
            <Navbar brand='Gestion Medica App'/>
            { isAuthenticated ?
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" height="190" image={require("./imagenes/hospital1.jpg")}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Instalaciones
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Al ser parte de una red asistencial de salud referente en Argentina, estamos abocados a ofrecer al mundo una medicina de excelencia. Por eso, contamos con 2 hospitales y 8 centros de atención ambulatoria. A su vez, replicamos el modelo Hospital Privado en entidades públicas y gerenciamos otros 3 hospitales.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Conocé más</Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className='col-4'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" height="190" image={require("./imagenes/servicio1.jpg")} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Servicios
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            La conducción del Hospital Privado está a cargo del Honorable Directorio y de un Director de quien dependen las áreas Médica, Administrativa y Comercial. Actualmente, rige un sistema de organización médica departamental, habiéndose dividido en los siguientes departamentos: Departamento Ambulatorio, Departamento Internado y Departamento Quirófano.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Conocé más</Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className='col-4'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" height="190" image={require("./imagenes/noticias1.jpg")} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Noticias
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            El primer implante percutáneo de válvula tricúspide se realizó en nuestra institución esta novedosa intervención que fue la primera de la provincia y también una de las primeras del pais.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Leer más</Button>
                        </CardActions>
                    </Card>
                    </div>
                </div>
                <div className='row videocontacto'>
                    <div className='col-6 video'>
                        <iframe width="600" height="415" src="https://www.youtube.com/embed/hXn4vXk3yO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='col-6 formulario' style={{textAlign: 'center'}}>
                      <Contacto></Contacto>
                    </div>
                </div>
                <div className='row'>
                    <div className='bot' >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1,},}}>
                    </Box>
                    </div>
                </div>
                <div className='row imagenes'>
                    <Imagenes></Imagenes>
                </div>
            </div>
: <h1 style={{textAlign: 'center'}}>Ingrese a la aplicacion como usuario para acceder </h1>}
            { isAuthenticated ? <Footer/> : <FooterLogin></FooterLogin>}
        </div>

    )
}

export default Descripcion