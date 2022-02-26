import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter , Routes, Route,Navigate} from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./estilo.scss";
import { Contacto } from "./components/Contacto/Contacto";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { CartProvider } from "./components/context/CartContext";
import {Profile} from "./components/Profile/Profile";
import {Autenticacion} from "./components/Autenticacion/Autenticacion";


function App() {


  return (

    <div className="App">
      <CartProvider>
      <BrowserRouter> 

      <NavBar />
      {/* uso ROUTES = switch, NAVIGATE=redirect, ELEMENT=component y no EXACT porque estoy sobre la version 6.2 */}
      <Routes> 
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/iniciar" element={ <Autenticacion/>} />
      <Route path="/productos/:catID" element={ <ItemListContainer/>} />
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<Navigate to="/"/>}/>

      </Routes>
      </BrowserRouter> 
      </CartProvider>
      
    </div>
  );
}

export default App;
