import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

export const NewProductForm = ({ initialValues, handleEnviar }) => {
  const validorYup = Yup.object().shape({
    nombre: Yup.string()
      .required("Ingrese un Nombre")
      .min(3, "Nombre Demasiado Corto"),
    categoria: Yup.string().required("Es obligatorio"),
    precio: Yup.number("Tiene que ser un numero")
      .required("Ingrese Un precio")
      .min(1, "El precio no puede ser negativo"),
    stock: Yup.number("Tiene que ser un numero")
      .required("Ingrese Un stock")
      .min(1, "El stock tiene que ser positivo"),
    desc: Yup.string()
      .required("Ingrese una descripcion")
      .min(6, "Intenta poner una descripcion mas larga"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validorYup}
      onSubmit={(valores, resetForm) => {
        handleEnviar(valores, resetForm);
      }}
    >
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
              id="outlined-required"
              label="Nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              name="nombre"
              onBlur={formik.handleBlur}
              error={
                formik.touched.nombre && formik.errors.nombre ? true : false
              }
              helperText={formik.errors.nombre}
              margin="normal"
            />

            <TextField
              required
              id="outlined-required"
              label="Descripcion"
              value={formik.values.desc}
              onChange={formik.handleChange}
              name="desc"
              onBlur={formik.handleBlur}
              error={formik.touched.desc && formik.errors.desc ? true : false}
              helperText={formik.errors.desc}
              multiline
              rows={4}
              margin="normal"
            />

            <TextField
              required
              id="outlined-required"
              label="Precio"
              value={formik.values.precio}
              onChange={formik.handleChange}
              name="precio"
              onBlur={formik.handleBlur}
              error={
                formik.touched.precio && formik.errors.precio ? true : false
              }
              helperText={formik.errors.precio}
              type="number"
              margin="normal"
            />
            <TextField
              required
              id="outlined-required"
              label="Stock"
              value={formik.values.stock}
              onChange={formik.handleChange}
              name="stock"
              onBlur={formik.handleBlur}
              error={formik.touched.stock && formik.errors.stock ? true : false}
              helperText={formik.errors.stock}
              type="number"
              margin="normal"
            />
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Categoria
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper-label"
                label="Categoria"
                error={
                  formik.touched.categoria && formik.errors.categoria
                    ? true
                    : false
                }
                value={formik.values.categoria}
                name="categoria"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helpertext={formik.errors.categoria}
                margin="dense"
              >
                <MenuItem disabled value={""}>
                  Seleccionar Categoria
                </MenuItem>
                <MenuItem value={"ContenedorPendrive"}>
                  Contenedor Pendrive
                </MenuItem>
                <MenuItem value={"ContenedorImagenes"}>
                  Contenedor Imagenes
                </MenuItem>
                <MenuItem value={"Pendrive"}>Pendrive</MenuItem>
                <MenuItem value={"Impresiones"}>Impresiones</MenuItem>
              </Select>
              <FormHelperText>{formik.errors.categoria}</FormHelperText>
            
            </FormControl>
            <TextField
              required
              id="outlined-required"
              label="Ruta Imagen"
              value={formik.values.img}
              onChange={formik.handleChange}
              name="img"
              onBlur={formik.handleBlur}
              error={formik.touched.img && formik.errors.img ? true : false}
              helperText={formik.errors.img}
              margin="normal"
            />
            <Button type="submit"  endIcon={<SendIcon />}>
              Enviar
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
