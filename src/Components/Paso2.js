import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';
import 'animate.css';

import '../Components/Paso2.css'
import ImgContainer from './ImgContainer';

const Paso2 = () => {


  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 2000);

  const ImagenContext = useContext(VarContext);


  const Avanzar = (e) => {
    //e.preventDefault();
    setTimeout(() => {
      console.log("hola")
      return <Link to='/event' >Continuar</Link>
    }, 5000);
  };

  return (
	<>
	 <div>
          <p className="animate__animated animate__fadeInDown text-bienvenido">
              <b>{ImagenContext.Nombre}</b><br></br>, eres Parte de algo grande.
            </p>

            <div className="campo">
            <div className="edit-profile-container2 ">
              <div className="edit-profile-image white-grad2 animate__animated animate__flipInX">

              <ImgContainer></ImgContainer>
              </div>
              </div>
            </div>

             {
            redirectNow == true 
                ?  <Link className="btn btn-success my-3" to="/Paso3">Continuar</Link>
                : <>
                  </>
              } 

          </div>
	
	</>
  )
}

export default Paso2