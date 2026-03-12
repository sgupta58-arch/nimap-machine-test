const db = require("../db");

exports.getCategories = (req, res) => {

  db.query("SELECT * FROM categories", (err, categories) => {

    if (err) {
      console.error(err);
      return res.send("Database error");
    }

    res.render("categories", { categories });

  });

};

exports.addCategory = (req, res) => {

  const { categoryName } = req.body;

  db.query(
    "INSERT INTO categories (categoryName) VALUES (?)",
    [categoryName],
    (err) => {

      if (err) {
        console.error(err);
        return res.send("Database error");
      }

      res.redirect("/categories");
    }
  );

};

exports.deleteCategory = (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM categories WHERE categoryId = ?",
    [id],
    (err) => {

      if (err) {
        console.error(err);
        console.log("Cannot delete category ")
        return res.send("Cannot delete category because products exist");
      }

      res.redirect("/categories");

    }
  );

};