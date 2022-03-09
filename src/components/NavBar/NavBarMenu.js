import React from 'react'
import {Typography,Menu,Button,MenuItem} from '@mui/material';
import { Link,useLocation } from 'react-router-dom';


export const NavBarMenu = (handleCloseUserMenu) => {
    const ruta = useLocation().pathname
    console.log("ruta",ruta)
    const [anchorElSubMenu, setAnchorElSubMenu] = React.useState(null);
    const open = Boolean(anchorElSubMenu);
    const handleClick = (event) => {
        setAnchorElSubMenu(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElSubMenu(null);
    };

    
  return (<>
            <MenuItem className={"boton"}   key={"nosotros"} >
                <Link component={Link}  to="/"> <Typography color={(ruta === "/") ? "primary.main" : ""} sx={{ '&:hover': { color: "primary.main"} }}>SOBRE RABBIT</Typography></Link>
            </MenuItem>
           
            <MenuItem className={"boton"}   key={"fotolibros"} >
                <Button onClick={handleClick}><Typography color={(ruta === "/fotolibros") ? "primary.main" : ""} sx={{'&:hover': { color: "primary.main"}}}>FOTOLIBROS</Typography></Button>
            </MenuItem>
          

                    <MenuItem  onClick={handleClose}key={"fotolibropremium"} >
                        <Menu id="basic-menu"
                anchorEl={anchorElSubMenu}
                open={open}
                onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                             <Link component={Link} to="/fotolibropremium"><Typography color={(ruta === "/fotolibropremium") ? "primary.main" : ""} sx={{'&:hover': { color: "primary.main"}}} >PREMIUM</Typography></Link>
                        </MenuItem>
                    </Menu>
                    </MenuItem>
            
            {/* <MenuItem key={"fotolibros"} >
                <Link to="/fotolibros" onClick={handleCloseUserMenu}> <Typography textAlign="center">Perfil</Typography></Link>
            </MenuItem>

            <MenuItem key={"contenedores"} >
                <Link to="/contenedores" onClick={handleCloseUserMenu}> <Typography textAlign="center">Perfil</Typography></Link>
            </MenuItem> */}
                
                </>
  )
}
