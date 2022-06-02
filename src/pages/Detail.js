import React from "react";
import { PhotoCardWhitQuery } from "../container/PhotoCardWhitQuery";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { detailId } = useParams();
  console.log(detailId)
  return (
    <>
      <Helmet>
        <title>{`Fotografia ${detailId} | Petgram`}</title>
        <meta name='description' content={`Descripción de la fotografia ${detailId}`} />
      </Helmet>
      <PhotoCardWhitQuery id={detailId} />

    </>
  )
}

