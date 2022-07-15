import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Acerca de</h6>
            <p className="text-justify">En 1947, un pequeño grupo de profesionales de la salud, constituido por los Dres. Amuchástegui, Brusco, Caeiro, Chattás, Degoy, Nuñez, Remorino, Stiefel y Villafañe unieron sus metas, guiados por su disconformidad por la práctica individual de la medicina en ese entonces y de las perspectivas que ofrecía para su desarrollo futuro. Dicha insatisfacción, junto a los conocimientos teóricos vividos por algunos de estos médicos en organizaciones más evolucionadas (principalmente en los países anglosajones) sumado a una circunstancia socio-política que los alejaba de la cátedra y del hospital, determinaron su asociación para lograr el objetivo que hoy se denomina Hospital Privado.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>ORGANIZACIÓN</h6>
            <ul className="footer-links">
              <li><a href="/#">Ambulatorio</a></li>
              <li><a href="/#">Internado</a></li>
              <li><a href="/#">Quirófano</a></li>
              <li><a href="/#">Imágenes</a></li>
              <li><a href="/#">Laboratorio</a></li>
              <li><a href="/#">Gestión Médica e Informática en Salud</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Enlaces Rápidos</h6>
            <ul className="footer-links">
              <li><a href="/#">Historia</a></li>
              <li><a href="/#">Contáctenos</a></li>
              <li><a href="/#">Contribución</a></li>
              <li><a href="/#">Politica de privacidad</a></li>
              <li><a href="/#">Infraestructura</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by-<a href="/#">JuanAndrada</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="/#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="/#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="/#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="/#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}

export default Footer;
