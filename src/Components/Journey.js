import React, {useContext, useState, useEffect} from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import axios from "axios";

import 'animate.css';

const Journey = () => {


  const [loading,setLoading] = useState(false)
  //const [item,setItem] = useState(null)

  const {itemId} = useParams()

  /*
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 5000);
  */

  const ImagenContext = useContext(VarContext);

  useEffect(() => {


    if(itemId == 1433){
    console.log("🚀 ~ itemId", itemId)

    
      ImagenContext.addNombre("Kakaroto");
      ImagenContext.addImg("https://www.intelego.com.mx/cursos_elearning/femsa/valores_femsa/backend/uploads/goku.jpg");
	  setLoading(true)
    
    }

    if(itemId == 1495){
		console.log("🚀 ~ itemId", itemId)
	
		
		  ImagenContext.addNombre("Vegueta");
		  //ImagenContext.addImg("http://localhost:8888/femsa/backend/uploads/vegueta.jpg");
		  ImagenContext.addImg("https://www.intelego.com.mx/cursos_elearning/femsa/valores_femsa/backend/uploads/vegueta.jpg");
		  setLoading(true)
		
		}


    
    /*
    //let url = "http://localhost:8888/femsa/backend/server.php";
    let url = "https://www.intelego.com.mx/cursos_elearning/femsa/valores_femsa/backend/server.php";

    axios.post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        //this.setState({ responseArray: res.data });
        //this.resetFile();
        console.log("RES:: " , res)
        //toast('-'+ res.data.url +'--');
        //toast('-'+ res.data.status +'--');
        //toast('-'+ res.data.error +'--');
        //toast('-'+ res.data.message +'--');

        ImagenContext.addImg(res.data.url)

        resetFile()
      },error=>{
        ImagenContext.addImg("error")
        toast('-'+ error +'--');
        //alert(error);
      });
    */

}, [])

  // const Avanzar = (e) => {
  //   //e.preventDefault();
  //   setTimeout(() => {
  //     console.log("hola")
  //     return <Link to='/event' >Continuar</Link>
  //   }, 5000);
  // };

  return (
	<>

			{
				loading === false
				? <h2>Cargando</h2>
				: <Navigate  to="/Paso2"/>

			}

             {/* {
            redirectNow === true 
                ?  <Link className="btn btn-success my-3" to="/Paso3">Continuar</Link>
                : <>
                  </>
              }  */}

            {/* {
            redirectNow === true 
                ?  <Navigate  to="/Paso3"/>
                : <>
                  </>
              }  */}
	
	</>
  )
}

export default Journey