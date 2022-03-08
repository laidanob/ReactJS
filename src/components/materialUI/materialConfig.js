import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
    
  palette: {
      primary: {
        light: '#F0F0F0',
        main: '#D1AF94',
        dark: '#1D2225',
        contrastText: '#57666C',

      },
      secondary: {
          light: '#F0F0F0',
          main: '#D1AF94',
          dark: '#1D2225',
          contrastText: '#57666C',
        },
    white: {
        main: '#ffffff',
        contrastText: '#fff',
},
    },
    typography: {
            fontFamily: 'Lato',
            color: "#57666C"
      },   
    components:{
      MuiMenuItem:{
        styleOverrides:{
          root: {
            "&.Mui-selected": {
              backgroundColor: "primary.main",
          }
        }
      }
    }
  }     
  })

  export {theme}