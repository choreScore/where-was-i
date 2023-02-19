import { useEffect } from 'react';
import '../styles/movie-poster.css';

function MoviePoster({ showname, setShowname, setCurrentView, season, episode, singleShowId, setProgress, setSingleShowId, image }) {




  return (
    <div className='cards' 
    onClick={() => {
      setShowname(showname);
      setCurrentView('SingleShow');
      setProgress([season, episode]);
      setSingleShowId(singleShowId);
    }}>
      <div className='image-container'>
        <div className='image' style={{background:`url(${image}) center center no-repeat`}}/>
      </div>
      <div className='text-container'>
        <h3>{showname}</h3>
      </div>
    </div>
  );
}

export default MoviePoster;
