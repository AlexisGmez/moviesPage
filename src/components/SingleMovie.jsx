import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import photo from '/photo.png';
import './styles/SingleMovie.scss';

const SingleMovie = () => {

  const { id } = useParams();
  
  const { isLoading, error, data } = useFetch(`&i=${id}`);
  
  
  if (isLoading) {
    return <div>Loading</div>
  }
  const image = data?.Poster === 'N/A' ? photo : data.Poster; 

  return (
    !isLoading ?
    <main className='single__main'>
      <div className="single__movie">
        <div className='single__img'>
          <img src={ image } alt="" />
        </div>
        <div className="single__info">
          <h2> { data?.Plot } </h2>
          <p><strong>Country:</strong>{  data?.Country }</p>
          <p><strong>Director:</strong>{  data?.Director }</p>
          <p><strong>Released:</strong>{  data?.Released }</p>
          <p><strong>Runtime:</strong>{  data?.Runtime }</p>
          <p><strong>Year:</strong>{  data?.Year }</p>
        </div>
      </div>
    </main>
    : ''
   
  )
}

export default SingleMovie
