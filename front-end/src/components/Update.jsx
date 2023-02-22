import { useState, useEffect } from "react";
import "../styles/Show.css";
import "../styles/Update.css";

function Update({
  progressButton,
  setProgressButton,
  showname,
  login,
  singleShowId,
  progress,
  showImage,
  setDefaultView,
  setCurrentView,
}) {
  const [episodeSelect2, setEpisodeSelect2] = useState(progress[1]);
  const [seasonSelect2, setSeasonSelect2] = useState(progress[0]);
  const [showInfo, setShowInfo] = useState(false);
  const [seasonsAndEpisodes, setSeasonsAndEpisodes] = useState([]);

  useEffect(() => {
    getShowInfo(singleShowId);
  }, [singleShowId]);

  useEffect(() => {
    if (showInfo) {
      handleSeasonsAndEpisodes();
    }
  }, [showInfo]);

  async function getShowInfo() {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${singleShowId}?api_key=22232a34b1256a41ee95dfdb04aa1810`
    ).then((data) => data.json());
    setShowInfo(data);
    console.log(data);
  }

  function handleSeasonsAndEpisodes() {
    let seasonCounter = 0;
    const countSeasonsAndEpisodes = {};
    showInfo.seasons.map((season) => {
      if (season.name != "Specials") {
        seasonCounter++;
        countSeasonsAndEpisodes[seasonCounter] = season.episode_count;
      }
    });
    setSeasonsAndEpisodes(countSeasonsAndEpisodes);
    console.log(seasonsAndEpisodes);
  }

  function goBack(e) {
    e.preventDefault();
    setProgressButton(false);
    setDefaultView(true);
  }

  async function updateProgress(e) {
    e.preventDefault();
    const obj = {
      user_id: login,
      show_id: singleShowId,
      showname: showname,
      season: seasonSelect2,
      episode: episodeSelect2,
      url: showImage,
    };

    await fetch("http://localhost:4000/user/shows", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(obj),
    });
    setCurrentView("Homepage");
  }

  return (
    <div className="update">
      <br></br>
      <h3>Update Progress</h3>
      <div className="update-container">
        <form onSubmit={updateProgress}>
          {showInfo && (
            <div className="selectProgress">
              <select
                onChange={(event) => {
                  setSeasonSelect2(event.target.value);
                }}
              >
                {seasonsAndEpisodes &&
                  Object.keys(seasonsAndEpisodes).map((season) => {
                    return (
                      <option
                        value={season}
                        selected={
                          parseInt(season) === progress[0] ? true : false
                        }
                      >
                        {season}
                      </option>
                    );
                  })}
              </select>
              <select
                onChange={(event) => setEpisodeSelect2(event.target.value)}
              >
                {setSeasonSelect2 &&
                  [...Array(seasonsAndEpisodes[seasonSelect2])].map((e, i) => {
                    let episode = i + 1;
                    return (
                      <option
                        value={episode}
                        selected={episode === progress[1] ? true : false}
                      >
                        {episode}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
          <div className="update-btn-container">
            <button type="submit" className="btn">
              Update
            </button>
            <button onClick={goBack} className="btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
