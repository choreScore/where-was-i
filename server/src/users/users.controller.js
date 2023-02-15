const userModel = require('./users.model');

module.exports = {
  async getShowList(req, res) {
    const allShows = await userModel.getShowList(req.query.uer_id);
    res.status(201).send(allShows);
  },
  async postNewShow(req, res) {
    userModel.postNewShow(req.body);
    const allShows = await userModel.getShowList();
    res.status(201).send(allShows);
  },
  async getShowProgress(req, res) {
    const theShow = await userModel.getShowProgress(req.query.Movie_id);
    res.status(201).send(theShow);
  },
  async updateProgress(req, res) {
    userModel.updateProgress(req.body);
    const allShows = await userModel.getShowList();
    res.status(201).send(allShows);
  },
  async deleteShow(req, res) {
    userModel.deleteShow(req.query.show_id, req.query.user_id);
    const allShows = await userModel.getShowList();
    res.status(201).send(allShows);
  },
};
