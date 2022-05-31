import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_PHOTO } from "../api/queries";

export const PhotoCardWhitQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } });
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    < PhotoCard {...data.photo} />
  )
}
