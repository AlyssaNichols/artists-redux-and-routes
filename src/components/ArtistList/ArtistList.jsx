import React from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import {useSelector} from 'react-redux'

function ArtistList({ refreshArtists }) {
  const artistList = useSelector(store => store.artistReducer);
  console.log(artistList)
  return (
    <div>
      <table>
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
