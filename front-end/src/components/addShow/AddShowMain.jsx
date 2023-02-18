import SearchPoster from './SearchPoster.jsx';

function AddShowMain({ searchList, setShowSelected }) {
  return (
    <div className='addshow-main'>
      {searchList.map((show, index) => {
        return (
          <SearchPoster
            key={index}
            show={show}
            setShowSelected={setShowSelected}
          />
        );
      })}
    </div>
  );
}

export default AddShowMain;
