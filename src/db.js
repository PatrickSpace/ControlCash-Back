const mongoose = require("mongoose");
const { USERDB, PASSWORD, DBNAME, MONGODBHOST } = process.env;
const configdb = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const uri = `mongodb+srv://${USERDB}:${PASSWORD}@${MONGODBHOST}/${DBNAME}?retryWrites=true&w=majority`;

try {
  mongoose.connect(uri, configdb);
} catch (err) {
  console.log(err);
}
