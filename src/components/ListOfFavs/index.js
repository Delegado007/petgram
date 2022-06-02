import React from 'react'
import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ favs }) => {
  return (
    <Grid>
      {
        favs.map(favs =>
          <Link key={favs.id} to={`/detail/${favs.id}`}>
            <Image src={favs.src} />
          </Link>)
      }
    </Grid>
  )
}
