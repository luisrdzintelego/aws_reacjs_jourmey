import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import ReactDOM from "react-dom/client";
import femsa_logo from './img/femsa2.png';
import { CustomVarContext } from './Context/CustomVarContext';

import Paso1 from './Components/Paso1'
import Paso2 from './Components/Paso2';
import Paso3 from './Components/Paso3';

function App() {

  return (
    <>
    <CustomVarContext>
    <BrowserRouter>

      <div className="App">

        <Routes>
          {/* <Route path='/' element={<Paso1 imagen={'hola Bienvenidos a mi Ecommerce'} />} /> */}
        <Route path='/' element={<Paso1/>} />
        <Route path='/Paso2' element={<Paso2/>}/>
        <Route path='/Paso3' element={<Paso3/>}/>

          {/* <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'hola Bienvenidos a categorias'} />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/CheckOut' element={ <CheckOut/> } /> */}
        </Routes>
      </div>
      </BrowserRouter>
      </CustomVarContext>
    </>
  );
}
export default App;
