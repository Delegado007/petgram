import React from "react";
import { PhotoCardWhitQuery } from "../container/PhotoCardWhitQuery";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { detailId } = useParams();
  console.log(detailId)
  return (
    <PhotoCardWhitQuery id={detailId} />
  )
}

