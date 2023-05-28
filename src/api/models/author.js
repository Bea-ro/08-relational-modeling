const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    movement: { type: String, required: true, trim: true },
    area: {
      type: [String],
      enum: ['pintura', 'escultura', 'arquitectura'],
      required: true
    },
    mainArtworks: { type: [String], required: true }
  },
  {
    timestamps: true,
    collection: 'authors'
  }
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
