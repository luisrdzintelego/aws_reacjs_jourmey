import React, {  useState, useContext } from 'react';
import { VarContext } from '../Context/VarContext';
import { getLocation, getLugar } from '../Apis/Api'

import { Link, Navigate } from 'react-router-dom';

import ImgUploader from './ImgUploader';

import femsa_logo from '../img/femsa2.png';


import { DataStore } from '@aws-amplify/datastore';
import { JourneyDB } from '../models';


const Paso1 = () => {



  const [Lugar,setLugar]=useState([])

  const[Nombre,setNombre] = useState("")
  const ImagenContext = useContext(VarContext);
  //console.log("🚀 ~ ImagenContext", ImagenContext)

  const sendInfo = async(nombre,url_img,Negocio)=>{

    await DataStore.save(
      new JourneyDB({
        "Nombre": "Lorem ipsum dolor sit amet",
        "url_img": "Lorem ipsum dolor sit amet",
        "Negocio": "Lorem ipsum dolor sit amet"
      })
    );
  }


  const NameChange = (event) => {
    console.log(event.target.value);
    setNombre(event.target.value);
    ImagenContext.addNombre(event.target.value);
    obtenerLugar();

  }


  const [redirectNow, setRedirectNow] = useState(false);

  const obtenerLugar=()=>{
    getLugar()
    .then((resultado)=>{
        return resultado.json()
    })
    .then((lugares)=>{
        //no me queda claro por que utilizar .results
        console.log(lugares.city)
        setLugar(lugares.resultado)
        ImagenContext.addCiudad(lugares.city);
        ImagenContext.addPais(lugares.country);
        ImagenContext.addRegion(lugares.region);

    })
}

  // const SetName = () => {
  //   console.log("🚀 ~ Se Agrego Nombre al Context", Nombre)
  //   //ImagenContext.AddNombre(Nombre);
  // }

  const setTimeoutFun = () => {
    setTimeout(() => {
      sendInfo(ImagenContext.Nombre,ImagenContext.UrlImg, "NEGOCIO DEFAULT");
      setRedirectNow(true)
    }, 3000);
  }

  
  return (
	<>
	 <div>
        <header className="App-header">
          <img src={femsa_logo} width="100" alt="logo" />
        </header>

          <p className="text-bienvenido">
              ¡Bienvenido Intelego!
            </p>

                <div className="campo">
                  <label className="label">Ingresa tu Nombre:</label>
                  <input  required placeholder="Nombre" id="nombre" onChange={NameChange}  className="text-input"></input>
                </div>

                    {/* <label className="label" htmlFor="calificacion">Calificación:</label>
                    <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.videojuego.calificacion} className="input" /> */}


            <div className="campo">
              <label  className="label">Negocio:</label>
              <select className="text-input" name="negocio" id="negocio">
              <option value="n1">negocio 1</option>
              <option value="n2">negocio 2</option>
              <option value="n3">negocio 3</option>
              <option value="n4">negocio 4</option>
              </select>
            </div>


            <div className="campo">
              <ImgUploader ></ImgUploader>
            </div>

                 {
                ImagenContext.UrlImg !== "" 
                    ? setTimeoutFun()
                    : <>
                      </>
                  } 
              {
              redirectNow === true 
              ?  <Navigate  to="/Paso2"/>
              : <>
                </>
            } 

          </div>
	
	</>
  )
}

export default Paso1