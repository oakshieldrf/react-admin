import { Box, useTheme, Typography, Divider, InputBase, IconButton, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import CardIcon from "../../components/CardIcon";
import { tokens,  } from "../../theme";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

import DiscFullTwoToneIcon from '@mui/icons-material/DiscFullTwoTone';
import SearchIcon from "@mui/icons-material/Search";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';

import { miDispositivoArchivos, libreriaArchivos, cardsArchivos, browseFilesArchivos } from "../../data/mockData";


const Archivos = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [progress, setProgress] = useState(50) //progress bar
  const [date, setDate] = useState(''); // select fecha

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <Box m="20px">
      <Header title="Archivos" subtitle="Gestor de archivos" />
      <Box height="75vh">
        <Box display="flex" gap="20px">
          <Box flex="1" backgroundColor={colors.primary[400]} p="15px">
            <Typography variant="h5" fontWeight="bold">Mi dispositivo</Typography>
            <List m="15px 0">
                {miDispositivoArchivos.map((item,key)=>
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
            <Divider/>
            <Typography variant="h5" fontWeight="bold" mt="15px">Libreria de archivos</Typography>
            <List m="15px 0">
                {libreriaArchivos.map((item,key)=>
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
              <Divider/>
              <Typography variant="h5" fontWeight="bold" mt="15px">Estado del almacenamiento</Typography>
              <Box display="flex" m="20px 0" gap="20px">
                <DiscFullTwoToneIcon fontSize="large"/>
                <Box >
                  <Typography variant="h5" fontWeight="bold" mb="10px">32.3GB utilizados de 50GB </Typography>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
              </Box>
          </Box>
          {/* AREA DE ARCHIVOS */}
          <Box flex="3" backgroundColor={colors.primary[400]} p="15px">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex"
                  backgroundColor={colors.primary[400]}
                  borderRadius="3px"
                >
                  <InputBase sx={{ml:2, flex:1}} placeholder="Buscar..." />
                  <IconButton type="button" sx={{p:1}}>
                      <SearchIcon />
                  </IconButton>
                </Box>
                <Box display="flex" justifyContent="flex-end" gap="15px" >
                    <Button variant="contained" startIcon={<AddCircleTwoToneIcon />} color="secondary" sx={{color:"white", fontWeight:"bold"}}>crear</Button>
                    <Button variant="contained" startIcon={<DriveFolderUploadTwoToneIcon />} color="secondary" sx={{color:"white", fontWeight:"bold"}}>subir</Button>
                </Box>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold" mt="20px">Archivos</Typography>
                <Typography variant="h6" mb="10px">Acceso rapido a archivos</Typography>
                  <Box display="flex" justifyContent="space-between" flexWrap="wrap" p="20px 0" gap="20px">
                    {cardsArchivos.map((item) => 
                      <CardIcon title={item.title} img={item.img}  />
                    )}
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h5" fontWeight="bold" mt="20px">Buscar Archivos</Typography>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-label" >Fecha</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={date}
                          label="Fecha"
                          onChange={handleChangeDate}
                          sx={{border: "none"}}
                        >
                          <MenuItem value={10}>Ayer</MenuItem>
                          <MenuItem value={2}>Semana pasada</MenuItem>
                          <MenuItem value={3}>Mes pasado</MenuItem>
                          <MenuItem value={4}>Año pasado</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>

                  <Box display="flex" justifyContent="space-between" flexWrap="wrap" p="20px 0" gap="20px">
                    {browseFilesArchivos.map((item) => 
                      <CardIcon title={item.title} img={item.img}  />
                    )}
                  </Box>
              </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Archivos;
