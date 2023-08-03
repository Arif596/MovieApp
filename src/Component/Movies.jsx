import React, { useContext } from 'react';
import { AppContext } from './Context';
import { NavLink } from 'react-router-dom';
import './movie.css'

export default function Movies() {
  const { data } = useContext(AppContext);
  if(!Array.isArray(data)){
    return <div style={{color:'black'}}>
      Movie Not Found Please try again
    </div>
  }
  return (
    <section className='movie-page'>
      <div className='grid grid-4-col'>
        {data.map((item) => {
          const { Title, Year, imdbID, Poster, id } = item; 
          const MovieName=Title.substring(0,15);
          return (
            <NavLink key={imdbID} to={`singalmovie/${imdbID}`} className='card'>
              <div className='card-info'>
                <h2>{MovieName.length>=15?`${MovieName}...`:MovieName}</h2>
                <img src={Poster} alt={imdbID} />
                <h4>{Year}</h4>

              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}
