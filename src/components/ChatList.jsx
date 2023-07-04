import { Divider, useTheme, Box, Badge, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tokens} from '../theme';


const StyleBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: 'ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(2.4)',
          opacity: 0,
        },
      },
}))

function ChatList({name, msg, time, img}) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
     <Box display="flex" justifyContent="space-between" gap="15px" p="10px">
       <Box display="flex" gap="15px">
           <StyleBadge
            overlap="circular"
            anchorOrigin={{vertical: "bottom", horizontal:"right"}}
            variant="dot"
           >
              <Avatar alt="Remy Sharp" src={`../../assets/${img}`} />
           </StyleBadge>
           <Box>
            <Typography variant="h5" fontWeight="bold" color={colors.primary[100]}>{name}</Typography>
            <Typography variant="body2" color={colors.grey[200]}>{msg}</Typography>
         </Box>
       </Box>
       <Box >
         <Typography variant="body2" color={colors.grey[200]}>{time}</Typography>
        </Box>
     </Box>
     <Divider />
    </>

  );
}

export  default ChatList