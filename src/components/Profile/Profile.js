import React, {useEffect,useState} from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Loader } from '../Loader/Loader'; 
import {collection, getDocs,query,where} from "firebase/firestore"
import { db } from "../firebase/config"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrdenesList } from './OrdenesList';



// tengo que escribir en la coleccion productos de firebase



export const Profile = () => {
  const {authLoader,usuario,cerrarSesion} = useAuth()
  const [ordenes,setOrdenes] = useState([])
  
  useEffect(() => {
    const ordenesFire = collection(db , "ordenes")
    const q = usuario.email ? query(ordenesFire,where("usuario.Email", "==", usuario.email )) : ""
        getDocs(q)
    .then((res) => {
      const ordenes = res.docs.map((ordenes) => ({id: ordenes.id, ...ordenes.data()}))
      setOrdenes(ordenes) 

    
    })
    .catch((error) => {
      alert(error)
    }) 
    
    },)
  
  const handleCerrarSesion = () =>  {
    cerrarSesion()
  }
  return (<div className="container">
          {authLoader === true ?
           <>
           <Loader/> 
           <Link to="/iniciar"><Button variant="contained" size="large">Iniciar Sesion</Button></Link>
           </>
           : 

           <>
           <h1>Perfil</h1>
           <h2>Mis datos</h2>
           <p>{usuario.displayName}</p>
           <p>{usuario.email}</p>
           <p>{usuario.phoneNumber}</p>
           <h2>Mis Compras</h2>
           <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Numero ID</TableCell>
                    <TableCell align="right">Total Compra</TableCell>
                  </TableRow>
                </TableHead>

                <OrdenesList ordenes={ordenes}/>

                </Table>
                </TableContainer>

            

           <Button  onClick={handleCerrarSesion} variant="contained" size="large">Cerrar Sesion</Button>
          </>
           }
        
        
  </div>

)
}
