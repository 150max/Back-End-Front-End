import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import "../css/login.css"
import { useHistory } from 'react-router';
import logo from '../imagens/logo.png';
import { useEffect } from 'react';

function Login(){

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const history = useHistory();
  useEffect(()=>{

  })

  function verifica(){
    axios.get('https://warm-hamlet-63390.herokuapp.com/utilizador/admin')
    .then((res)=>{
        var entrou = 0;
        const txt = JSON.stringify(res.data.data);
        const utilizadores = JSON.parse(txt)
        for(var i = 0; i < utilizadores.length; i++)
        {
            if(utilizadores[i].email == email){
                if(utilizadores[i].pass == password)
                {
                  entrou = 2;
                  if(utilizadores[i].admin === 1)
                  {
                    history.push('/home')
                    entrou = 1;
                  }
                }
            }
        }
        if(entrou === 0)
        {
            alert('Credenciais Inválidas')
        }
        if(entrou === 2)
        {
          alert('Sem privilégios de administrador!')
        }
    })
  }

return (

  <div class="container">
      <div class="card-body">
      <img src={logo} className="logo"></img>
            <div class="form-group justify-content-center">
              <label>Email</label>
              <input class="form-control align-center" type="text" id="example-text-input" placeholder="Email"
              onChange={
                  (e)=>setEmail(e.target.value)
              }
              />
              <label>Password</label>
              <input className="form-control" type="password" id="example-text-input" placeholder="*******"
              onChange={
                (e)=>setPassword(e.target.value)
              }
              />
            </div>
            <button className="btn" onClick={verifica}><b>Login</b></button>
      </div>
  </div>

);}

export default Login