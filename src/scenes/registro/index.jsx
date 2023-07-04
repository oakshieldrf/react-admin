import { Box, TextField, Button, Typography, useTheme, Link, Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import {Formik, yupToFormErrors} from 'formik'
import * as yup from "yup"
import useMediaQuery from '@mui/material/useMediaQuery';
import { tokens } from "../../theme";

import Header from "../../components/Header";
 

const Registro = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Registro" subtitle="Registra una cuenta de usuario" />
      <Box height="95vh" m="0 auto" width="30vw">
        <Typography variant="h2" fontWeight="bold" align="center" mb="20px">
          Registro
        </Typography>
        <Typography variant="h6" fontWeight={200} align="center" mb="40px" color={colors.grey[100]}>
          Ingresa tus datos para registrar una cuenta nueva
        </Typography>

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          })=>(
            <form onSubmit={handleSubmit}>
              <Box 
              display="flex"
              flexDirection="column"
              gap="20px"
              >
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nombre}
                    name="nombre"
                    error={!!touched.nombre && !!errors.nombre}
                    helperText={touched.nombre && errors.nombre}
                    size="small"
                /> 
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.apellido}
                    name="apellido"
                    error={!!touched.apellido && !!errors.apellido}
                    helperText={touched.apellido && errors.apellido}
                    size="small"
                /> 
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Correo electrónico"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    size="small"
                /> 
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Telefono"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.telefono}
                    name="telefono"
                    error={!!touched.telefono && !!errors.telefono}
                    helperText={touched.telefono && errors.telefono}
                    size="small"
                /> 
                <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Contraseña"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    size="small"
                /> 
              </Box>
            </form>
          )}
        </Formik>
        <Box display="flex" justifyContent="center" flexDirection="column" gap="20px" m="40px 0">
          <FormControlLabel control={<Checkbox color="secondary"/>} label="
             Estoy de acuerdo con las Politicas de privacidad  y Terminos y Condiciones"/>
          <Button fullWidth type="submit" color="secondary" variant="contained">
            Registrarse
          </Button>
          <Typography align="center">
            ¿Ya tienes una cuenta? 
            <Link href="/login" color="secondary" fontWeight="bold">  Inicia sesión</Link>
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const checkoutSchema =yup.object( ).shape({
    nombre: yup.string().required("Campo obligatorio"),
    apellido: yup.string().required("Campo obligatorio"),
    email: yup.string().email("El correo es invalido").required("Campo obligatorio"),
    telefono: yup.string().matches(phoneRegExp, "El numero de telefono es invalido").required("Campo obligatorio"),
    password: yup.string().min(7).required("Campo obligatorio"),

});





const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password:""
};


export default Registro;
