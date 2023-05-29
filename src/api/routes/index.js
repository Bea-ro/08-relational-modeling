const express = require('express');
const authorsRouter = require('./autores');
const artworksRouter = require('./obras');
const movementsRouter = require('./movimientos');

const router = express.Router();

router.use('/autores', authorsRouter);
router.use('/obras', artworksRouter);
router.use('/movimientos', movementsRouter);

module.exports = router;
