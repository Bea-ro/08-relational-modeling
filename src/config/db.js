const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictPopulate', false);
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const { name, host } = db.connection;
    console.error(`Conectado a BD ${name} in ${host}`);
  } catch (error) {
    console.error(error, 'No conectado a BD');
    process.exit(1);
  }
};

module.exports = connect;
