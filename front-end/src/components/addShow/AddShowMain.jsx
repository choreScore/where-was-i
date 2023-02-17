import SearchPoster from "./SearchPoster.jsx";

function AddShowMain({searchList, setShowSelected}) {

  // async function getShowImage(name) {
  //   let id = await getShowID(name);
  //   let posterAdd = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${id}&page=1&include_adult=false`
  //   );
  //   let posterAddTreated = posterAdd.json();
  //   return `https://image.tmdb.org/t/p/original/${posterAddTreated}`;
  // }
  //

  return (
    <div className="addshow-main">
      { searchList.map((show, index) => {
          return (
            <SearchPoster key={index} show={show} setShowSelected={setShowSelected} />
          );
        })}
    </div>
  );
}

export default AddShowMain;
