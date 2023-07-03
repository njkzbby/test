import styles from '../../styles/Home.module.css'
import { Button } from '@mui/material'
import { useContext } from 'react'
import LoginContext from './Context'

const Header = () => {

    const { open, setOpen, isLogin, setIsLogin } = useContext(LoginContext)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleExit = () => {
        setIsLogin(false)
    }

    return (
        <>
            <div className={styles.header}>header
                {!isLogin
                    ? <Button onClick={handleOpen} variant="contained">Login</Button>
                    : <Button onClick={handleExit} variant="contained">exit</Button>}
            </div>

        </>
    )
}
export default Header