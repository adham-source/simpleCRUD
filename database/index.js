const mongoose = require("mongoose");
const { DATABASE_URI } = require("../configs/config")

// const connectionString = `${protocol}://${username}:${password}@${url}/${database}${params}`;

const connectionString = DATABASE_URI 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false,
};

exports.connect = (callback) => mongoose
  .connect(connectionString, options)
  .then((db) => {
    console.log(`Connecté avec succès`);
    if(callback) callback()
  })
  .catch((err) => {
    console.log(err)
  })