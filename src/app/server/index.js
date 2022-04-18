const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const baseCorsHeroku = "https://cors-anywhere.herokuapp.com";
const baseDeezer = "https://api.deezer.com";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/artists", (req, res) => {
  let searchQuery = req.query.q;
  axios
    .get(`${baseCorsHeroku}/${baseDeezer}/search?q=artist:${searchQuery}`)
    .then((response) => {
      let results = [];

      response.data.data.forEach((item) => {
        if (!results.some(el => el.id === item.artist.id)) {
          results.push({
            id: item.artist.id,
            name: item.artist.name,
            cover: item.artist.picture_medium,
          });
        }
      });
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

app.get("/albums", (req, res) => {
  axios
    .get(`${baseCorsHeroku}/${baseDeezer}/artist/${req.query.q}/albums`)
    .then((response) => {
      let results = [];
      response.data.data.forEach((item) => {
        results.push({
          title: item.title,
          cover: item.cover_medium,
          date: item.release_date,
        });
      });
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

app.get("/artist", (req, res) => {
  axios
    .get(`${baseCorsHeroku}/${baseDeezer}/artist/${req.query.q}`)
    .then((response) => {
      let results = response.data;
      res.status(200).json({
        name: results.name,
        fans: results.nb_fan,
        cover: results.picture_xl,
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

app.get("/top-tracks", (req, res) => {
  axios
    .get(`${baseCorsHeroku}/${baseDeezer}/artist/${req.query.q}/top?limit=5`)
    .then((response) => {
      let results = [];
      response.data.data.forEach((item) => {
        results.push({
          title: item.title,
          duration: item.duration,
          preview: item.preview,
        });
      });
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

app.listen(3001, () => console.log("Server started"));
