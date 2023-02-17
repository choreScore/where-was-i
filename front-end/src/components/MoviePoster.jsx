import '../styles/movie-poster.css';

function MoviePoster({ showname }) {
  return (
    <div className='cards'>
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
