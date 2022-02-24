import React, {useState} from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'


 const valoresSelect = [    {value:"-", label:"Seleccionar Una Categoria"},
                        {value:"Contenedor Pendrive", label:"Contenedor Pendrive"},
                        {value:"Contenedor Imagenes", label:"Contenedor Imagenes"},
                        {value:"Pendrive", label:"Pendrive"},
                        {value:"Impresiones", label:"Impresiones"}]


export const CustomSelect = () => {
  const [valor, setValor] = useState("-")

  const handleChange = (e) => {
      setValor(e.target.value)
  }
  
  return (
    <Select
                                required
                                id="outlined-required"
                                label="Categoria"
                                value={valor}
                                onChange={handleChange}
                                name="categoria"
                                // error={formik.errors.categoria}
                                // helperText={formik.errors.categoria}
                                margin="normal"
                                >
                            <MenuItem disabled value={"-"}>-</MenuItem>
                            <MenuItem value={"Contenedor Pendrive"}>Contenedor Pendrive</MenuItem>
                            <MenuItem value={"Contenedor Imagenes"}>Contenedor Imagenes</MenuItem>
                            <MenuItem value={"Pendrive"}>Pendrive</MenuItem>
                            <MenuItem value={"Impresiones"}>Impresiones</MenuItem>
          </Select>
  )
}
