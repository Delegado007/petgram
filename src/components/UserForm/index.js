import React, { Fragment } from 'react'
import { useImputValue } from '../../hooks/useImputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useImputValue('')
  const password = useImputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type="password" {...password} />
        <Button disabled={disabled} >{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
