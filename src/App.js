import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter , Routes, Route,Navigate,useParams} from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./estilo.scss";

function App() {
  return (

    <div className="App">
      <BrowserRouter> 

      <NavBar />
      {/* uso ROUTES = switch, NAVIGATE=redirect, ELEMENT=component y no EXACT porque estoy sobre la version 6.2 */}
      <Routes> 
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/productos/:id" element={ <ItemListContainer/>} />
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="*" element={<Navigate to="/"/>}/>

      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
