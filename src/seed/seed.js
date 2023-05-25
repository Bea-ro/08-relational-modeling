const seed = {
  authors: [
    {
      name: 'Gian Lorenzo Bernini',
      movement: 'Barroco',
      area: ['sculpture', 'painting'],
      mainArtworks: ['El Éxtasis de Santa Teresa', 'El rapto de Proserpina']
    },
    {
      name: 'Migul Angel Buonarroti',
      movement: 'Renacimiento',
      area: ['sculpture', 'painting', 'arquitecture'],
      mainArtworks: ['La Capilla Sixtina', 'El David', 'La Piedad']
    },
    {
      name: 'Sandro Botticelli',
      movement: 'Renacimiento',
      area: ['painting'],
      mainArtworks: ['La Primavera', 'El nacimiento de Venus']
    },
    {
      name: 'Leonardo da Vinci',
      movement: 'Renacimiento',
      area: ['painting'],
      mainArtworks: ['La última cena', 'La Gioconda', 'La Virgen de las rocas']
    },
    {
      name: 'Diego Velázquez',
      movement: 'Barroco',
      area: ['painting'],
      mainArtworks: ['Las Meninas', 'La hilanderas', 'La rendición de Breda']
    },
    {
      name: 'Gil de Siloé',
      movement: 'Gótico',
      area: ['sculpture'],
      mainArtworks: [
        'Retablo Cartuja de Miraflores',
        'Sepulcro de Don Juan de Padilla',
        'Retablo Capilla Santa Ana Catedral de Burgos'
      ]
    }
  ],
  artworks: [
    {
      title: 'Catedral de Santiago',
      author: 'Varios',
      year: 1075,
      area: 'arquitecure',
      movement: 'Románico'
    },
    {
      title: 'La Anunciación',
      author: 'Fra Angelico',
      year: 1426,
      area: 'painting',
      movement: 'Renacimiento'
    },
    {
      title: 'La primavera',
      author: 'Sandro Botticelli',
      year: 1482,
      area: 'painting',
      movement: 'Renacimiento'
    },
    {
      title: 'La Capilla Sixtina',
      author: 'Miguel Angel Buonarroti',
      year: 1512,
      area: 'painting',
      movement: 'Ranacimiento'
    },
    {
      title: 'El rapto de Proserpina',
      author: 'Gian Lorenzo Bernini',
      year: 1622,
      area: 'sculpture',
      movement: 'Barroco'
    },
    {
      title: 'Iglesia Santa María del Naranco',
      author: 'Desconocido',
      year: 842,
      area: 'arquitecture',
      movement: 'prerrománico'
    }
  ]
};

module.exports = seed;
