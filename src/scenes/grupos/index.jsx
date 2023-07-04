import { Box, useTheme, IconButton, InputBase, Typography } from "@mui/material"; 
import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import UserList from "../../components/UserList";
import { tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import {gruposData} from '../../data/mockData';


const Grupos = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)


  return (
    <Box m="20px">
      <Header title="Grupos" subtitle="Lista de grupos de trabajo" />
      <Box>
        {/* BUSCADOR */}
        <Box display="flex"
            flexDirection="flex-start"
            borderRadius="3px"
            mb="20px"
          >
          <Box backgroundColor={colors.primary[400]}>
            <InputBase sx={{ml:2}}  color={colors.primary[100]} placeholder="Buscar un grupo" />
            <IconButton type="button" sx={{p:1}}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" gap="30px" mt="40px">
          <Box flex="3">
            <Box display="flex" justifyContent="flex-start" gap="20px" flexWrap="wrap" m="20px 0">
              {/* GRID GRUPOS */}
              {gruposData.map((item) => 
                <GroupCard nombre={item.nombre} img={item.img} />
              )}
            </Box>
          </Box>
          <Box flex="1" backgroundColor={colors.primary[400]} p="20px 10px" h="100%">
          <Typography variant="h5" align="center" mb="15px" fontWeight="bold">Grupos populares</Typography>
            {gruposData.map((item) => 
              <UserList nombre={item.nombre} img={item.img} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Grupos;
