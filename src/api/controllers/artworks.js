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
    const newArtwork = new Artwork(req.body);
    const createdArtwork = await newArtwork.save();
    return res.status(201).json(createdArtwork);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido crear la obra', error: error });
  }
};

const getArtworkById = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    res.status(200).json(artwork);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Obra no encontrada', error: error });
  }
};

const updateArtworkById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtwork = await Artwork.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(newArtwork);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error actualizando obra', error: error });
  }
};

const deleteArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndDelete(id);
    return res.status(200).json('Obra borrada');
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error borrando obra', error: error });
  }
};

const deleteArtworkFieldById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndUpdate(id, { $unset: { author: 1 } }, { new: true });
    return res.status(200).json('Campo autor borrado');
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error borrando el campo autor', error: error });
  }
};

module.exports = {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  updateArtworkById,
  deleteArtwork,
  deleteArtworkFieldById
};
