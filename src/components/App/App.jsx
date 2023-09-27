// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from '../ArtistList/ArtistList';
import { useDispatch } from 'react-redux';
import ArtistForm from '../ArtistForm/ArtistForm';


function App() {

    const dispatch = useDispatch();
  // get Artists data from server on load
  useEffect(() => {
    console.log('in useEffect');
    refreshArtists();
  }, []);

  // Keep this method in App, as it will be used by multiple components
  // You want to keep the code DRY (Don't Repeat Yourself!)
  // We'll look at another way to handle this with next week's topic: Sagas.
  const refreshArtists = () => {
    axios({
      method: 'GET',
      url: '/artist/'
    })
      .then((response) => {
        // response.data is the array of artists
        console.log(response.data);
        // TODO - update this to dispatch to Redux
        dispatch({ type: "SET_ARTISTS", payload: response.data})
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };

  const addArtist = (artist) => {
    axios
      .post("/artist/", artist)
      .then((response) => refreshArtists())
      .catch((err) => console.log("axios post in app.jsx", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Famous Artists</h1>
      </header>
      <p>Welcome to our collection of amazing artists!</p>
      <ArtistForm addArtist={addArtist}/>
      <ArtistList refreshArtists={refreshArtists} />
    </div>
  );

}

export default App;
