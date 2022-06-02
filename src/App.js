import React, { useContext } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Context } from './context';
import { NotFound } from './pages/NotFound';




export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />
      <Routes>
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/login' element={isAuth ? <Navigate to="/" replace={true} /> : <Login />} />
        <Route path='/register' element={isAuth ? <Navigate to="/" replace={true} /> : <Register />} />
        <Route path='/favs' element={!isAuth ? <Navigate to="/login" replace={true} /> : <Favs />} />
        <Route path='/user' element={!isAuth ? <Navigate to="/login" replace={true} /> : <User />} />
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}


