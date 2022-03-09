import { Button, Typography,Box } from '@mui/material'
import React from 'react'


export const FotolibrosPremium = () => {
const imagenes = require.context("../../../media/img")


  return (<Box sx={{display: "flex",
   flexDirection: "row",
   m: "5% 10% 0 10%",
   gap: 2,
  }}>
  <Box sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1,
    gridTemplateRows: 'auto',
    gridTemplateAreas: `"imagen1 imagen1 imagen1 "
  "imagen2 imagen3 imagen4 "`,
    width: "50%",
    
  }}
  > 
  <Box sx={{gridArea: "imagen1"}}><img  src={imagenes("./IMG_6934.jpg")}></img></Box>
  <Box sx={{gridArea: "imagen2"}}><img  src={imagenes("./S IMG_4809.jpg")}></img></Box>
  <Box sx={{gridArea: "imagen3"}}><img  src={imagenes("./IMG_3803.JPG")}></img></Box>
  <Box sx={{gridArea: "imagen4"}}><img  src={imagenes("./IMG_1897.JPG")}></img></Box>
   </Box>
  <Box sx={{
            width: "50%",
            display:"flex",
            alignItems:"flex-start",
            flexDirection:"column",
            justifyContent:"center",
            textAlign: "left"
        }}>
        <Typography variant="h1" sx={{fontSize: "35px",
    mb:2}}>Fotolibro - Linea Premium</Typography>
        <Typography variant="body1">Esta linea es la mas exclusiva de nuestra coleccion, inspirada en los lineamientos mas clasicos.
        <br />
        <br />
        Las fotografias cobran un protagonismo a pasos agigantados, 
        primero por su impresion en papel fotografico y segundo por su apertura de 180°, 
        que hace que puedas poner tan solo una imagen a pliego completo, sin miedo a que se pierda informacion.
        <br />
        <br />
        En cuanto a las tapas tenes una gran diversidad de opciones.
        Los tiempos de entrega de esta linea son de 10/15 dias, pero tambien contamos con entrega express.</Typography>

        <Button variant="contained" sx={{justifyContent: "left"}}>QUIERO PEDIRLO</Button>

</Box>
</Box>
  )
}
