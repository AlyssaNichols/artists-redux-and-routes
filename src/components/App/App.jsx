// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ArtistList from "../ArtistList/ArtistList";
import { useDispatch } from "react-redux";
import ArtistForm from "../ArtistForm/ArtistForm";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  // get Artists data from server on load
  useEffect(() => {
    console.log("in useEffect");
    refreshArtists();
  }, []);

  // Keep this method in App, as it will be used by multiple components
  // You want to keep the code DRY (Don't Repeat Yourself!)
  // We'll look at another way to handle this with next week's topic: Sagas.
  const refreshArtists = () => {
    axios({
      method: "GET",
      url: "/artist/",
    })
      .then((response) => {
        // response.data is the array of artists
        console.log(response.data);
        // TODO - update this to dispatch to Redux
        dispatch({ type: "SET_ARTISTS", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET", error);
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
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/addArtist">
                Add an Artist
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/allArtists">
                View All Artists
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <header className="App-header">
              <h1> Home Page </h1>
            </header>
            <p>Welcome to our Home Page!</p>
              <p>Click the Gallery Button to be redirected to our Artist Gallery!</p>
          </Route>
          <Route path="/addArtist" exact>
            <header className="App-header">
              <h1 className="App-title">Add an Artist</h1>
            </header>
            <p>Welcome to our collection of amazing artists!</p>
            <ArtistForm addArtist={addArtist} />
          </Route>
          <Route path="/allArtists" exact>
            <header className="App-header">
              <h1> All Artists in Gallery </h1>
            </header>
            <ArtistList refreshArtists={refreshArtists} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
