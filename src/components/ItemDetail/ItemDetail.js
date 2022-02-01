import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Notificacion } from "../Notificacion/Notificacion";


export const ItemDetail = ({desc,precio,img,id,stock,initial}) => {
  const [cuentaCantidad, setCantidad] = useState(1);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [enCarrito, setEnCarrito] = useState(false)
  const contexto = useContext(CartContext)
  console.log("🚀 ~ file: ItemDetail.js ~ line 13 ~ ItemDetail ~ contexto", contexto)

  
  useEffect(() => {
    setMostrarNoti(false)    
  }, []);
  
  const onAdd = () => {
    setMostrarNoti(true)
    contexto.agregarAlCarrito()
  }
 
  return <div key={id}>

      
      <img src={img} alt={desc}></img>
      <p>{desc}</p>
      <p>El stock es de {stock} unidades</p>
      <p> ${precio}</p>

    {!enCarrito ?<ItemCount stock={stock} initial={initial} cantidad={cuentaCantidad} setCantidad={setCantidad} onAdd={onAdd} />
        :
        <Link className="btn btn-primary" to="/cart">Ver Carrito</Link>  
  
  }


      

      {mostrarNoti && <Notificacion valor={true} titulo="Carrito" mensaje={`Agregaste ${cuentaCantidad} productos`} />}
  </div>;
};
