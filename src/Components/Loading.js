import React from 'react';
import './Footer.css';
import {Spinner} from 'reactstrap';

const Loading = () => {
  return (
    <div className='Cargar'>
        <Spinner color='primary'></Spinner>
    </div>
  )
}

export default Loading