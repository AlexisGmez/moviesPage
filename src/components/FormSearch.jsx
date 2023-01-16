import React, { useContext, useState } from 'react'
import {DataContext, DataProvider} from '../context/DataContext';
import './styles/FormSearch.scss';
const FormSearch = () => {
    
 
  const [title, setTitle] = useState('');
  const { setState,error } = useContext(DataContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setState(title)
  } 
  
  return (
    <div className="form__search">
        <h2>Old Movies Finder</h2>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder='Title movie' 
                onChange={ (e)=> setTitle(e.target.value)}
            />
            <input type="submit" value='search' />
        </form>
        { error && <p>The Movie Doesn't Exist</p> }
        
    </div>
  )
}

export default FormSearch
