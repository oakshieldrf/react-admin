import { Box, useTheme, InputBase, IconButton, Typography, Divider} from "@mui/material";
import Header from "../../components/Header";
import ContactCard from "../../components/ContactCard"
import UserList from "../../components/UserList"
import {tokens} from '../../theme'
import { conexionesData } from "../../data/mockData";
import SearchIcon from "@mui/icons-material/Search";


const Conexiones = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Conexiones" subtitle="Lista de conexiones del usuario" />
      <Box>
        <Box display="flex"
          flexDirection="flex-start"
          borderRadius="3px"
          mb="20px"
        >
          {/* BUSCADOR */}
          <Box backgroundColor={colors.primary[400]}>
            <InputBase sx={{ml:2}}  color={colors.primary[100]} placeholder="Buscar un contacto" />
            <IconButton type="button" sx={{p:1}}>
                <SearchIcon />
            </IconButton>
          </Box>
        </Box>
          {/* SECCION CONTACTOS */}
        <Box display="flex" gap="30px" mt="40px">
          {/* CARDS CONTACTOS */}
          <Box flex="3">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">Mis conexiones</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-start" gap="20px" flexWrap="wrap" m="20px 0">
              {conexionesData.map((item)=>
                <ContactCard nombre={item.nombre} img={item.img} />
              )}
            </Box>
            <Typography variant="h5" align="center">Cargar mas</Typography>
          </Box>

          {/* GENTE QUE QUIZAS CONOZCAS */}
          <Box flex="1" backgroundColor={colors.primary[400]} p="20px 10px">
            <Typography variant="h5" align="center" mb="15px" fontWeight="bold">Gente que quizas conozcas</Typography>
            {conexionesData.map((item)=>
              <UserList nombre={item.nombre} img={item.img} />
            )}
            <Typography variant="h5" align="center" mt="30px" fontWeight="bold">Descubrir por posición</Typography>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Project Manager</Typography>
              <Typography variant="body1" align="center">10</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Data Analyst</Typography>
              <Typography variant="body1" align="center">10</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Backend Developer</Typography>
              <Typography variant="body1" align="center">10</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Frontend Developer</Typography>
              <Typography variant="body1" align="center">10</Typography>
            </Box>
          <Divider />
          {/* UBICACION */}
            <Typography variant="h5" align="center" mt="30px" fontWeight="bold">Descubrir por ubicación</Typography>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>CDMX</Typography>
              <Typography variant="body1" align="center">8</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Estado de México</Typography>
              <Typography variant="body1" align="center">10</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Guadalajara, Jalisco</Typography>
              <Typography variant="body1" align="center">18</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" m="15px 0">
              <Typography variant="h5" align="center" color={colors.primary[100]}>Monterrey Nuevo León</Typography>
              <Typography variant="body1" align="center">4</Typography>
            </Box>

              
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Conexiones;



