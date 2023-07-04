import { 
    useTheme, 
    Typography,
    Button,
    Box
} from "@mui/material"; 
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { tokens } from "../theme";


const PriceCard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
    display="flex" 
    flexDirection="column" 
    width={300} 
    alignItems="center"
    gap={2}
    p={"40px 30px"}
    backgroundColor={colors.primary[400]}>
        <WorkspacePremiumIcon sx={{fontSize:90}} />
        <Typography variant="h2" fontWeight="bold"> Plan basico</Typography>
        <Typography variant="body1" >There are many variations of passages of Lorem Ipsum available but the majority is have suffered alteration in that some form by injected humour or randomised words which don't look even slightly.</Typography>
        <Typography variant="h2" fontWeight="bold" m="15px 0"> $19.00 MXN</Typography>
        <Button fullWidth variant="contained" sx={{fontSize:15, color: colors.primary[900], backgroundColor: colors.primary[100]}}>Comprar</Button>
    </Box>
  );
};

export default PriceCard;
