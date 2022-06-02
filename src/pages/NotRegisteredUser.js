import React, { Fragment } from "react";
import Context from "../context";
import { UserForm } from "../components/UserForm";
import { REGISTER, LOGIN } from "../api/queries";
import { useMutation } from "@apollo/client";

export const NotRegisteredUser = () => {
  const [
    registerMutation,
    { data: dataRegister, loading: loadingRegister, error: errorRegister }
  ] = useMutation(REGISTER)
  const [
    loginMutation,
    { data: dataLogin, loading: loginLogin, error: errorLogin }
  ] = useMutation(LOGIN)


  return (
    <Context.Consumer>
      {
        <Fragment>
          ({activateAuth}) => {
            const onSubmit = ({email, password}) => {
              const input = {email, password}
          const variables = {input}
          registerMutation({variables})
          .then(activateAuth)
            }
          const errorMsg = errorRegister && 'El usuario ya existe o hay algun problema'
          return (
          <UserForm title='Registrarse' error={errorMsg} onSubmit={onSubmit} disabled={loadingRegister} />
          )
          }
        }
          {
            ({ activateAuth }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                loginMutation({ variables })
                  .then(activateAuth)
              }
              const errorMsg = errorRegister && 'El usuario ya existe o hay algun problema'

              return (
                <UserForm title='Iniciar sesión' onSubmit={activateAuth} disabled={loadingRegister} />
              )
            }
          }
        </Fragment>
    </Context.Consumer>
  )
}
