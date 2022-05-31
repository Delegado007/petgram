import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWhitQuery } from './container/PhotoCardWhitQuery'


export const App = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const detailId = urlParams.get("detail")

  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWhitQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </Fragment>

      }

    </div>
  )
}


