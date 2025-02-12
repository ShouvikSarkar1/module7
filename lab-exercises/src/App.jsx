import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates/BitcoinRates'
import EmojiChanger, { EmojiProvider } from './Context/EmojiContext'
import MyThemeProvider from './Context/MyThemeContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar/NavBar'

function App() {


  return (
    <>
  
    <MyThemeProvider>
      <NavBar/>
      <AppRoutes/>
    </MyThemeProvider>
    
    </>
  )
}

export default App
