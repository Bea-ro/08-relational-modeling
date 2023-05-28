const Author = require('../models/author');

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se han encontrado autores', error: error });
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    return res.status(201).json(newAuthor);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido crear el autor', error: error });
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    return res.status(200).json(author);
  } catch (err) {
    return next('Autor no encontrado', error);
  }
};

const updateAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAuthor = new Author(req.body);
    newAuthor._id = id;
    await Author.findByIdAndUpdate(id, newAuthor);
    return res.status(200).json(newAuthor);
  } catch (err) {
    return next('Error actualizando autor', error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Author.findByIdAndDelete(id);
    return res.status(200).json('Autor borrado');
  } catch (err) {
    return next('Error borrando autor', error);
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor
};
