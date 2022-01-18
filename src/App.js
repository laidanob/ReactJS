import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer bienvenida="Hola Bievenido" />
      <a href="https://github.com/laidanob/ReactJS">LINK A REPOSITORIO</a>
      <ItemCount/>
    </div>
  );
}

export default App;
