import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function ArtistForm({ addArtist }) {
  const [newArtist, setNewArtist] = useState("");
const history = useHistory();

  const handleSubmit = (e) => {
    const artist = {name: newArtist};
    e.preventDefault();
    console.log(artist)
    addArtist(artist);
    setNewArtist("");
    history.push("/allArtists")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      required
        type="text"
        value={newArtist}
        onChange={(event) => setNewArtist(event.target.value)}
        placeholder="New Artist Name"
      />{" "}
      <button type="submit">Add Artist</button>
    </form>
  );
}
