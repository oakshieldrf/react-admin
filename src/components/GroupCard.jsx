import { 
    useTheme, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography,
    Button,
    Avatar,
    AvatarGroup
} from "@mui/material"; 
import { tokens } from "../theme";

const GroupCard = ({nombre, img}) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: colors.primary[400] }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`../../assets/${img}`}
        title="group-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" >
            538 miembros
        </Typography>
        <Typography variant="body2" mt={2}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
        <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="../../assets/user-1.png" />
            <Avatar alt="Remy Sharp" src="../../assets/user-2.png" />
            <Avatar alt="Remy Sharp" src="../../assets/user-3.png" />
        </AvatarGroup>
        <Button variant="outlined" display="flex" sx={
            { 
                backgroundColor: colors.greenAccent[500],
                fontWeight: "bold"
            }}>
            Unirse
        </Button>
      </CardActions>
    </Card>
  );
};

export default GroupCard;
