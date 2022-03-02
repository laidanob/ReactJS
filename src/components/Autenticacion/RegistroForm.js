import React from 'react'
import { Link } from "react-router-dom"
import { TextField } from '@mui/material';
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import * as Yup from "yup"

export const RegistroForm = ({initialValues, handleEnviar, resultado}) => {
  
    const validadorYup = Yup.object().shape({
        name: Yup.string("Ingresar un Nombre y Apellido correcto")
        .required("Ingresar un Nombre y Apellido"),
        email: Yup.string()
                .email("Ingresar un mail correcto")
                .required("Ingresar un email"),
        phoneNumber: Yup.string()
                    .required("Ingresar un numero de telefono")
                    .min(4,"el numero deber tener mas de 4 digitos"),
        password: Yup.string()
                    .required("Ingresar una contraseña")
                    .min(6,"La contraseña tiene que tener 6 caractes minimo"),
        rePassword: Yup.string()
                    .required("Ingresar una contraseña")
                    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    })
  
    return (
    <Formik
        initialValues={initialValues}
        validationSchema={validadorYup}
        onSubmit={(valores, resetForm) => {
          handleEnviar(valores, resetForm);
        }} >
            {(formik) => (
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <Form id="agregaProducto" onSubmit={formik.handleSubmit}>
          <TextField
                required
                id="outlined-required email"
                label="Nombre Completo"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.name && formik.errors.name ? true : false
                }
                helperText={formik.errors.name}
                margin="normal"
            
            ></TextField>
             <TextField
                required
                id="outlined-required email"
                label="Numero Telefono"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                name="phoneNumber"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false
                }
                helperText={formik.errors.phoneNumber}
                margin="normal"
            
            ></TextField>
            
            
            
            <TextField
                required
                id="outlined-required email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                helperText={formik.errors.email}
                margin="normal"
            
            ></TextField>
            <TextField
                required
                id="outlined-required pass"
                label="Contraseña"
                type={formik.values.showPassword ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && formik.errors.password ? true : false
                }
                helperText={formik.errors.password}
                margin="normal"
                InputProps= {{ endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {formik.setFieldValue("showPassword",!formik.values.showPassword)}}
                        onMouseDown={(e) => {e.preventDefault()} }
                        edge="end">
                        {formik.values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }}
            ></TextField>

            <TextField
                required
                id="outlined-required rePass"
                label="Verificacion Contraseña"
                type={formik.values.showPassword ? 'text' : 'password'}
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                name="rePassword"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.rePassword && formik.errors.rePassword ? true : false
                }
                helperText={formik.errors.rePassword}
                margin="normal"
                InputProps= {{ endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {formik.setFieldValue("showPassword",!formik.values.showPassword)}}
                        onMouseDown={(e) => {e.preventDefault()} }
                        edge="end">
                        {formik.values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }}
            ></TextField>
             {resultado.tipo && <Alert severity={resultado.tipo}>{resultado.mensaje}</Alert>}
            <Box mt={5}>
            <Button sx={{mx:2}} variant="outlined"><Link to="/iniciar">
              Ya tengo cuenta
              </Link></Button>
            <Button sx={{mx:2}} type="submit" variant="contained">
              Registrarse
            </Button>
            </Box>

            </Form>
           

        </Box>
        )}
        </Formik>
  )
}
