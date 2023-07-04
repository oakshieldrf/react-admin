import {useTheme, Typography, Card, CardContent, CardHeader, IconButton} from '@mui/material';
import { tokens} from '../theme';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';


function CardIcon({title, img}) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const url = `../../assets/${img}`

  return (
    <Card sx={{backgroundColor:colors.primary[400], p:"5px", minWidth: 200, cursor:"pointer" }}>
        <CardHeader sx={{p:"0"}} action={
            <IconButton 
                type="button"
                id="menu-card-button"
            >
                <MoreVertTwoToneIcon />
            </IconButton>
        }>
        </CardHeader>
        <CardContent>
            <img src={url} alt="folder"  style={{ width: 80, height: 80, display: "block", marginLeft: "auto", marginRight:"auto" }}/>
            <Typography variant="body1" fontWeight="bold" textAlign="center">{title}</Typography>
        </CardContent>
    </Card>

  );
}

export default CardIcon