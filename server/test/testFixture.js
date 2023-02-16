const USER_ID = -5;

module.exports = {
  getShow() {
    return [
      {
        user_id: USER_ID,
        show_id: 'bb123',
        showName: 'Breaking Bad',
        season: 2,
        episode: 10,
      },
      {
        user_id: USER_ID,
        show_id: 'cb123',
        showName: 'Cowboy Bebop',
        season: 1,
        episode: 4,
      },
    ];
  },
  userToken() {
    return {
      auth_token:
        'Loremipsumdolorsitamet,quimboreadipisigminimsintcillumsinteturcupidatat.hk',
      username: 'Coppola',
      email: 'francis@ford.com',
    };
  },
};
