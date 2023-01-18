import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "../css/home.css";
import axios from 'axios'


function fakeListApiMarkers() {

  const url= 'https://warm-hamlet-63390.herokuapp.com/pin/list'
  return new Promise((resolve) => {
      resolve(axios.get(url));
  });
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

  const [data, setData] = useState({
    markers: [],
    loading: false,
    error: undefined
  });

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

  useEffect(() => {
    setData({ loading: true });
    fakeListApiMarkers()
      .then((response) => {
        const dados = response.data;
        setData({ markers: dados.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
        setData({ markers: [], error, loading: false });
      });
  }, []);

  function atribuilink(data){
    var strLink= "https://www.google.com/maps/search/?api=1&query="+ data.latitude+"," + data.longitude
    window.open(strLink, "_blank");
  }

  return (
    <div>
      <h2 class='loading'>{data.loading ? "Loading..." : "Reports Ativos"}</h2>
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.661037124, lng: -7.9120189460}}>

        {props.isMarkerShown && (data.markers || []).map((marker) => (
            <Marker
              onClick={()=>atribuilink(marker)}
              key={marker.id}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              icon={dvnivel(marker.nivel)}
            />
          ))
        }
  
      </GoogleMap>
    </div>
  );
});

export default function MapaCP() {
    return(
      <MyMapComponent isMarkerShown />)
}