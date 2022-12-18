require("dotenv").config();
const express = require("express");
require("./db.js");
const morgan = require("morgan");
const cors = require("cors");
//basic config
const basicconfig = require("./libs/basicConfig");

//set app
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.use(express.json());

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
); //extended es para verificar que envian texto chiqquito (cambiar cuando se reciba el PDF)

//rutas por entidad
const cardroutes = require("./routes/card.routes");
const currencyroutes = require("./routes/currency.routes");
const conceptroutes = require("./routes/concept.routes");
//routes - servicios
app.use("/api/card/", cardroutes);
app.use("/api/currency/", currencyroutes);
app.use("/api/concept/", conceptroutes);
//init
app.listen(app.get("port"), () => {
  console.log(`API running at http://localhost:${app.get("port")}`);
});

//agregar valores por defecto
basicconfig.createRol();
basicconfig.createDefaultCurrency();
