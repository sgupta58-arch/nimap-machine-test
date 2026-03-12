const express = require("express")
const bodyParser = require("body-parser")


const app = express();


//---routes----//

const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");



app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.redirect("/products");
});

module.exports = app
