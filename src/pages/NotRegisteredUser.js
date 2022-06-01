import React, { Fragment } from "react";
import Context from "../context";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <Fragment>
              <UserForm title='Registrarse' onSubmit={activateAuth} />
              <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
            </Fragment>
          )
        }
      }
    </Context.Consumer>
  )
}
