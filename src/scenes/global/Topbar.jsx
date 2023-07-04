import { Box, IconButton, useTheme, InputBase, Menu, MenuItem } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import { useContext, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ButtonModalForm from '../form/button-form';

const Topbar = () => {
    const colorMode = useContext(ColorModeContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // Para el dropdown
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <Box 
        display="flex"
        justifyContent="space-between"
        p={2}
        >
            {/* SEARCH BAR */}
            <Box display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ml:2, flex:1}} placeholder="Buscar..." />
                <IconButton type="button" sx={{p:1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex">
                <ButtonModalForm title="Nuevo registro" icon={<AddBoxIcon/>} />
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === "dark" ?
                        (<LightModeOutlinedIcon />) :
                        (<DarkModeOutlinedIcon />) 
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonOutlinedIcon />
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
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Configuracion</MenuItem>
                    <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                </Menu>

            </Box>
        </Box>
    )

}


export default Topbar;