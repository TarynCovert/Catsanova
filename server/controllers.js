const connection = require('../db');
require('dotenv').config();

let count = 0;
const storage = [];
const messageStorage = [];

exports.getCat = (req, res) => {
  if (count > 0) {
    const index = Math.floor(Math.random() * storage.length);
    res.send(storage[index]);
    storage.splice(index, 1);
  } else {
    count = 1;
    const query = 'SELECT * FROM cats JOIN photos ON cats.id = photos.cats_id';
    connection
      .get(query)
      .then((response) => {
        const tempObj = {};
        for (let i = 0; i < response.rows.length; i += 1) {
          let cats_id = response.rows[i].cats_id;
          if (!tempObj[cats_id]) {
            tempObj[cats_id] = {};
            tempObj[cats_id].name = response.rows[i].name;
            tempObj[cats_id].url = response.rows[i].url;
            tempObj[cats_id].primarybreed = response.rows[i].primarybreed;
            tempObj[cats_id].secondarybreed = response.rows[i].secondarybreed;
            tempObj[cats_id].mixed = response.rows[i].mixed;
            tempObj[cats_id].colorprimary = response.rows[i].colorprimary;
            tempObj[cats_id].colorsecondary = response.rows[i].colorsecondary;
            tempObj[cats_id].age = response.rows[i].age;
            tempObj[cats_id].gender = response.rows[i].gender;
            tempObj[cats_id].size = response.rows[i].size;
            tempObj[cats_id].spayed = response.rows[i].spayed;
            tempObj[cats_id].housetrained = response.rows[i].housetrained;
            tempObj[cats_id].specialneeds = response.rows[i].specialneeds;
            tempObj[cats_id].children = response.rows[i].children;
            tempObj[cats_id].dogsother = response.rows[i].dogsother;
            tempObj[cats_id].catsother = response.rows[i].catsother;
            tempObj[cats_id].description = response.rows[i].description;
            tempObj[cats_id].photos = [];
            tempObj[cats_id].cats_id = response.rows[i].cats_id;
          }
          const currentPhoto = response.rows[i].photo;
          const parsed = JSON.parse(currentPhoto);
          tempObj[cats_id].photos.push(parsed.large);
        }
        const keys = Object.keys(tempObj);
        for (let i = 0; i < keys.length; i += 1) {
          storage.push(tempObj[keys[i]]);
        }
        const index = Math.floor(Math.random() * storage.length);
        res.send(storage[index]);
        storage.splice(index, 1);
      })
      .catch(err => {
        console.error(err);
        res.status(500);
      });
  }
};

exports.postMessages = (req, res) => {
  const messagePost = req.body.message;
  const catsId = req.body.catId;
  const link = req.body.url;
  const catPhoto = req.body.photo;

  const currentMessage = {
    message: messagePost,
    url: link,
    cats_id: catsId,
    photo: catPhoto,
  };
  messageStorage.push(currentMessage);
  // const query = 'INSERT INTO messages ("message", "cats_id") VALUES ($1, $2)';
  // const arr = [];
  // arr.push(message, catId);
  // connection
  //   .get(query, arr)
  //   .then(() => {})
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500);
  //   });
};

exports.getMessages = (req, res) => {
  res.send(messageStorage);
  // const query = 'SELECT * FROM messages';
  // connection
  //   .get(query)
  //   .then((response) => {
  //     res.send(response);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500);
  //   });
};
