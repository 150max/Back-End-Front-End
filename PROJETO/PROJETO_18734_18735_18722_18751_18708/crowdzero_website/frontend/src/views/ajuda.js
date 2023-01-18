import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../imagens/logo.png';
import { useHistory } from 'react-router';
import '../css/ajuda.css'

function Ajuda(){

    

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
                  <a class="nav-link" onClick={()=> {history.push('/alertas')}}>Alertas</a>
                  <a class="nav-link" onClick={()=> {history.push('/dashboards')}}>Dashboards</a>
                  <a class="nav-link active" onClick={()=> {history.push('/ajuda')}}>Ajuda</a>
                </div>
              </div>
            </div>
          </nav>
          <div className="APD">
              <div className="paragrafoajuda">
                <h1 className="Titajuda">O que é o Crowdzero?</h1>
                <div className="Txtajuda">O Crowdzero é um projeto que nasce no contexto da UC Projeto Integrado do curso de Engenharia Informática
                    da Escola Superior de Tecnologia e Gestão de Viseu. Com este projeto Pretende-se desenvolver uma solução / plataforma
                    social que permita a cada um dos utilizadores fazer uma avaliação em tempo real da densidade
                    populacional ao seu redor. Desta forma, e com o contributo de cada user
                    registado pretende-se ter uma visão “heatmap” das zonas mais frequentadas e menos frequentadas ao nosso redor  
                 </div>
              </div>
              <br></br><br></br>
              <div className="paragrafoajuda">
                <h1 className="Titajuda">O que é uma Zona Super Movimentada?</h1>
                <div className="Txtajuda">Uma Zona Super Movimentada é uma zona que teve ou tem um report de 
                Nivel 3, o mais populado, e com uma pontuação superior a 5. Estes valores foram selecionados para
                serem os valores que determinam uma Zona Super Populada porque, devido à (por enquanto) reduzida utilização da Aplicação,
                um report com uma pontuação superior a 5 é um report que deve ser considerado como uma Zona Super Movimentada, visto que é
                provável que a ocupação do espaço onde se encontra o report seja excessiva no contexto de pandemia. <br></br>
                Nota: Este valor pode e deve ser alterado em sintonia com a quantidade de utilizadores assíduos da Aplicação.
                </div>
              </div>
              <br></br><br></br>
              <div className="paragrafoajuda">
                <h1 className="Titajuda">O que é uma zona que necessita de Desinfeção Urgente?</h1>
                <div className="Txtajuda">Uma zona que necessita de Desinfeção Urgente é uma zona que tem um ou mais reports ativos
                de Nivel 3, o mais populado, há mais de 4 horas. Isto dá-se uma vez que os reports tornam-se inativos depois de 30 minutos
                sem nenhuma interação por parte dos utilizadores (upvote). Se o report se mantém ativo por mais de 4 horas, significa 
                que o local está extremamente populado há mais de 4 horas, conclusivamente necessita de desinfeção urgente.
                </div>
              </div>
              <br></br><br></br>
                <div className="paragrafoajuda">
                <h1 className="TitajudaC">Contactos:</h1>
                <div className="Txtajuda">
                    <li>Email: crowdzero@mail.com</li>
                    <li>Telefone: 918118142</li>
                    <li>Pombo Correio: Geraldo</li>
                </div>
              </div>
          </div>
    </div>
  )
}
    
export default Ajuda;