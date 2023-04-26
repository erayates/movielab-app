import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header';

function Details() {
  const {mediaType,id} = useParams();
  console.log(mediaType,id);
  return (
    <></>
  
  )
}

export default Details