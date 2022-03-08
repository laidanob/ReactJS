import {useState, useEffect, useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Notificacion } from "../Notificacion/Notificacion";
import {Box} from '@mui/material'

export const ItemDetail = ({nombre,desc,precio,img,id,stock,initial}) => {
  const [cuentaCantidad, setCantidad] = useState(1);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const {agregarAlCarrito,estaEnCarrito } = useContext(CartContext)

  const total = precio * cuentaCantidad

  
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
  }
 
  
  return <Box sx={{mt: "60px" }} key={id}>
      <h1>{nombre}</h1>
      
      <img id="imagenDetail" src={img} alt={desc}></img>

      <p>{desc}</p>

      <p>El stock es de {stock} unidades</p>

      <p> ${precio}</p>

   
        <ItemCount stock={stock} initial={initial} cantidad={cuentaCantidad} setCantidad={setCantidad} onAdd={onAdd} estaCarrito={estaEnCarrito(id)} />
       
  


      

      {mostrarNoti && <Notificacion valor={true} titulo="Carrito" mensaje={`Agregaste ${cuentaCantidad} productos`} />}
     
  </Box>;
};
