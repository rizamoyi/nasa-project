const { addNewLaunch, getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewlaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  addNewLaunch(launch);
  return res.status(201).json(launch);
}
module.exports = {
  httpGetAllLaunches,
  httpAddNewlaunch,
};
