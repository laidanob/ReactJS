import React from 'react'
import {Typography,MenuItem} from '@mui/material';
import { Link,useLocation } from 'react-router-dom';
import { SubMenuFotolibros } from './SubMenuFotolibros';


export const NavBarMenu = () => {
    const ruta = useLocation().pathname 
  

    
  return (<>
            <MenuItem  key={"nosotros"} >
                <Link component={Link}  to="/"> <Typography color={(ruta === "/") ? "primary.main" : ""} sx={{ '&:hover': { color: "primary.main"} }}>SOBRE RABBIT</Typography></Link>
            </MenuItem>
           
            <SubMenuFotolibros ruta={ruta}/>
                    
            <MenuItem key={"productos"} >
                <Link component={Link}  to="/productos"> <Typography color={(ruta === "/") ? "primary.main" : ""} sx={{ '&:hover': { color: "primary.main"} }}>PRODUCTOS</Typography></Link>
            </MenuItem>
                </>
  )
}
