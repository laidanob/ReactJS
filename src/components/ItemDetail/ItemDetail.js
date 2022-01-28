import React from 'react';

export const ItemDetail = ({descripcion,precio,img,id}) => {
  return <div key={id}>

      <p>{descripcion}</p>
      <img src={img} alt={descripcion}></img>
      <p>{precio}</p>

  </div>;
};
