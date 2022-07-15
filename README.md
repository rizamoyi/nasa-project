# NASA Mission Control Project

This project uses data from [NASA](https://www.nasa.gov/) as well as the [SpaceX REST API](https://github.com/r-spacex/SpaceX-API) to shedule space missions to habitable Kepler [Exoplanets](https://exoplanetarchive.ipac.caltech.edu/docs/data.html).
Deployed using Docker on AWS Amazon EC2 instance

# Getting Started

1. Ensure you have Node.js installed.
2. Create a [MongoDB Atlas](https://www.mongodb.com/atlas) free database account or you can start a local MongoDB database.
3. Create a .env file in the server directory with a `MONGO_URL` property set to your MongoDB connection string.
4. Run `npm install`

# Running the Project

1. In the terminal run: `npm run deploy`
2. View the Mission Control Project frontend at [localhost:8000](localhost:8000) and schedule a launch!

# Docker

1. Install the latest versiob of Docker.
2. Run `docker build -t nasa-project`
3. Run `docker run -it -p 8000:8000 nasa-project`

# Running Tests

To run all tests run `npm test`. This will run tests for both the client and server.

- Run client-side tests: `npm test --prefix client`
- Run server-side tests: `npm test --prefix server`

