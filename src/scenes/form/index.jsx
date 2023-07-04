import { Box} from "@mui/material";
import Header from "../../components/Header";
import Form from "./form";



const PageForm = () => {
    return(
        <Box m="20px">
            <Header title="FORMULARIO" subtitle="Ejemplo de un formulario" />
            <Form />
        </Box>
    );
};




export default PageForm;