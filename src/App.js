import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}


