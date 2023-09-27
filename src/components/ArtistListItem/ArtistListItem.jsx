import React from 'react';
import axios from 'axios';

function ArtistListItem({ refreshArtists, artist }) {

  const deleteArtist = () => {
    axios({
      method: 'DELETE',
      url: `/artist/${artist.id}`
    })
      .then((response) => { 
        dispatch({ type: "REMOVE_ARTIST", payload: artist });
        refreshArtists() 
      })
      .catch((error) => {
        console.log('error on delete: ', error)
      })
  };

  return (
    <tr>
      <td>{artist.name}</td>
      <td>
        <button onClick={deleteArtist}>DELETE</button>
      </td>
    </tr>
  );
}

export default ArtistListItem;
