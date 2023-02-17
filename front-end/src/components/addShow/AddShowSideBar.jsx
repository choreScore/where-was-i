function AddShowSideBar() {
  return (
    <div className="addshow-side">
      <form action='/'>
        <input
          type='number'
          name='Season'
          id='season'
          placeholder='season'
          required
        />
        <input
          type='number'
          name='Episode'
          id='episode'
          placeholder='episode'
          required
        />
        <button type='submit' href='/'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddShowSideBar;
