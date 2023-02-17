const showsModel = require('./shows.model');

module.exports = {
  async getShowList(req, res) {
    // need to recieve a query like ./user/shows?user_id=3
    const allShows = await showsModel.getShowList(req.query.user_id);
    res.status(201).send(allShows);
  },

  async postNewShow(req, res) {
    /* need to recieve a body like 
    {
      user_id: USER_ID,
      show_id: 6,
      showname: 'Cowboy Bebop',
      season: 1,
      episode: 4,
      image: url
    };
    */
    await showsModel.postNewShow(req.body);
    res.status(201).send('New show successfully added.');
  },

  async updateProgress(req, res) {
    // Need to recieve a body same as above
    // Might need to send a response to refresh component state
    showsModel.updateProgress(req.body);
    await showsModel.updateProgress();
    res.status(201).send('Update Complete');
  },
  async deleteShow(req, res) {
    // need to recieve a query like ./user/shows?user_id=3&show_id=3
    showsModel.deleteShow(req.query.show_id, req.query.user_id);
    await showsModel.deleteShow();
    res.status(201).send('Deleted');
  },
};
