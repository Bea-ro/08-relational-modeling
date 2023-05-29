const Author = require('../models/author');

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate('mainArtworks');
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se han encontrado autores', error: error });
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    const createdAuthor = await newAuthor.save();
    return res.status(201).json(createdAuthor);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido crear el autor', error: error });
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id).populate('mainArtworks');
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Autor no encontrado', error: error });
  }
};

const updateAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error actualizando autor', error: error });
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Author.findByIdAndDelete(id);
    return res.status(200).json('Autor borrado');
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido borrar al autor', error: error });
  }
};

const addOrRemoveArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { mainArtwork } = req.body;
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      {
        $addToSet: { mainArtworks: mainArtwork }
      },
      { new: true }
    );
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error añadiendo obra al autor', error: error });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor,
  addOrRemoveArtwork
};
