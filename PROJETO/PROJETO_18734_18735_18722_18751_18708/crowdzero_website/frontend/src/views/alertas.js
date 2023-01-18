import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../imagens/logo.png';
import { useHistory } from 'react-router';
import RenderSP from './renderSP'
import '../css/alertas.css'; 
import RenderDU from './renderDU'

function Alertas(){

    

  let history = useHistory();
  
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
            <div class="container-fluid">
              <img src={logo} width="60"></img>
              <a class="navbar-brand" onClick={()=> {history.push('/homepage')}}>Crowdzero </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" onClick={()=> {history.push('/home')}}>Home</a>
                  <a class="nav-link active" onClick={()=> {history.push('/alertas')}}>Alertas</a>
                  <a class="nav-link" onClick={()=> {history.push('/dashboards')}}>Dashboards</a>
                  <a class="nav-link" onClick={()=> {history.push('/ajuda')}}>Ajuda</a>
                </div>
              </div>
            </div>
          </nav>

        <div className="ALERTAS">
          <div class="float-container">
            <div class="float-child">
              <h2 id="tsp">Alertas de Zona Super Movimentada</h2>
              <div className="geralL">
                <RenderSP/>
              </div>
            </div>
            <div class="float-child">
              <h2 id="tsp">Alertas de Desinfeção Urgente</h2>
              <div className="geralR">
                <RenderDU/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
    
  export default Alertas;