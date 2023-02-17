import '../styles/movie-poster.css';

function MoviePoster({ showname, singleView }) {
  return (
    <div className='cards' onClick={singleView}>
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
