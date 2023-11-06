const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.post('/api/movies', MovieController.createMovie);
    app.get('/api/movies', MovieController.getMovies);
    app.get('/api/movies/:id', MovieController.getOneMovie);
} 