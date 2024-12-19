import { useState } from "react"
import './card.css'

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)

    return(
        <div className={`d-inline-flex flex-row flex-wrap justify-content-between rounded m-1 ${ocultar?'tarjeta':'tarjeta-open'}`}>
            
            {/* TARJETA PRINCIPAL */}
            <div className="d-flex flex-column justify-content-between tarjeta-char">
                <div>
                    <img src={personaje.image}/>
                    <h2 className="char-name text-center p-2">{personaje.name}</h2>
                </div>
                <div className="d-flex justify-content-end">
                    <button 
                        onClick={()=>setOcultar(false)} 
                        className={ocultar?"btn btn-more":"d-none"}>Know More...
                    </button>
                </div>
            </div>

            {/* KNOW MORE */}
            { ocultar ?'':
                <div className="d-flex flex-column justify-content-center aling-items-center tarjeta-info">
                    <div className="d-flex justify-content-end">
                        <button className="btn-close-info border-0 m-2 p-2 rounded-2 text-center" onClick={()=>setOcultar(true)}>X</button>
                    </div>
                    <div className="d-flex justify-content-start">
                        <ul className="lst-info d-flex flex-column rounded-3">
                            <li><p className="p-info">Character Status {personaje.status}</p></li>
                            <li><h4>Species</h4><p className="p-info">{personaje.species}</p></li>
                            <li><h4>Origin</h4><p className="p-info">{personaje.origin.name}</p></li>
                            <li><h4>Gender</h4><p className="p-info">{personaje.gender}</p></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}