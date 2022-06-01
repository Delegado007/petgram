import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { FavButton } from '../FavButton'
import { useToogleAddLike, useToogleRemoveLike } from '../../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearSreen } from '../../hooks/useNearScreen'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const [show, element] = useNearSreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { addLike, addLikeLoading, addLikeError } = useToogleAddLike()
  const { removeLike, removeLikeLoading, removeLikeError } = useToogleRemoveLike()

  const handleFavClick = () => {
    !liked && addLike({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      }
    </Article>
  )
}
