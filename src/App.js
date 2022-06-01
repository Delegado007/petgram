import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import Context from './context';




export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />
      <Routes>
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='user' element={<User />} />
              </Routes>
              : <Routes>
                <Route path='/favs' element={<NotRegisteredUser />} />
                <Route path='/user' element={<NotRegisteredUser />} />
              </Routes>
        }
      </Context.Consumer>
      <NavBar />
    </BrowserRouter>
  )
}


