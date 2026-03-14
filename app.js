const express = require("express")
const bodyParser = require("body-parser")
const methodOverride = require("method-override");


const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");



const app = express();




app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


///---routes----


app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.redirect("/products");
});

module.exports = app
