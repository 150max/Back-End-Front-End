import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../imagens/logo.png';
import download from '../imagens/download.png';
import '../App.css';
import React, { useEffect, useState } from  'react'
import {Line} from 'react-chartjs-2'
import MapaCP from './mapa';
import { useHistory } from 'react-router';


const Dankmemes = () => {

  let history = useHistory();

  return (
    <div>
    <div className="App" style={{backgroundColor:'#163443'}}>
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
  <div class="container-fluid">
    <img src={logo} width="60"></img>
    <a class="navbar-brand" href="#">Crowdzero </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class = "login_container">
          <button type="button" class="btn btn-dark" onClick={()=>history.push('/login')}>Login</button>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
    <div class= "float-container">
      <div class= "float-child">
        <div class= "texto">
        <div id= "titulo1"> Quem Somos?</div>
          <div id="descricao1">Somos um grupo de estudantes do segundo ano de Engenharia Informática do ESTGV, o grupo é constituído por 5 elementos: André Marques, Alexandre Lourenço, David Albuquerque, Hélder Lourenço, João Crepo</div>
        </div>
        <div class= "texto">
        <div id = "titulo2">Qual é o Objetivo?</div>
        <div id="descricao2">O objetivo é sensibilizar as pessoas para o problema de saúde pública relativo à covid19, este site e a aplicação ajudam a monotorizar espaços e a quantidade de pessoas que circulam nele </div>
        <a href="https://cdn.discordapp.com/attachments/656598463638798357/864537388695683112/CROWDZERO.apk" > <div id= "apk">Download da Aplicação &ensp;<img className="download" src={download} width="20px" height="20px" /></div></a>
        </div>
      </div>
      <div class= "float-child">
    <div class="mapahp">
        <MapaCP/>
    </div>
      </div>
    </div>
    </div>
  );
  }
  export default Dankmemes;