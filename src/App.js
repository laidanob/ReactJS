import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter , Routes, Route,Navigate} from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./estilo.scss";
import { Contacto } from "./components/Contacto/Contacto";
import { CartContext } from "./components/context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [carrito, setCarrito] = useState([])
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito,item])
    console.log("me estas agregando")

  }
  const removerDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))

  }
  const vaciarCarrito = () => {
    setCarrito([])
  }
  // const estaEnCarrito = () => {
  //   return carrito.some 
  // }
  return (

    <div className="App">
      <CartContext.Provider value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        removerDelCarrito,
        vaciarCarrito
      }}>
      
      <BrowserRouter> 

      <NavBar />
      {/* uso ROUTES = switch, NAVIGATE=redirect, ELEMENT=component y no EXACT porque estoy sobre la version 6.2 */}
      <Routes> 
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/productos/:catID" element={ <ItemListContainer/>} />
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter> 
      </CartContext.Provider>
    </div>
  );
}

export default App;
