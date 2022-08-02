import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';
import 'animate.css';

import '../Components/Paso3.css'

import ImgContainer from './ImgContainer';

import profile1 from '../img/profile1.jpg';
import profile2 from '../img/profile2.jpg';
import profile3 from '../img/profile3.png';
import profile4 from '../img/profile4.png';
import profile5 from '../img/profile5.png';

const Paso3 = () => {

	const [redirectNow, setRedirectNow] = useState(false);
	setTimeout(() => setRedirectNow(true), 5000);

	const ImagenContext = useContext(VarContext);

  return (
	<>
	 <div>
          <p className="animate__animated animate__fadeInDown text-bienvenido">
              <b>miles de personas</b><br></br>, Trabajando con pasión<br></br> en todo el mundo
            </p>

            <div className="campo">
            <div className="edit-profile-container3 ">

				<ImgContainer></ImgContainer>

                {/* <img className={ImagenContext.UrlImg !== "" ? 'item-image animate__animated animate__flipInX': 'item-image'}
                  src={ImagenContext.UrlImg}
                  alt={ImagenContext.UrlImg}
                /> */}

				<img className={ImagenContext.UrlImg !== "" ? 'item-image1 animate__animated animate__flipInX': 'item-image1'}
                  src={profile1}
                  alt={profile1}
                />

				<img className={ImagenContext.UrlImg !== "" ? 'item-image2 animate__animated animate__flipInX': 'item-image2'}
                  src={profile2}
                  alt={profile2}
                />

				<img className={ImagenContext.UrlImg !== "" ? 'item-image3 animate__animated animate__flipInX': 'item-image3'}
                  src={profile3}
                  alt={profile3}
                />

				<img className={ImagenContext.UrlImg !== "" ? 'item-image4 animate__animated animate__flipInX': 'item-image4'}
                  src={profile4}
                  alt={profile4}
                />

				<img className={ImagenContext.UrlImg !== "" ? 'item-image5 animate__animated animate__flipInX': 'item-image5'}
                  src={profile5}
                  alt={profile5}
                />

              </div>
            </div>

             {
            redirectNow == true 
                ?  <Link className="btn btn-primary my-3" to="/Paso3">COMPARTIR</Link>
                : <>
                  </>
              } 

          </div>
	
	</>
  )
}

export default Paso3