import React from 'react'
import ImgUploader from './ImgUploader';

const paso1 = () => {
  return (
	<>
	 <div>
          <p className="text-bienvenido">
              ¡Bienvenido!
            </p>

            <div className="campo">
              <label className="label">Ingresa tu Nombre:</label>
              <input className="text-input" id="nombre"></input>
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
              <ImgUploader></ImgUploader>
            </div>

          </div>
	
	</>
  )
}

export default paso1