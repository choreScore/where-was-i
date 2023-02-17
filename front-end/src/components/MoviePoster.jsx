import { useEffect } from 'react';
import '../styles/movie-poster.css';

function MoviePoster({ showname, setShowname, setCurrentView, season, episode, singleShowId, setProgress, setSingleShowId, setShowImage, image }) {


console.log(image)

  return (
    <div className='cards' 
    onClick={() => {
      console.log("here")
      setShowname(showname);
      setProgress([season, episode]);
      setSingleShowId(singleShowId);
      setShowImage(image);
      setCurrentView('SingleShow');
    }}>
      <div className='image-container'>
        <div className='image' style={{background:`url(${image})`}}/>
      </div>
      <div className='text-container'>
        <h3>{showname}</h3>
      </div>
    </div>
  );
}

export default MoviePoster;
