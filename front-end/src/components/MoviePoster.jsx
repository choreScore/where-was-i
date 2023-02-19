import { useEffect } from 'react';
import '../styles/movie-poster.css';

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
}) {
  return (
    <div
      className='cards'
      onClick={() => {
        setShowname(showname);
        setProgress([season, episode]);
        setSingleShowId(singleShowId);
        setShowImage(image);
        setCurrentView('SingleShow');
      }}
    >
      <div className='image-home-container'>
        <img src={image} alt='tv poster' />
      </div>
      <div className='text-home-container'>
        <h3>{showname}</h3>
      </div>
    </div>
  );
}

export default MoviePoster;
