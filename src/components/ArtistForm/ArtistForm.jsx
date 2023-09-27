import { useState } from "react";

export default function ArtistForm({ addArtist }) {
  const [newArtist, setNewArtist] = useState("");


  const handleSubmit = (e) => {
    const artist = {name: newArtist};
    e.preventDefault();
    console.log(artist)
    addArtist(artist);
    setNewArtist("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      required
        type="text"
        value={newArtist}
        onChange={(event) => setNewArtist(event.target.value)}
        placeholder="New Artist Name"
      />
      <button type="submit">Add Artist</button>
    </form>
  );
}
