import React, { useContext } from "react";
import { Context } from "../context";
import { UserForm } from "../components/UserForm";
import { LOGIN } from "../api/queries";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'


export const Login = () => {
  const { activateAuth } = useContext(Context)
  const [
    loginMutation,
    { data: dataLogin, loading: loginLogin, error: errorLogin }
  ] = useMutation(LOGIN)
  const errorMsg = errorLogin && 'Problema de credenciales'

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })

  }
  return (
    <>
      <Helmet>
        <title>{`Login | Petgram`}</title>
        <meta name='description' content={`Si estas registrado puedes loguearte aquí en Petgram`} />
      </Helmet>
      <UserForm error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} disabled={loginLogin} />
      <span>No tienes cuenta? <Link to="/register">Crear Cuenta</Link></span>
    </>
  )
}
