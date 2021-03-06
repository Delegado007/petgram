import { gql } from '@apollo/client'

export const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`
