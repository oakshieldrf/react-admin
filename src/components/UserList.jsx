import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, useTheme } from '@mui/material';
import { tokens} from '../theme';



function UserList({nombre, img}) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <>
     <Box display="flex" justifyContent="flex-start" gap="15px" p="10px">
       <img 
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/${img}`}
            style={{cursor:"pointer",borderRadius:"50%"}}
        />
       <Box>
           <Typography variant="h5" fontWeight="bold" color={colors.primary[100]}>{nombre}</Typography>
           <Typography variant="body2" color={colors.grey[200]}>Diseñador UX</Typography>
       </Box>
     </Box>
     <Divider />
    </>

  );
}

export  default UserList