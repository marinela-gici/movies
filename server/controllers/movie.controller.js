const Movie = require("../models/movie.model");

module.exports.createMovie = (req, res) => {
  Movie.create(req.body)
    .then((movie) => res.json(movie))
    .catch((err) => console.log("error", err));
};

module.exports.getMovies = (req, res) => {
  const search = req.query.search;
  const limit = req.query.limit ?? 10;
  const skip = req.query.skip ?? 0;

  let options = {};
  if (search) {
    options["title"] = { $regex: search, $options: "i" };
  }

  Movie.find(options)
    .skip(skip)
    .limit(limit)
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.getOneMovie = (req, res) => {
  Movie.findOne({ id: req.params._id })
    .then((movie) => res.json(movie))
    .catch((err) => console.log("error", err));
};
