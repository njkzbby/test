import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@mui/material";
import { useState } from "react";
import Login from "./Login";
import LoginContext from "./Context";


const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <LoginContext.Provider value={{ open, setOpen, isLogin, setIsLogin }}>
            <Login open={open} setOpen={setOpen} handleClose={handleClose} />
            <Header />
            {children}
            <Footer />
        </LoginContext.Provider>

    )
}

export default Layout