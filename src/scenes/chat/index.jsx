import { Box, IconButton, InputBase, useTheme, Avatar, Typography, Divider, TextField } from "@mui/material";
import Header from "../../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {TabsLayout} from "../../components/TabsLayout";
import { allTabItems } from "../../data/mockData";
import { tokens } from "../../theme";

const Chat = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const tabTitles = ["Chats", "Grupos", "Contactos"];
 

  return (
    <Box m="20px">
      <Header title="Chat" subtitle="Interfaz de chat" />
      <Box display="flex" gap="30px" m="20px 90px">
          <Box flex="1" backgroundColor={colors.primary[400]}>
            <Box backgroundColor={colors.primary[400]} p="10px" display="flex" justifyContent="space-between">
              <InputBase sx={{ml:2}}  color={colors.primary[100]} placeholder="Buscar en el chat" />
              <IconButton type="button" sx={{p:1}}>
                <SearchIcon />
              </IconButton>
            </Box>
            <Box m="10px 0">
              <TabsLayout items={allTabItems} tabTitles={tabTitles}/>
            </Box>
          </Box>
          <Box flex="3" backgroundColor={colors.primary[400]} p="15px">
            {/* HEADER*/}
            <Box display="flex" justifyContent="space-between" p="0, 10px" mb= "20px">
                <Box display="flex" >
                  <Avatar alt="Remy Sharp" src="../../assets/user-4.png"   sx={{ width: 56, height: 56 }}/>
                  <Box  ml="20px">
                    <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[100]} mb="10px">Julio Cesar</Typography>
                    <Typography variant="body2" color={colors.grey[200]}>Última vez: Hace 2 hrs.</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <IconButton type="button" sx={{p:1}}>
                    <VideocamIcon />
                  </IconButton>
                  <IconButton type="button" sx={{p:1}}>
                    <LocalPhoneIcon />
                  </IconButton>
                  <IconButton type="button" sx={{p:1}}>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
            </Box>
            <Divider />
            {/* MENSAJES */}
            <Box display="flex" justifyContent="flex-start" mt="20px" >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar alt="Remy Sharp" src="../../assets/user-4.png"   sx={{ width: 44, height: 44 }}/>
                <Box display="flex" backgroundColor={colors.greenAccent[500]}
                    sx={{borderRadius: "9px", padding:"10px"}}
                >
                  <Typography variant="body1"  sx={{color:colors.whiteBlack[100]}} fontWeight="bold">¿Como estás?</Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="30px" >
              <Box display="flex" alignItems="center" gap="10px">
                <Box display="flex" backgroundColor={colors.blueAccent[300]}
                    sx={{borderRadius: "9px", padding:"10px"}}
                >
                  <Typography variant="body1" sx={{color:colors.whiteBlack[100]}} fontWeight="bold">Muy bien ¿Y tú?</Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-start" mt="30px" >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar alt="Remy Sharp" src="../../assets/user-4.png"   sx={{ width: 44, height: 44 }}/>
                <Box display="flex" backgroundColor={colors.greenAccent[500]}
                    sx={{borderRadius: "9px", padding:"10px", color:colors.whiteBlack[100]}}
                >
                  <Typography variant="body1" sx={{color:colors.whiteBlack[100]}} fontWeight="bold">Excelente, oye si me vas a pasar el libro que me dijiste</Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="30px" >
              <Box display="flex" alignItems="center" gap="10px">
                <Box display="flex" backgroundColor={colors.blueAccent[300]}
                    sx={{borderRadius: "9px", padding:"10px"}}
                >
                  <Typography variant="body1" sx={{color:colors.whiteBlack[100]}} fontWeight="bold">Claro, mañana te lo paso</Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-start" m="30px 0" >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar alt="Remy Sharp" src="../../assets/user-4.png"   sx={{ width: 44, height: 44 }}/>
                <Box display="flex" backgroundColor={colors.greenAccent[500]}
                    sx={{borderRadius: "9px", padding:"10px"}}
                >
                  <Typography variant="body1" sx={{color:colors.whiteBlack[100]}} fontWeight="bold">Muchas gracias</Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            {/* INPUT */}
            <Box display="flex" 
                 justifyContent="space-betweenº"
                 backgroundColor={colors.primary[400]} 
                 mt="30px" 
                 borderRadius="3px">
              <InputBase sx={{ml:2, flex:1}} placeholder="Envia tu mensaje..." variant="filled"/>
              <Box>
                <IconButton type="button" sx={{p:1}}>
                  <AttachFileIcon />
                </IconButton>
                <IconButton type="button" sx={{p:1}}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default Chat;
