import { useEffect, useRef, useState } from "react";

function AddShowNavbar({ setSearchList }) {
  const [showlist, setShowlist] = useState([]);

  getGenre();

  async function getGenre() {
    const genreData = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=22232a34b1256a41ee95dfdb04aa1810`
    ).then((genreData) => genreData.json());
    console.log(genreData);
  }

  async function getShowID(name) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${name}&page=1&include_adult=false`
    ).then((data) => data.json());
    await setShowlist(data.results);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const searchInput = document.getElementsByClassName("find-show");
    getShowID(searchInput[0].value);
  };

  useEffect(() => {
    const showArray = showlist.reduce((lastArray, show) => {
      const showObject = {
        name: show.name,
        show_id: show.id,
        image: show.poster_path,
        vote_average: show.vote_average, //add by david
        overview: show.overview, // add by david
        origin_country: show.origin_country, //add by david
      };
      lastArray.push(showObject);
      return lastArray;
    }, []);
    setSearchList(showArray);
  }, [showlist]);

  return (
    <div className="addshow-nav">
      <form action="/">
        <select id="genre" name="Genre">
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Drama">Drama</option>
          <option value="Family">Family</option>
          <option value="Fantasy">Fantasy</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Music">Music</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="TV Movie">TV Movie</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
          <option value="Western">Western</option>
        </select>
        <button onClick={handleClick} className="btn">
          Genre
        </button>
      </form>
      <form action="/">
        <input
          type="text"
          name="find-show"
          className="find-show"
          placeholder="Search Shows"
          required
        />
        <button onClick={handleClick} className="btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default AddShowNavbar;
