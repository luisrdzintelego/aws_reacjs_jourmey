import React, {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import 'animate.css';

import '../Components/Paso2.css'
import ImgContainer from './ImgContainer';

const Paso2 = () => {


  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 5000);

  const ImagenContext = useContext(VarContext);


  // const Avanzar = (e) => {
  //   //e.preventDefault();
  //   setTimeout(() => {
  //     console.log("hola")
  //     return <Link to='/event' >Continuar</Link>
  //   }, 5000);
  // };

  return (
	<>

        {/* {
            loading
            ? <h2>Cargando</h2>
            : <ItemDetail {...item}/>

        } */}


	 <div>
          <p className="animate__animated animate__fadeInDown text-bienvenido">
              <b>{ImagenContext.Nombre}</b><br></br>, eres parte de algo grande.
            </p>

             { 
            ImagenContext.Pais !== "" 
                ?  <p className="animate__animated animate__fadeInDown text-localizacion">
                Nos visitas desde:<br></br>
                <b>
                {ImagenContext.Pais}, {ImagenContext.Ciudad}, {ImagenContext.Region}  
                </b></p>
                : <></>
              }



            <div className="campo">
            <div className="edit-profile-container2 ">
              <div className="edit-profile-image white-grad2 animate__animated animate__flipInX">

              <ImgContainer></ImgContainer>
              </div>
              </div>
            </div>

             {/* {
            redirectNow === true 
                ?  <Link className="btn btn-success my-3" to="/Paso3">Continuar</Link>
                : <>
                  </>
              }  */}

            {
            redirectNow === true 
                ?  <Navigate  to="/Paso3"/>
                : <>
                  </>
              } 


          </div>
	
	</>
  )
}

export default Paso2