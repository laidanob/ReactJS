import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { Notificacion } from "../Notificacion/Notificacion";


export const ItemDetail = ({descripcion,precio,img,id,stock,initial}) => {
  const [cuentaCantidad, setCantidad] = useState(initial);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [enCarrito, setEnCarrito] = useState(false)

  useEffect(() => {
    setMostrarNoti(false)    
  }, []);
  
  const onAdd = () => {
    setMostrarNoti(true)
    setEnCarrito(true)
  }
 
  return <div key={id}>

      <p>{descripcion}</p>
      <img src={img} alt={descripcion}></img>
      <p>{precio}</p>

    {!enCarrito ?<ItemCount stock={stock} initial={initial} cantidad={cuentaCantidad} setCantidad={setCantidad} onAdd={onAdd} />
        :
        <Link className="btn btn-primary" to="Cart">Ver Carrito</Link>  
  
  }


      

      {mostrarNoti && <Notificacion valor={true} titulo="Carrito" mensaje={`Agregaste ${cuentaCantidad} productos`} />}
  </div>;
};
