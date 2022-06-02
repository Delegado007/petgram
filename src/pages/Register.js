import React, { useContext } from "react";
import { Context } from "../context";
import { UserForm } from "../components/UserForm";
import { REGISTER } from "../api/queries";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

export const Register = () => {
  const { activateAuth } = useContext(Context)
  const [
    registerMutation,
    { data: dataRegister, loading: loadingRegister, error: errorRegister }
  ] = useMutation(REGISTER)

  const errorMsg = errorRegister && 'El usuario ya existe o hay algun problema'

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }
  return (
    <>
      <UserForm title='Registrarse' error={errorMsg} onSubmit={onSubmit} disabled={loadingRegister} />
      <span>Ya tienes cuenta? <Link to="/login">Login</Link></span>
    </>
  )
}
