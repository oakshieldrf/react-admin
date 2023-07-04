import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";


const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "telefono",
      headerName: "Teléfono",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
    },
    {
      field: "costo",
      headerName: "Costo",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.costo}
        </Typography>
      ),
    },
    {
      field: "fecha",
      headerName: "Fecha",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="FACTURAS" subtitle="Lista de balances de facturas" />
      <DataTable 
            data={mockDataInvoices}
            columns={columns}
            colors={colors}
          />
    </Box>
  );
};

export default Invoices;
