import React from 'react';
import { RenderProp } from '../container/GetFavorites';
import { Helmet } from 'react-helmet'

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tus Favoritos</title>
        <meta name='description' content='Tus mascotas favoritas se encuentran aquí' />
      </Helmet>
      <h1>Favs</h1>
      <RenderProp />
    </>
  )
}
