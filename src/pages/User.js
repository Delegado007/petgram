import React, { useContext } from "react";
import { Context } from "../context";
import { SubmitButton } from "../SubmitButton";
import { Helmet } from 'react-helmet'


export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Helmet>
        <title>{`User | Petgram`}</title>
        <meta name='description' content={`Perfil en Petgram`} />
      </Helmet>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
