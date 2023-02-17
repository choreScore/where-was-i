import { useEffect, useRef, useState } from 'react';

function AddShowSideBar(props) {
  const [seasonSelect, setSeasonSelectd] = useState('');
  const [episodeSelect, setpisodeSelected] = useState('');

async function updateDatabase(){
    const obj = {
      "user_id":localStorage.user_id,
      "show_id":props.show_id,
      "showname":props.name,
      "season":seasonSelect,
      "episode":episodeSelect,
      "image":`https://image.tmdb.org/t/p/original${props.image}`
    }

    await fetch('http://localhost:4000/user/shows', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(obj),
          
        });
}
 

  return (
    <div className="addshow-side">
      <form action={updateDatabase}>
        <input
          className="addShow"
          type='text'
          name='Season'
          id='season'
          placeholder='season'
          value={seasonSelect}
          required
          onChange={(event) =>setSeasonSelectd(event.target.value)}
          
        />
        <input
          className="addShow"
          type='text'
          name='Episode'
          id='episode'
          placeholder='episode'
          value={episodeSelect}
          required
          onChange={(event) =>setpisodeSelected(event.target.value)}
        />
        <button type='submit' href='/'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddShowSideBar;
