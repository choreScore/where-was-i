const USER_ID = 5;

module.exports = {
  getShow() {
    return [
      {
        user_id: USER_ID,
        showName: 'Breaking Bad',
        season: 2,
        episode: 10,
      },
      {
        user_id: USER_ID,
        showName: 'Cowboy Bebop',
        season: 1,
        episode: 4,
      },
    ];
  },

  updateShow() {
    return {
      user_id: USER_ID,
      show_id: 6,
      showName: 'Cowboy Bebop',
      season: 1,
      episode: 4,
    };
  },
  // getOrder() {
  //   return {
  //     id: 11344,
  //     customer_id: CUSTOMER_ID,
  //     date_placed: '2018-9-03',
  //   };
  // },
  // getProduct() {
  //   return {
  //     id: 45555,
  //     description: 'Moog Voyager Syntesizer',
  //     cost_price: 120000.0,
  //     sell_price: 330000.0,
  //     stock: 100,
  //   };
  // },
};
