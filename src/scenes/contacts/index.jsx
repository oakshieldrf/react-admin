import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";


const columns = [
    {field: "id", headerName:"ID", flex:0.5},
    {field: "registrarId", headerName:"Registrar ID"},
    {
      field: "nombre",
      headerName:"Nombre",
      flex:1,
      cellClassName: "name-column--cell"
    },
    {
      field: "edad",
      headerName: "Edad",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "telefono",
      headerName: "No. telefono",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
    },
    {
      field: "direccion",
      headerName: "Direccion",
      flex: 1,
    },
    {
      field: "ciudad",
      headerName: "Ciudad",
      flex: 1,
    },
    {
      field: "codigoPostal",
      headerName: "Codigo Postal",
      flex: 1,
    },
];


const Contacts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
    <Box m="20px">
        <Header title="Contactos" subtitle="Visualiza tus contactos" />
        <DataTable 
            data={mockDataContacts}
            columns={columns}
            colors={colors}
        />
    </Box>
    );
};


export default Contacts;