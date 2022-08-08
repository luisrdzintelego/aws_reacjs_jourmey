import React, {useContext} from 'react'
import { VarContext } from '../Context/VarContext';
import 'animate.css';

const ImgContainer = () => {
	
	const ImagenContext = useContext(VarContext);

  return (
	<img className={ImagenContext.UrlImg !== "" ? 'item-image animate__animated animate__flipInX': 'item-image'}
	src={ImagenContext.UrlImg}
	alt={ImagenContext.UrlImg}
  />
  )
}

export default ImgContainer