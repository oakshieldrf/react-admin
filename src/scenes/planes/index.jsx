import { Box } from "@mui/material";
import Header from "../../components/Header";
import PriceCard from "../../components/PriceCard";

const Planes = () => {
  return (
    <Box m="20px">
      <Header title="Planes" subtitle="Planes de precios" />
      <Box height="75vh" display="flex" justifyContent="space-around">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </Box>
    </Box>
  );
};

export default Planes;
