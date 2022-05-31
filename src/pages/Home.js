import React, { Fragment } from 'react'
import { ListOfCategories } from './../components/ListOfCategories'
import { ListOfPhotoCards } from './../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'


export const Home = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
