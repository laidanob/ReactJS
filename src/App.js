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
import {Registro} from "./components/Autenticacion/Registro";
import {Login} from "./components/Autenticacion/Login";
import { AuthProvider } from "./components/context/AuthContext";
import { RutasProtegidas } from "./components/RutasProtegidas/RutasProtegias";
import {CreateNewProduct} from "./components/Profile/CreateNewProduct";


function App() {


  return (

    <div className="App">
      <AuthProvider>
      <CartProvider>
      <BrowserRouter> 

      <NavBar />
      {/* uso ROUTES = switch, NAVIGATE=redirect, ELEMENT=component y no EXACT porque estoy sobre la version 6.2 */}
      <Routes> 
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/registro" element={ <Registro/>} />
      <Route path="/productos/:catID" element={ <ItemListContainer/>} />
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<RutasProtegidas><Checkout/></RutasProtegidas>} />
      <Route path="/profile" element={<RutasProtegidas><Profile/></RutasProtegidas>} />
      <Route path="/iniciar" element={<Login/>} />
      <Route path="/agregarproducto" element={<CreateNewProduct/>} />
      <Route path="*" element={<Navigate to="/"/>}/>

      </Routes>
      </BrowserRouter> 
      </CartProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;
