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
        image:
          'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg',
      },
      {
        user_id: USER_ID,
        show_id: 'cb123',
        showName: 'Cowboy Bebop',
        season: 1,
        episode: 4,
        image:
          'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg',
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
