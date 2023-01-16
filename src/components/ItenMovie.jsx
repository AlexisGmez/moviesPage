import React from 'react'
import { Link } from 'react-router-dom';
import './styles/ItenMovie.scss'
import photo from '/photo.png';
const ItenMovie = ( { id, title, type, poster, year} ) => {


  const image = poster === 'N/A' ? photo : poster; 
  return (

    

      <article className='card' style={{ backgroundImage: `url(${image})`}}>
        <div className="card__movie">
          <h4>{ title }</h4>
          <p><span>{type}</span> <span>{year}</span></p>

          <Link to={`/movies/${id}`}>
            Ver mas... 
          </Link>
        </div>
      </article>
    
  )
}

export default ItenMovie
