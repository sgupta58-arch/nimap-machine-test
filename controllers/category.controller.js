const db = require("../db");

// ---ADD category---HTTP(GET)


exports.getCategories = (req, res) => {

  db.query("SELECT * FROM categories", (err, categories) => {

    if (err) {
      console.error(err);
      return res.send("Database error");
    }

    res.render("categories", { categories });

  });

};

// ---ADD category---HTTP(ADD)


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

// ---UPDATE category---HTTP(UPDATE)
exports.updateCategory = (req, res) => {

  const id = req.params.id;
  const { categoryName } = req.body;

  const query = `
    UPDATE categories
    SET categoryName = ?
    WHERE categoryId = ?
  `;

  db.query(query, [categoryName, id], (err) => {

    if (err) {
      console.error(err);
      return res.send("Database error");
    }

    res.redirect("/categories");

  });

};


// ---DELETE category---HTTP(DELETE)
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