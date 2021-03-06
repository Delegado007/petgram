import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  background-color: rgba(141, 0, 255, .05);
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #8d00ff
  }
  &:disabled {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`
