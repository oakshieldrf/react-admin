// Boton que despliega un modal form
import { IconButton, Modal, Typography, Box, useTheme,   } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import Form from "./form";



const ButtonModalForm = ({icon, title}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: colors.grey[900],
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return(
        <div>
            <IconButton onClick={handleOpen}>
                {icon}
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2" color={colors.greenAccent[100]} align="center">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} color={colors.greenAccent[100]}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                <Form />
                </Box>
            </Modal>


        </div>
    )
};






export default ButtonModalForm;


