import React, { useContext } from 'react';
import { AppContext } from './Context';

export default function Search() {
  const { querry, setQuerry, error } = useContext(AppContext);

  return (
    <div>
      <section className='search-section'>
        <h2>Search Your Favorite Movies</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder='Search Here'
            value={querry}
            onChange={(e) => setQuerry(e.target.value)}
          />
        </form>
      </section>
      <div className='card-error'>
       <p>{error && error.message}</p> 
      </div>
    </div>
  );
}
