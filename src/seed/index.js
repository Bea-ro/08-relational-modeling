const mongoose = require('mongoose');
require('dotenv').config();
require('../config/db');
const Author = require('../api/models/author');
const Artwork = require('../api/models/artwork');
const seed = require('./seed');

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      const oldAuthors = await Author.find();
      const oldArtworks = await Artwork.find();

      if (oldAuthors) {
        await Author.collection.drop();
        console.log('La colección Authors se ha vaciado');
      }
      if (oldArtworks) {
        await Artwork.collection.drop();
        console.log('La colección Artworks se ha vaciado');
      }

      await Author.insertMany(seed.authors);
      await Artwork.insertMany(seed.artworks);
      console.log('Datos guardados');
    } catch (error) {
      console.log('Error guardando los datos: ' + error);
    }
  })
  .finally(() => mongoose.disconnect());
