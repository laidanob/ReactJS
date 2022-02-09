import {useState, useEffect, useContext} from 'react';
import {Link,useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Notificacion } from "../Notificacion/Notificacion";


export const ItemDetail = ({nombre,desc,precio,img,id,stock,initial}) => {
  const [cuentaCantidad, setCantidad] = useState(1);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const {agregarAlCarrito,estaEnCarrito,carrito } = useContext(CartContext)

  const total = precio * cuentaCantidad
  console.log("eltotal ",total)

  
  useEffect(() => {
    setMostrarNoti(false)
    
  }, []);
  
  const onAdd = () => {
    setMostrarNoti(true)
    agregarAlCarrito({
      nombre,
      id,
      img,
      precio,
      cuentaCantidad,
      total

    })
    console.log(carrito)
  }
 
  const navegar = useNavigate()
  return <div key={id}>

      
      <img src={img} alt={desc}></img>
      <p>{desc}</p>
      <p>El stock es de {stock} unidades</p>
      <p> ${precio}</p>

    {!estaEnCarrito(id) ?<ItemCount stock={stock} initial={initial} cantidad={cuentaCantidad} setCantidad={setCantidad} onAdd={onAdd} />
        :
        <Link className="btn btn-primary" to="/cart">Ver Carrito</Link>
        
  }


      

      {mostrarNoti && <Notificacion valor={true} titulo="Carrito" mensaje={`Agregaste ${cuentaCantidad} productos`} />}
      <button onClick={() => (navegar("/"))}>Volver </button>
  </div>;
};
