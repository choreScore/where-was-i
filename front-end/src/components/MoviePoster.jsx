import "../styles/movie-poster.css";

function MoviePoster({
  showname,
  setShowname,
  setCurrentView,
  season,
  episode,
  singleShowId,
  setProgress,
  setSingleShowId,
  setShowImage,
  image,
  personalRank,
}) {
  return (
    <div
      className="cards"
      onClick={() => {
        setShowname(showname);
        setProgress([season, episode]);
        setSingleShowId(singleShowId);
        setShowImage(image);
        setCurrentView("SingleShow");
      }}
    >
      <div className="image-home-container">
        <img src={image} alt="tv poster" />
      </div>
      <div className="text-home-container">
        <h3>{showname}</h3>
      </div>
      <div className="personalRank">
        <h4>Personal Rank: &#9733;{personalRank}</h4>
      </div>
    </div>
  );
}

export default MoviePoster;
