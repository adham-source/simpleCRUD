const express = require("express");
const methodOverride = require('method-override')
const app = express();
const db = require("./database");
const path = require("path");
const router = require("./routes");
const { PORT } = require("./configs/config");

const HTTP_PORT = process.env.PORT || PORT;


app.use(express.urlencoded({limit: "10mb", extended: false}))
app.use(express.json())
app.use(express.static('uploads'))
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))

app.use(router);

app.set("view engine", "pug");

app.use((err, req, res, next) => {
  
  if (err) {
    console.log("Erreur gérée par le programmeur :: ", err);
    res.render("error", { error: err.message });
  }
});

db.connect(() => {
  app.listen(HTTP_PORT, () => {
    console.log(`Serveur NodeJS démarré sur http://localhost:${HTTP_PORT}`);
  });
});
