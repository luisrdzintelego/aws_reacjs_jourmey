import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import ReactDOM from "react-dom/client";
import femsa_logo from './img/femsa2.png';

import Paso1 from './Components/Paso1'

function App() {

  return (
    <>

    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <img src={femsa_logo} width="100" alt="logo" />
        </header>

        <Routes>
          <Route path='/' element={<Paso1 greeting={'hola Bienvenidos a mi Ecommerce'} />} /> */}
          {/* <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'hola Bienvenidos a categorias'} />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/CheckOut' element={ <CheckOut/> } /> */}
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
