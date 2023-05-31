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

      await Artwork.insertMany(seed.artworks);
      // const artworks = await Artwork.find();

      // seed.authors.forEach((author) => {
      //   author.mainArtworks = author.mainArtworks.map((artworkTitle) => {
      //     const matchingArtwork = artworks.find((artwork) => artwork.title === artworkTitle);
      //     console.log(matchingArtwork);
      //     //if (matchingArtwork) {return matchingArtwork._id}
      //   });
      // });
      await Author.insertMany(seed.authors);

      console.log('Datos guardados');
    } catch (error) {
      console.log('Error guardando los datos: ' + error);
    }
  })
  .finally(() => mongoose.disconnect());
