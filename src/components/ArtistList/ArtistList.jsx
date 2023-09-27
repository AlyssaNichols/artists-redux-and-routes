import React from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import {useSelector} from 'react-redux'



function ArtistList({ refreshArtists }) {
  
  const artistList = useSelector(store => store.artistReducer);
  console.log(artistList)
  return (
    <div className="table">
      <table>
        <thead>
        <tr>
          <th > Artist Name </th>
          <th> Delete Artist </th>
          </tr>
        </thead>
        <tbody>
          {artistList.map((artist) => {
            return (
              <ArtistListItem
                key={artist.id}
                refreshArtists={refreshArtists}
                artist={artist}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ArtistList;
