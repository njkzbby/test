import { Modal, Box, Button, Typography } from "@mui/material";
import { useState, useContext } from "react";
import LoginContext from "./Context";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Login = (data) => {

    const { open, setOpen, isLogin, setIsLogin } = useContext(LoginContext)

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        setIsLogin(true)
        setOpen(false)
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                {<Button onClick={handleLogin} variant="contained">login now</Button>}
            </Box>
        </Modal>
    )
}

export default Login