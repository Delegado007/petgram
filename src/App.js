import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWhitQuery } from './container/PhotoCardWhitQuery'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const detailId = urlParams.get("detail")

  return (
    <BrowserRouter>
      <div>
        <GlobalStyles />
        <Logo />
        {
          detailId
            ? <PhotoCardWhitQuery id={detailId} />
            :
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
            </Routes>

        }
      </div>
    </BrowserRouter>
  )
}


