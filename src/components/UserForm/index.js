import React, { Fragment } from 'react'
import { useImputValue } from '../../hooks/useImputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../../SubmitButton'

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
        <SubmitButton disabled={disabled} children={title} />
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
