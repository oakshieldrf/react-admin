import { Box, Button, Typography, useTheme, Divider, IconButton } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

import { tokens } from "../theme";
 

const ContactCard = ({nombre, img}) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box width="285px" backgroundColor={colors.primary[400]} p="10px" border="5px">
        <Box display="flex" flexDirection="column" alignItems="center" m="10px">
            <img 
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/${img}`}
                style={{cursor:"pointer",borderRadius:"50%"}}
            />
            <Typography variant="h4"  mt="10px">
                {nombre}
            </Typography>
        </Box>
        <Divider />
        <Box m="10px 0">
            <Typography vaiant="h4" color={colors.greenAccent[400]} fontWeight="bold">
            Web Developer
            </Typography>
            <Typography variant="body2">
            Corp Integrated
            </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="10px" >
            <Box >
               <IconButton type="button" sx={{p:1}}>
                  <FacebookRoundedIcon />
               </IconButton>
               <IconButton type="button" sx={{p:1}}>
                  <TwitterIcon />
               </IconButton>
               <IconButton type="button" sx={{p:1}}>
                  <TelegramIcon />
               </IconButton>

            </Box>
            <Button variant="contained" size="small" color="secondary">Seguir</Button>
        </Box>
    </Box>
  );
};



export default ContactCard;


