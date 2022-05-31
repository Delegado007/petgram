import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
const DONT_LIKE_PHOTO = gql`
  mutation dontlikeAnonymousPhoto($input: LikePhoto!) {
    dontlikeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useToogleAddLike = () => {
  const [addLike, { loading: addLikeLoading, error: addLikeError }] = useMutation(LIKE_PHOTO)
  return { addLike, addLikeLoading, addLikeError }
}

export const useToogleRemoveLike = () => {
  const [removeLike, { loading: removeLikeLoading, error: removeLikeError }] = useMutation(DONT_LIKE_PHOTO)
  return { removeLike, removeLikeLoading, removeLikeError }
}
