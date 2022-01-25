import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter , Switch, Route} from "react-router-dom"

function App() {
  return (

    <div className="App">
      <NavBar />
      <ItemListContainer bienvenida="Hola Bievenido" />
      
      <a href="https://github.com/laidanob/ReactJS">LINK A REPOSITORIO</a>
     
    </div>
  );
}

export default App;
