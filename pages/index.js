import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import LoginContext from '../src/components/Context'
import { useContext } from 'react'

export default function Home() {
  const { open, setOpen, isLogin, setIsLogin } = useContext(LoginContext)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleExit = () => {
    setIsLogin(false)
  }

  return (
    <>
      <div className={styles.main}>
        main page
        {!isLogin ? <Button onClick={handleOpen} variant='contained'>Login</Button> : <Button onClick={handleExit} variant='contained'>exit</Button>}
      </div>

    </>
  )
}
