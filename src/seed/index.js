require('../config/db');
const Author = require('../api/models/author');
// const Artwork = require('../api/models/artwork');
const seed = require('./seed');

const main = async () => {
  try {
    const savedAuthors = await Author.insertMany(seed.authors);
    // await Artwork.insertMany(seed.artworks);
    console.log(savedAuthors);
  } catch (error) {
    console.log('Ha habido un error guardando los autores en la BD: ');
  }
};

main();
