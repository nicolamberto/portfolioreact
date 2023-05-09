import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Presentacion from './components/Presentacion'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <NavBar/>
      <Presentacion/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </>
    
  )
}

export default App
