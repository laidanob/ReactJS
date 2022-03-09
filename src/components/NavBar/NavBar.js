import React, {useState} from 'react'
import logo from '../../logoBlack.png'
import { UserWidget } from '../User&CartWidget/UserWidget';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';
import { NavBarMenu } from './NavBarMenu';


export const NavBar = () => {
    
    const {cerrarSesion} = useAuth() 

      const [anchorElNav, setAnchorElNav] = useState(null);
      const [anchorElUser, setAnchorElUser] = useState(null);
    
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      const cerrarSesionMenu = () => {
        cerrarSesion()
        handleCloseUserMenu()
    
      }
  return (
    
    <AppBar color= "white" position="static">
        <Container maxWidth="xl">
        
            <Toolbar  disableGutters>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                <img id="logo" alt='logoRabbitFotolibros' src={logo} />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >  
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                        <NavBarMenu handleCloseUserMenu={handleCloseUserMenu}/>
                    </Menu>
               
                </Box>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >

                <img id="logo" alt='logoRabbitFotolibros' src={logo} />
                
                </Typography>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                
                    <NavBarMenu />
                
                </Box>

                <UserWidget anchorElUser={anchorElUser} handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} cerrarSesionMenu={cerrarSesionMenu} />

        
            </Toolbar>
        </Container>
  </AppBar>
    )
            }