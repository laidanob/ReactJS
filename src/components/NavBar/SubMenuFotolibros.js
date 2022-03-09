import {useState} from 'react'
import {Typography,Menu,Button,MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';

export const SubMenuFotolibros = ({ruta}) => {
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
    
    const open = Boolean(anchorElSubMenu);
   
    const handleClick = (event) => {
        setAnchorElSubMenu(event.currentTarget);
    };
   
    const handleClose = () => {
        setAnchorElSubMenu(null);}
  
  
  return <>
    <MenuItem key={"fotolibros"} >
        <Button onClick={handleClick}><Typography color={(ruta === "/fotolibros") ? "primary.main" : ""} sx={{'&:hover': { color: "primary.main"}}}>FOTOLIBROS</Typography></Button>
    </MenuItem>
      <MenuItem  onClick={handleClose}key={"fotolibropremium"} >
          <Menu id="basic-menu"
              anchorEl={anchorElSubMenu}
              open={open}
              onClose={handleClose}
          >
              <MenuItem onClick={handleClose}>
                  <Link component={Link} to="/fotolibropremium">
                    <Typography color={(ruta === "/fotolibropremium") ? "primary.main" : ""} sx={{'&:hover': { color: "primary.main"}}} 
                      >
                        PREMIUM
                    </Typography>
                </Link>
              </MenuItem>
          </Menu>
      </MenuItem>
      </>
}
