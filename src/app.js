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
basicconfig.createRol();
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

//routes - servicios
app.use("/api/card/", cardroutes);

//init
app.listen(app.get("port"), () => {
  console.log(`API running at http://localhost:${app.get("port")}`);
});
