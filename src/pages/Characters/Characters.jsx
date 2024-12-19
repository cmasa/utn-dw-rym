import { useState, useEffect, useContext } from 'react';

import './character.css'

import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'

export default function Characters() {
    let [data, setData] = useState([])
    let [dataCompleta, setDataCompleta] = useState([])
    let [filtrosAplicados, setFiltrosAplicados] = useState([])
    let [show, setShow] = useState(true)

    let filterName = ["Character Alive", "Character Dead", "Female", "Male", "Origin Unknown"]

    const mostrarData = async () => {
        let infoAPI = await fetch("https://rickandmortyapi.com/api/character")
            .then((resp) => { return resp.json() })
            .catch((error) => console.log("error:" + error));

        setDataCompleta(infoAPI.results);
        setData(infoAPI.results)
    }

    const filtrar = (inputData) => {
        let pulsado = inputData.checked;
        let filtroPulsado = inputData.value;

        //Aplicar el filtro
        if (pulsado) {
            //Agregar filtro a la lista
            setFiltrosAplicados([...filtrosAplicados, filtroPulsado])
        } else {
            setData(dataCompleta)
            let filtrosActualizado = filtrosAplicados.filter((fil) => { return fil !== filtroPulsado })
            //Actualiza State de Filtros Aplicados
            setFiltrosAplicados(filtrosActualizado)
        }
    }


    useEffect(() => {
        filtrosAplicados.forEach((filtro) => {
            let nuevaLista;
            switch (filtro) {
                case "Character Alive":
                    nuevaLista = data.filter((personaje) => { return personaje.status === "Alive" })
                    break;

                case "Character Dead":
                    nuevaLista = data.filter((personaje) => { return personaje.status === "Dead" })
                    break;

                case "Female":
                    nuevaLista = data.filter((personaje) => { return personaje.gender === "Female" })
                    break;

                case "Male":
                    nuevaLista = data.filter((personaje) => { return personaje.gender === "Male" })
                    break;

                case "Origin Unknown":
                    nuevaLista = data.filter((personaje) => { return personaje.origin.name === "unknown" })
                    break;
            }

            setData(nuevaLista)
        })
    }, [filtrosAplicados])

    useEffect(() => {
        mostrarData()
    }, [])

    return (
        <div>
            <Navegation page='character' />
            <div className='d-inline-flex pt-5 ps-4 pb-3'>
                <h2 className='subt-1'>Filters</h2>
            </div>
            {/* BOTON FILTROS MOBILE */}
            <div className='mobile-filters d-flex rounded-4 justify-content-evenly my-3 mx-5 py-4'>
                <h2 className='mb-0'>Filters</h2>
                <button className='btn btn-filtro navbar-toggler' onClick={() => { setShow(!show) }} >
                </button>
            </div>

            {/* FILTROS: */}
            <div className={`d-flex flex-lg-column justify-content-center ${!show? '':'hide-mobile'}`}>
                <div className='filters-cont d-inline-flex d-lg-flex flex-column flex-lg-row justify-content-around'>{
                    filterName.map((filter) => {
                        return <Filter key={filter} title={filter} filtar={filtrar} />
                    })
                }</div>
            </div>

            {/* PERSONAJES: */}
            <section className='sec-cards d-flex flex-wrap justify-content-center mt-5'>
                {
                    data.length !== 0 ?
                        data.map((personaje) => {
                            return <Card key={personaje.id} personaje={personaje} />
                        })
                        :
                        <div className='d-flex alert mx-5 w-100'>
                            <i className="bi bi-exclamation-triangle-fill pe-4"></i>
                            <p className='m-0'>Sorry! There are no characters width all those properties.</p>
                        </div>
                }
            </section>
        </div>

    )
}