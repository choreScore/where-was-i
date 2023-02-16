const USER_ID = 5;

module.exports = {
  getShow() {
    return [
      {
        user_id: USER_ID,
        show_id: 1,
        showName: 'Breaking Bad',
        season: 2,
        episode: 10,
      },
      {
        user_id: USER_ID,
        show_id: 6,
        showName: 'Cowboy Bebop',
        season: 1,
        episode: 4,
      },
    ];
  },
  user() {
   return {
      auth_token: 'Loremipsumdolorsitamet,quimboreadipisigminimsintcillumsinteturcupidatat.hk',
      username: 'Coppola',
      email: 'francis@ford.com'
    }
  }
};
