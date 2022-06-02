import React, { Fragment } from 'react'
import { ListOfCategories } from './../components/ListOfCategories'
import { ListOfPhotoCards } from './../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const HomePage = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
export const Home = React.memo(HomePage, (prevProps, props) => {
  return (prevProps.id === props.id)
})
