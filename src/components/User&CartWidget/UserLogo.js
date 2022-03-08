import React, {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../context/AuthContext';

export const UserLogo = () => {
  const {usuario} = useAuth()
  console.log("error en widget",!usuario)
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    if(!usuario){
    return console.log("error en widget",usuario)
  }
  else{return {
    
    sx: {
      bgcolor: stringToColor(usuario.displayName),
    },
    children: `${usuario.displayName.split(' ')[0][0]}${usuario.displayName.split(' ')[1][0]}`,
  };}
}

  
  
  return   <Stack direction="row" spacing={2}>
  <Avatar {...stringAvatar()} />



  





</Stack>
};
