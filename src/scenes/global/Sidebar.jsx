import { Box, IconButton, Typography, useTheme, Collapse } from "@mui/material";
import { ProSidebar, Menu, MenuItem  } from "react-pro-sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import GroupsIcon from '@mui/icons-material/Groups';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatIcon from '@mui/icons-material/Chat';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import EmailIcon from '@mui/icons-material/Email';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return(
        <MenuItem
            active={selected===title}
            style={{
                color:colors.grey[100]
            }}
            onClick={()=>setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard")
    const [openSubMenu, setOpenSubMenu] = useState(true);

    const handleClick = () => {
      setOpenSubMenu(!openSubMenu);
    };

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                color: "#6870fa !important",
                },
                ".MuiBox-root":{
                    height: "100%"
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={()=> setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>ADMIN</Typography>
                                <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}   
                    </MenuItem>
                    {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <img 
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../assets/user-5.png`}
                                style={{cursor:"pointer",borderRadius:"50%"}}
                            />
                            <Box textAlign="center">
                                <Typography 
                                    variant="h2" 
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    style={{m:"10px 0 0 0"}}
                                    >
                                    Fernando
                                </Typography>
                                <Typography variant="h6" color={colors.greenAccent[500]}>
                                    Project Manager
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    )}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        {/* LISTA DE OPCIONES */}
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m:"15px 0 5px 20px"}}
                        >
                            Datos
                        </Typography>
                        <Item
                            title="Gestionar equipo"
                            to="/equipo"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contactos"
                            to="/contactos"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Balance de facturas"
                            to="/facturas"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m:"15px 0 5px 20px"}}
                        >
                            Graficas
                        </Typography>
                        <Item
                            title="Grafica de barras"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Grafica de paste"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Grafica de linea"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Grafica geografica"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m:"15px 0 5px 20px", cursor: "pointer"}}
                            onClick={handleClick}
                            display="flex"
                            justifyContent="space-between"
                            paddingRight= "15px"
                        >
                            <div>Páginas</div>
                            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                        </Typography>
                        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                            <Item
                                title="Formulario de perfil"
                                to="/form"
                                icon={<PersonOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Calendario"
                                to="/calendario"
                                icon={<CalendarTodayOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Pagina FAQ"
                                to="/faq"
                                icon={<HelpOutlineOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Perfil de usuario"
                                to="/perfil"
                                icon={<AccountBoxIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Registro"
                                to="/registro"
                                icon={<HowToRegIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Login"
                                to="/login"
                                icon={<LoginIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Reset password"
                                to="/reset"
                                icon={<PasswordIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Conexiones"
                                to="/conexiones"
                                icon={<SensorOccupiedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Grupos"
                                to="/grupos"
                                icon={<GroupsIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Planes de precios"
                                to="/planes"
                                icon={<AttachMoneyIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Chat"
                                to="/chat"
                                icon={<ChatIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Administrador de archivos"
                                to="/archivos"
                                icon={<DriveFileMoveIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Bandeja de correo"
                                to="/correos"
                                icon={<EmailIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Collapse>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};







export default Sidebar