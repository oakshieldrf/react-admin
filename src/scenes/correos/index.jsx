import { Box, useTheme, Typography, Divider, InputBase, IconButton, Button, MenuItem, Menu } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import UserList from "../../components/UserList"
import { tokens } from "../../theme";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DataTable from "../../components/DataTable";

import SearchIcon from "@mui/icons-material/Search";
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { bandejaMenu, conexionesData, etiquetas, mockDataInbox } from "../../data/mockData";

const Correos = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field: "id", headerName:"ID", flex:0.5},
    {field: "favorito", fieldName: "Favoritos", flex: 0.5,
      renderCell: ({ row: { favorito } }) => {
        return (
          <StarIcon />
        );
        },
    },
    {field: "autor", fieldName: "Autor", flex: 1},
    {field: "asunto", fieldName: "Asunto", flex: 1},
    {field: "recibido", fieldName: "Recibido", flex: 0.5},
  
  ];

  const [progress, setProgress] = useState(50) //progress bar
  const [date, setDate] = useState(''); // select fecha

  let filterCons = conexionesData.filter((item, index, array)=>  index < 3);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

// Control de menu desplegable
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // Para el dropdown
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box m="20px">
      {/* HEADER */}
      <Header title="Correos" subtitle="Bandeja de entrada de correo" />
      {/* CONTENEDOR PRINCIPAL */}
      <Box height="75vh">
        <Box display="flex" gap="20px">
          <Box flex="1" backgroundColor={colors.primary[400]} p="15px">
            <Button fullWidth variant="contained" color="secondary" sx={{color:"white", fontWeight: "bold"}}>redactar</Button>
          {/* BANDEJA MENU */}
            <List m="15px 0">
                {bandejaMenu.map((item,key)=>
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
          {/* TAGS */}
            <Typography variant="h5" fontWeight="bold" mt="15px">Etiquetas de archivos</Typography>
            <List m="15px 0">
                {etiquetas.map((item,key)=>
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
            {/* CHAT */}
              <Typography variant="h5" fontWeight="bold" mt="15px">Chat</Typography>
              {
                filterCons.map(item => <UserList nombre={item.nombre} img={item.img} />)
              }
          </Box>
          {/* CONTENEDOR INBOX */}
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
                    <IconButton variant="contained" color="secondary"><DeleteIcon /></IconButton>
                    <IconButton variant="contained" color="secondary"><LocalOfferIcon /></IconButton>
                    <IconButton
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Marcar como no leido</MenuItem>
                        <MenuItem onClick={handleClose}>Marcar como importante</MenuItem>
                        <MenuItem onClick={handleClose}>Añadir a tareas</MenuItem>
                        <MenuItem onClick={handleClose}>Añadir a favoritos</MenuItem>
                        <MenuItem onClick={handleClose}>Silenciar</MenuItem>
                    </Menu>
                </Box>
              </Box>
              {/* LISTA DE INBOX */}
              <Box>
                <DataTable 
                  data={mockDataInbox}
                  columns={columns}
                  colors={colors}
                />
              </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Correos;
