import React from 'react'
import { Helmet } from 'react-helmet'


export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{`Not Found | Petgram`}</title>
        <meta name='description' content={`Vaya esta página no existe en Petgram`} />
      </Helmet>
      <h1>La página no existe! =(</h1>
    </>
  )
}
