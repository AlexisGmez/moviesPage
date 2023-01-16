import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import ItenMovie from './ItenMovie';
import './styles/Movies.scss'

const Movies = () => {

  const {isLoading, data} = useContext(DataContext);  

  console.log(data)
  return (
    <div className='movies__container'>
      {
        !isLoading ? 
            data.Search.map( item => (
                <ItenMovie
                    id={ item.imdbID }
                    title ={ item.Title }
                    type = { item.Type }
                    poster = { item.Poster }
                    year = { item.Year }
                    key = { item.imdbID }
                />
            ) )
        :   ''
      }
    </div>
  )
}

export default Movies
