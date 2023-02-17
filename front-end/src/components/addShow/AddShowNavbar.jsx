function AddShowNavbar() {
  return (
    <div className='addshow-nav'>
      <form action='/'>
        <input
          type='text'
          name='find-show'
          id='find-show'
          placeholder='Search Shows'
          required
        />
        <button type='submit' href='/'>
          Search
        </button>
      </form>
    </div>
  );
}

export default AddShowNavbar;
