const express = require('express');

const { getAllPlanets } = require('./planets.contoller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;
