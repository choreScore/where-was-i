import { useEffect } from 'react';
import '../styles/movie-poster.css';

function MoviePoster({ showname, singleView, setShowname }) {
  return (
    <div className='cards' onClick={singleView} onChange={setShowname(showname)}>
      <div className='image-container'>
        <div className='image'/>
      </div>
      <div className='text-container'>
        <h3>{showname}</h3>
      </div>
    </div>
  );
}

export default MoviePoster;
