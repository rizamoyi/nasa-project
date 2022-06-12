const express = require('express');

const {
  httpGetAllLaunches,
  httpAddNewlaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewlaunch);

module.exports = launchesRouter;
