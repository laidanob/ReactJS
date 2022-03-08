import React from 'react'
import { Link } from 'react-router-dom';
import { CartWidget } from '../User&CartWidget/CartWidget';
import logo from '../../logoWhite.png'
import {FaGithub } from 'react-icons/fa';
import { UserLogo } from '../User&CartWidget/UserLogo';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useCartContext } from '../context/CartContext';


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
