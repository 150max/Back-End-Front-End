import React, {useState, useEffect } from 'react'
import axios from 'axios'


function RenderSP(){

    const[pins, setPins] = useState([])


    useEffect(()=>{
        axios.get('https://warm-hamlet-63390.herokuapp.com/pin/list')
        .then(res=>{
            var vetor = [];
            for(var i = 0; i < res.data.data.length; i++)
            {
                var nibel = res.data.data[i].nivel
                var up = res.data.data[i].upvote
                var down = res.data.data[i].downvote
                if(nibel === 3  && up-down>5)
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
                                <div className="alerta_single" key={pins.id}  >
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

export default RenderSP