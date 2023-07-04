import { Box, TextField, Button, Typography, useTheme, Link } from "@mui/material";
import {Formik} from 'formik'
import * as yup from "yup"
import useMediaQuery from '@mui/material/useMediaQuery';
import { tokens } from "../../theme";

import Header from "../../components/Header";
 

const Login = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Login" subtitle="Inicia sesion en tu cuenta" />
      <Box height="95vh" m="0 auto" width="30vw">
        <Typography variant="h2" fontWeight="bold" align="center" mb="20px">
          Inicio de Sesión
        </Typography>
        <Typography variant="h6" fontWeight={200} align="center" mb="40px" color={colors.grey[100]}>
          Ingresa a tu cuenta
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
          <Button fullWidth type="submit" color="secondary" variant="contained">
            Ingresar
          </Button>
          <Typography align="center">
            ¿No estas registrado? 
            <Link href="/registro" color="secondary" fontWeight="bold">  Crea una cuenta nueva</Link>
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};


const checkoutSchema =yup.object( ).shape({
    email: yup.string().email("El correo es invalido").required("Campo obligatorio"),
    password: yup.string().min(7).required("Campo obligatorio"),

});


const initialValues = {
    email: "",
    password:""
};


export default Login;

