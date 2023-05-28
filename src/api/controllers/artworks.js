const Artwork = require('../models/artwork');

const getAllArtworks = async (req, res, next) => {
  try {
    const artworks = await Artwork.find();
    return res.status(200).json(artworks);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se han encontrado obras', error: error });
  }
};

const createArtwork = async (req, res, next) => {
  try {
    const newArtwork = new Author(req.body);
    await newArtwork.save();
    return res.status(201).json(newArtwork);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido crear la obra', error: error });
  }
};

const getArtworkById = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    res.status(200).json(artwork);
  } catch (err) {
    return next('Obra no encontrada', error);
  }
};

const updateArtworkById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtwork = await Artwork.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(newArtwork);
  } catch (err) {
    return next('Error actualizando obra', error);
  }
};

const deleteArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndDelete(id);
    return res.status(200).json('Obra borrada');
  } catch (err) {
    return next('Error borrando obra', error);
  }
};

module.exports = {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  updateArtworkById,
  deleteArtwork
};
