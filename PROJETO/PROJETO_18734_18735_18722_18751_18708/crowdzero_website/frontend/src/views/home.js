import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/home.css';
import MapaCP from './mapa.js'
import logo from '../imagens/logo.png';
import { useHistory } from 'react-router';
import axios from 'axios';

function HomeComponent(){

  const[pins, setPins] = useState([])
  const[lvl, setLvl] = useState([])

  useEffect(()=>{
      axios.get('https://warm-hamlet-63390.herokuapp.com/pin/list')
      .then(res=>{
          var nivel = 0;
          setPins(res.data.data.length)
          for(var i = 0; i < res.data.data.length; i++){
            nivel = nivel + res.data.data[i].nivel
          }

          if(res.data.data.length === 0)
          {
            setLvl(0)
          }
          else{
            var coco = nivel/res.data.data.length
          setLvl(Math.round(coco * 100) / 100)
          }
      })
      .catch(err =>{
          console.log(err);
      })
  }, [])


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
                  <a class="nav-link active" onClick={()=> {history.push('/home')}}>Home</a>
                  <a class="nav-link" onClick={()=> {history.push('/alertas')}}>Alertas</a>
                  <a class="nav-link" onClick={()=> {history.push('/dashboards')}}>Dashboards</a>
                  <a class="nav-link" onClick={()=> {history.push('/ajuda')}}>Ajuda</a>
                </div>
              </div>
            </div>
          </nav>
          <div class="float-container">
          <div class="float-child">
              <div class="titulo">
                  Mapa em Tempo Real
              </div>
                <div class="mapa">
                    <MapaCP/>
                </div>
          </div>
          <div class="float-child">
              <div class="geral">
                <div class="cima">
                  <div class="concentracao">
                      {lvl}
                  </div>
                  <div class="texto">
                    Média de concentração atual
                  </div>
                </div>
                <div class="baixo">
                  <div class="reports">
                    {pins}
                  </div>
                  <div class="texto">
                    Número de reports ativos
                  </div>
                </div>
              </div>
          </div>
          </div>
      </div>
  )
}
    
  export default HomeComponent;