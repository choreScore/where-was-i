import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function AddShowSideBar(props) {
  const [seasonSelect, setSeasonSelectd] = useState("");
  const [episodeSelect, setpisodeSelected] = useState("");
  // const [showInfo, setShowInfo] = useState(false);
  // const [episodesPerSeason, setEpisodesPerSeason] = useState([]);

  // useEffect(() => {
  //   getShowInfo(props.showSelected.show_id);
  // }, []);
  //
  // async function getShowInfo(showId) {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/tv/${showId}?api_key=22232a34b1256a41ee95dfdb04aa1810`
  //   ).then((data) => data.json());
  //   setShowInfo(data);
  // }

  // function handleEpisode(e) {
  //   const episodeNumber =
  //     showInfo.seasons[parseInt(e.currentTarget.value)].episode_count;
  //   setEpisodesPerSeason(episodeNumber);
  //   const arrayOfNumbers = [];
  //   for (let i = 1; i <= episodeNumber; i++) {
  //     arrayOfNumbers.push(i);
  //   }
  //   setEpisodesPerSeason(arrayOfNumbers);
  //   setSeasonSelectd(episodeNumber)
  // }

  // function recordEpisode(e) {
  //   setpisodeSelected(parseInt(e.currentTarget.value))
  //   console.log(typeof seasonSelect, typeof episodeSelect)
  // }

  async function updateDatabase(e) {
    e.preventDefault();
    const obj = {
      user_id: localStorage.user_id,
      show_id: props.showSelected.show_id,
      name: props.showSelected.name,
      season: seasonSelect,
      episode: episodeSelect,
      url: `https://image.tmdb.org/t/p/original${props.showSelected.image}`,
    };

    await fetch("http://localhost:4000/user/shows", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(obj),
    });
    props.setShowSelected(false);
  }

  function closeButton() {
    props.setShowSelected(false);
  }

  return (
    <div className="addshow-side">
      <div className="images-search-container">
        <img
          src={`https://image.tmdb.org/t/p/original${props.showSelected.image}`}
        />
      </div>
      <div className="form-search-container">
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className="icon-button"
          onClick={closeButton}
        />
        <form id="update-form" onSubmit={updateDatabase}>
          <p>What season are you watching?</p>
          <input
            className="input-addnew"
            type="text"
            name="Season"
            placeholder="Season Number, Ex 1"
            value={seasonSelect}
            pattern="[0-9]+"
            required
            onChange={(event) => setSeasonSelectd(event.target.value)}
          />
          <p>What episode are you watching?</p>
          <input
            className="input-addnew"
            type="text"
            name="Episode"
            placeholder="Episode Number, Ex 12"
            pattern="[0-9]+"
            value={episodeSelect}
            required
            onChange={(event) => setpisodeSelected(event.target.value)}
          />
          <button type="submit" className="btn">
            Add show!
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddShowSideBar;
