import { Box, TextField, Button, Typography, useTheme, Link } from "@mui/material";
import {Formik} from 'formik'
import * as yup from "yup"
import { tokens } from "../../theme";

import Header from "../../components/Header";
 

const ResetPassword = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Reestablecer la contraseña" subtitle="Reestablece la contraseña de tu cuenta" />
      <Box height="95vh" m="0 auto" width="30vw">
        <Typography variant="h2" fontWeight="bold" align="center" mb="20px">
          Reestablecer contraseña de tu cuenta de usuario
        </Typography>
        <Typography variant="h5" fontWeight={200} align="left" mb="40px" color={colors.grey[100]}>
          Si olvidaste tu contraseña, solicita reestablecerla con tu cuenta de correo electrónico
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
              </Box>
            </form>
          )}
        </Formik>
        <Box display="flex" justifyContent="center" flexDirection="column" gap="20px" m="40px 0">
          <Button fullWidth type="submit" color="secondary" variant="contained">
            Reestablecer contraseña
          </Button>
            <Link href="/login" color="secondary" fontWeight="bold">Regresar a iniciar sesión</Link>
        </Box>
      </Box>
    </Box>
  );
};


const checkoutSchema =yup.object( ).shape({
    email: yup.string().email("El correo es invalido").required("Campo obligatorio"),
});


const initialValues = {
    email:""
};


export default ResetPassword;

