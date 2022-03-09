import React from 'react'
import { Link } from 'react-router-dom';
import { UserLogo } from '../User&CartWidget/UserLogo';
import {Box,IconButton,Typography,Menu,MenuItem} from '@mui/material';


export const UserWidget = ({anchorElUser,handleOpenUserMenu,handleCloseUserMenu,cerrarSesionMenu}) => {

    return (<>
         <Box sx={{ flexGrow: 0 }}>
       
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <UserLogo/>
            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

                <MenuItem key={"perfil"} >
                  <Link to="/profile" onClick={handleCloseUserMenu}> <Typography textAlign="center">Perfil</Typography></Link>
                </MenuItem>
                <MenuItem key={"Cerrar Sesion"} >
                  <Typography textAlign="center" onClick={cerrarSesionMenu }>Cerrar Sesion</Typography>
                </MenuItem>
              
            </Menu>
      </Box>
     
     </>
     )
}
