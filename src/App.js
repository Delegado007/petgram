import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <ListOfCategories />
  </Fragment>
)
