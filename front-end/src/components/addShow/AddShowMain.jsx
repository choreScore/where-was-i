function AddShowMain() {
  async function getShowID(name) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=warcraft&page=1&include_adult=false`
    );
    const dataTreated = await data.json();
    if (dataTreated.results.lenthth > 1) {
      for (let movie of dataTreated.results) {
        if (movie.name == name) {
          return movie.id;
        }
      }
    }
  }

  async function getShowImage(name) {
    let id = await getShowID(name);
    let posterAdd = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${id}&page=1&include_adult=false`
    );
    let posterAddTreated = posterAdd.json();
    return `https://image.tmdb.org/t/p/original/${posterAddTreated}`;
  }

  function addShowHandler() {
    setCurrentView('AddNew');
  }
  return (
    <div>
      {/* Map on through fetch object and create a div for each object in there */}
    </div>
  );
}

export default AddShowMain;
