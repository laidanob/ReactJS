import React from 'react';

export const ItemDetail = ({descripcion,precio,img,id}) => {
  return <div key={id}>

      <p>{descripcion}</p>
      <div>{img}</div>
      <p>{precio}</p>

  </div>;
};
