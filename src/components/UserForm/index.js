import React, { Fragment } from 'react'

import { useImputValue } from '../../hooks/useImputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useImputValue('')
  const password = useImputValue('')

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type="password" {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  )
}
