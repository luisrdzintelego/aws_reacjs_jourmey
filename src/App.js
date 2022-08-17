import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import ReactDOM from "react-dom/client";
import { CustomVarContext } from './Context/CustomVarContext';

import Paso1 from './Components/Paso1'
import Paso2 from './Components/Paso2';
import Paso3 from './Components/Paso3';
import Journey from './Components/Journey';

function App() {

  //console.log("window.location.host.split", window.location.host.split(".")[1])

  return (
    <>
    <CustomVarContext>

      {/* <BrowserRouter basename="/cursos_elearning/femsa/valores_femsa" > */}
      {/* <BrowserRouter basename="/femsa" > */}
      <BrowserRouter basename="/" >

    
      <div className="App">

        <Routes>


          {/* {
          window.location.host.split(".")[1] === "intelego" 
          ? <Route path="cursos_elearning/femsa/valores_femsa" element={<Paso1/>} />
          : <Route path="/" element={<Paso1/>} />
          
          } */}
        

          {/* {
          window.location.host.split(".")[1] === "intelego" 
          ? <Route path="cursos_elearning/femsa/valores_femsa/" element={<Paso1/>} />
          : <Route path="/" element={<Paso1/>} />
  
          } */}
        <Route path="/" element={<Paso1/>} />
        <Route exact path='journey/:itemId' element={<Journey/>} />
        <Route path="Paso2" element={<Paso2/>}/>
        <Route path="Paso3" element={<Paso3/>}/>
        {/* <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    /> */}

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
