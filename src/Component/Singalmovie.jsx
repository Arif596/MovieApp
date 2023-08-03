import React, { useState, useEffect } from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import './singalmovie.css'

export default function Singalmovie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: '' });

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=81f081ae&i=${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('response was not ok');
        }
        return res.json();
      })
      .then(json => {
        setMovieData(json);
        setLoading(false);
      })
      .catch(error => {
        setError({ show: true, message: error.message });
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error.show) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieData) {
    return <div>No movie data found.</div>;
  }

  const { Title, Year, Poster, Plot, Genre, Director } = movieData;
const backHandle=()=>{
 
}
  return (
    <div className="movie-details-container">
      <div className="poster">
        <img src={Poster} alt={Title} />
      </div>
      <div className="details">
        <p>{Title}</p>
        <p>{Year}</p>
       
        <p>Director: {Director}</p>
        <br /><br />
<NavLink className='navlink' to='/'>Go Back</NavLink>
      </div>
     
    </div>
  );
}
