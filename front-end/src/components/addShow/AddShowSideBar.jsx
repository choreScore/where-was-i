import { useEffect, useRef, useState } from 'react';

function AddShowSideBar(props) {
  const [seasonSelect, setSeasonSelectd] = useState('');
  const [episodeSelect, setpisodeSelected] = useState('');

async function updateDatabase(e){
    console.log(props);
    e.preventDefault();
    console.log(seasonSelect);
    const obj = {
      "user_id":localStorage.user_id,
      "show_id":props.showSelected.show_id,
      "name":props.showSelected.name,
      "season":seasonSelect,
      "episode":episodeSelect,
      "url":`https://image.tmdb.org/t/p/original${props.showSelected.image}`
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
      <form onSubmit={updateDatabase}>
        <input
          className="addShow"
          type='text'
          name='Season'
          placeholder='season'
          value={seasonSelect}
          required
          onChange={(event) =>setSeasonSelectd(event.target.value)}
        />
        <input
          className="addShow"
          type='text'
          name='Episode'
          placeholder='episode'
          value={episodeSelect}
          required
          onChange={(event) =>setpisodeSelected(event.target.value)}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddShowSideBar;
