import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { infoPerfil } from "../../data/mockData";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EditIcon from '@mui/icons-material/Edit';

import Header from "../../components/Header";


const Perfil = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box m="20px">
      <Header title="Perfil de usuario" subtitle="Datos de la cuenta del usuario" />
      <Box display="flex" justifyContent="center" gap="20px">
        {/* COLUMNA 1 */}
        <Box flex="1"  backgroundColor={colors.primary[400]}  p="13px 20px">
          <Box display="flex" justifyContent="flex-start" gap="10px" m="20px 0">
            <Box>
              <Avatar sx={{ bgcolor: colors.blueAccent[500] }}>N</Avatar>          
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="body" fontWeight="bold">
                Solovino Salazar
              </Typography>
              <Typography variant="body">
                usuario@correo.com
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box m="20px 0">
            <Typography variant="h5" m="10px 0">
                BALANCE DE CUENTA           
              </Typography>
              <Typography variant="h4" fontWeight="bold" m="10px 0">
                12.395769 MXN
              </Typography>
              <Typography variant="body" fontWeight="bold" m="10px 0">
                Pendiente 26,4851 MXN
              </Typography>
          </Box>
          <Divider />
          <Box m="20px 0">
            <nav aria-label="main mailbox folders">
              <List>
                {infoPerfil[0].map((item)=>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icono}
                      </ListItemIcon>
                      <ListItemText primary={item.campo} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </nav>
          </Box>
        </Box>
        {/* COLUMNA 2 */}
        <Box  flex="3" backgroundColor={colors.primary[400]} p="25px 20px">
          <Typography variant="h4" fontWeight="bold">
            Información Personal
          </Typography>
          <Typography variant="p">
            Información básica, como el nombre, apellido, datos de la cuenta        
          </Typography>

          {/* INFO BASICA */}
          <Typography variant="h5" fontWeight="bold" mt="40px">
            Información Básica
          </Typography>
          {infoPerfil[1].map((item, key) => 
            <div key={key}>
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Typography variant="body2" fontWeight="bold" >
                  {item.campo}
                </Typography>
                <Typography variant="body">
                  {item.valor}
                </Typography>
                <IconButton aria-label="edit" display="block">
                  <EditIcon />
                </IconButton>
              </Box>
              <Divider />
            </div>
          )}

          {/* INFO PRFERENCIAS */}
          <Typography variant="h5" fontWeight="bold" mt="40px">
                Preferencias
          </Typography>
          {infoPerfil[2].map((item, key) => 
            <div key={key}>
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Typography variant="body2" fontWeight="bold" >
                  {item.campo}
                </Typography>
                <Typography variant="body">
                  {item.valor}
                </Typography>
                <IconButton aria-label="edit" display="block">
                  <EditIcon />
                </IconButton>
              </Box>
              <Divider />
            </div>
          )}   
        </Box>
      </Box>
    </Box>
  );
};

export default Perfil;
