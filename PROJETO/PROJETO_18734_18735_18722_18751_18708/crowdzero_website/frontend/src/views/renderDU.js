import React, {useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt';

function RenderDU(){

    const[pins, setPins] = useState([])

    useEffect(()=>{
        axios.get('https://warm-hamlet-63390.herokuapp.com/pin/list')
        .then(res=>{
            var vetor = [];
            for(var i = 0; i < res.data.data.length; i++)
            {
                var horaatual = moment().format('LTS')
                var startTime = moment(res.data.data[i].horap, "HH:mm:ss");
                var endTime = moment(horaatual, "HH:mm:ss");

                var duration = moment.duration(startTime.diff(endTime));

                var nivelp = res.data.data[i].nivel;

                if(nivelp === 3 && duration._data.hours > 3)
                {
                        vetor.push(res.data.data[i])
                }
            }
            setPins(vetor)
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

    function atribuilink(pins){
        var strLink= "https://www.google.com/maps/search/?api=1&query="+ pins.latitude+"," + pins.longitude
        window.open(strLink, "_blank");

    }

    function vepin(pins){
            if(pins.length === 0){
                return(
                    <div className="tsp2">
                        Sem Alertas Ativos.
                   </div>
                   )
            }
            else{
                return(
                    pins.map(
                        pins => 
                                <a id="linkalertasingle" target="_blank" onClick={()=>atribuilink(pins)} href="">
                                <div className="alerta_single" key={pins.id}>
                                <div className="txtalerta">Local:  &ensp;&emsp; &emsp;{pins.latitude}&emsp; &ensp; {pins.longitude}</div>
                                <br/>
                                <div className="txtalerta">Data: &ensp; &emsp;&emsp;{pins.datap} &ensp;&emsp; {pins.horap}</div>
                                </div>
                                </a>
                        )
                )
            }
    }
    return(
        <div calssName="listapin">
            {vepin(pins)}
        </div>
    )
}

export default RenderDU