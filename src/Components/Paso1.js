import React, {  useState, useContext } from 'react';
import { VarContext } from '../Context/VarContext';


import { Link } from 'react-router-dom';

import ImgUploader from './ImgUploader';

import femsa_logo from '../img/femsa2.png';

const Paso1 = () => {

  const[Nombre,setNombre] = useState("")
  const ImagenContext = useContext(VarContext);
  console.log("🚀 ~ ImagenContext", ImagenContext)

  const NameChange = (event) => {
    console.log(event.target.value);
    setNombre(event.target.value);
    ImagenContext.addNombre(event.target.value);
  }

  const SetName = () => {
    console.log("🚀 ~ Se Agrego Nombre al Context", Nombre)
    //ImagenContext.AddNombre(Nombre);
  }

  return (
	<>
	 <div>
        <header className="App-header">
          <img src={femsa_logo} width="100" alt="logo" />
        </header>

          <p className="text-bienvenido">
              ¡Bienvenido!
            </p>

            <div className="campo">
              <label className="label">Ingresa tu Nombre:</label>
              <input className="text-input" id="nombre" nombre={Nombre} onChange={NameChange}></input>
            </div>
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
            <div className="campo">
            {
            ImagenContext.UrlImg != "" 
                ? <Link className="btn btn-primary c-femsa my-3" to="/Paso2">Continuar</Link>
                : <>
                  </>
              }
            </div>
          </div>
	
	</>
  )
}

export default Paso1