import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: '' }); // Set show to false as a boolean
  const [querry, setQuerry] = useState('titanic');

  useEffect(() => {
   let Timerout= setTimeout(() => {
      fetch(`http://www.omdbapi.com/?apikey=81f081ae&s=${querry}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('response was not ok');
          }
          return res.json();
        })
        .then(json => {
          setData(json.Search);
          setLoading(false);
        })
        .catch(error => {
          setError({ show: true, message: error.message }); // Set show to true when there's an error
          setLoading(false);
        });
    }, 500)
    return ()=>clearTimeout(Timerout);
  }, [querry]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error.show) { 
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 style={{ color: 'black', backgroundColor: 'gold' }}>Movie App</h1>
      <AppContext.Provider value={{ data, setData, error, querry, setQuerry }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};
