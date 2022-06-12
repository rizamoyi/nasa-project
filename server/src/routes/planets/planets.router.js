const express = require('express');

const { httpGetAllPlanets } = require('./planets.contoller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;
