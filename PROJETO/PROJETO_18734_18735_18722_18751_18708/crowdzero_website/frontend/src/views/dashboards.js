import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../imagens/logo.png';
import { useHistory } from 'react-router';
import '../css/dashboards.css'
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import moment from 'moment'
import axios from 'axios';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

registerLocale('pt', pt)

var pinsdata = [];

var maisup = [];

function Dashboards(){

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [porra, setPorra] = useState([]);

  var data1 = startDate
  var data2 = startDate2

  
  data1 = moment(data1).format("YYYY-MM-DD")
  data2 = moment(data2).format("YYYY-MM-DD")

  function getDates (startDate, endDate) {

    const dates = []

    let currentDate = startDate

    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      result = moment(result).format("YYYY-MM-DD");
      return result;
    }

    while (moment(currentDate).isSameOrBefore(endDate)) {
      dates.push(currentDate)
      currentDate = addDays(currentDate, 1)
    }
    return dates
  }

  useEffect(()=>{
    axios.get('https://warm-hamlet-63390.herokuapp.com/pins_guardados/todospg')
    .then(res=>{

      maisup = res.data.data[0]

      var arraydatas = getDates(data1, data2) 
      pinsdata = [];
      for(var i = 0; i < res.data.data.length; i++)
      {
        if(arraydatas.includes(res.data.data[i].data_pg))
        {
          pinsdata.push(res.data.data[i])
          if(maisup.upvote_pg < res.data.data[i].upvote_pg && res.data.data[i].nivel_pg === 3)
          {
            maisup = [];
            maisup = res.data.data[i]
          }
        }
      }
      setPorra(pinsdata)
    })
  }, [startDate, startDate2])
  

  let history = useHistory();

  function atribuilink(pins){
    var strLink= "https://www.google.com/maps/search/?api=1&query="+ pins.latitude_pg+"," + pins.longitude_pg
    window.open(strLink, "_blank");
}
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
                  <a class="nav-link active" onClick={()=> {history.push('/dashboards')}}>Dashboards</a>
                  <a class="nav-link" onClick={()=> {history.push('/ajuda')}}>Ajuda</a>
                </div>
              </div>
            </div>
          </nav>
        

          <div class="float-container">
            <div class="float-child">
              <div class="titulo">
                Escolha a data Inicial e Final
              </div>
              
              <div class="float-container">
                <div class="float-child" >
                  <div className = "data1">
                    <DatePicker selected={startDate} onSelect={(date) => setStartDate(date)} dateFormat="dd-MM-y"/>
                  </div>
                  <div class="texto">
                    Insira a data inicial
                  </div>
                </div>
                <div class="float-child" >
                  <div className = "data2">
                    <DatePicker selected={startDate2} onSelect={(date2) => setStartDate2(date2)} dateFormat="dd-MM-y"/>
                  </div>
                  <div class="texto">
                    Insira a data final
                  </div>
                </div>
              </div>
              
              <div class="titulo">
                Report nivel 3 com mais upvotes
              </div>

              <div className = "maisup">
                <div className = "texto2">
                <a id="linkalertasingle" target="_blank" onClick={()=>atribuilink(maisup)} href="">
                  <div className = "report_single">
                      <div className="txtalerta">Local: &emsp; &emsp;{maisup.latitude_pg}  &ensp;&emsp; {maisup.longitude_pg}</div>
                      <br/>
                      <div className="txtalerta">Data: &emsp;&emsp;{maisup.data_pg} &ensp;&emsp; {maisup.hora_pg}</div>
                  </div>
                  </a>
                </div>     
              </div>
              <div class="baixo1">
                  <div class="reports">
                    {pinsdata.length}
                  </div>
                  <div class="texto">
                    Número de reports
                  </div>
                </div>
            </div>
            <div class="float-child">
            <div class="titulo2">
                Mapa com pins relativos às datas escolhidas
            </div>
              <div className="mapa">
                <MapaBilhas isMarkerShown/>
              </div>
            </div>
          </div>
    </div>
  )
}

function MapaBilhas(){

  const [data, setData] = useState([]);

  if(pinsdata !== data) 
    {
      setData(pinsdata);
  }  

  const MyMapComponent = compose(
    
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDXXYIuTY9m9uqB4PU_K0AKjdN8BIYC5p8&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `90%`}} />,
      containerElement: <div class='mapa'/>,
      mapElement: <div style={{ height: `90%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )((props) => {

  
    function atribuilink(data){
      var strLink= "https://www.google.com/maps/search/?api=1&query="+ data.latitude_pg+"," + data.longitude_pg
      window.open(strLink, "_blank");
  }

  function dvnivel(props){
    if(props === 1)
    {
      return "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
    if(props === 2)
    {
      return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    }
    if(props === 3)
    {
      return "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    }
  }

    return (
      <div>
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.661037124, lng: -7.9120189460}}>
        {data.map((data) => (
            <Marker
              onClick={()=>atribuilink(data)}
              key={data.id_pg}
              position={{ lat: data.latitude_pg, lng: data.longitude_pg}}
              icon={dvnivel(data.nivel_pg)}
            />
          ))
        }
        </GoogleMap>
      </div>
    );
  });

  return <MyMapComponent/>;
}

export default Dashboards;