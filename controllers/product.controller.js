const db = require("../db");

exports.getProducts = (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;

  const offset = (page - 1) * pageSize;

  const productQuery = `
    SELECT 
    p.productId,
    p.productName,
    p.categoryId,
    c.categoryName
    FROM products p
    LEFT JOIN categories c
    ON p.categoryId = c.categoryId
    LIMIT ? OFFSET ?
  `;

  db.query(productQuery, [pageSize, offset], (err, products) => {

    if (err) {
      console.error(err);
      return res.send("Database error");
    }

    db.query("SELECT COUNT(*) AS total FROM products", (err, countResult) => {

      if (err) {
        console.error(err);
        return res.send("Database error");
      }

      const totalRecords = countResult[0].total;
      const totalPages = Math.ceil(totalRecords / pageSize);

      db.query("SELECT * FROM categories", (err, categories) => {

        if (err) {
          console.error(err);
          return res.send("Database error");
        }

        res.render("products", {
          products,
          categories,
          page,
          totalPages
        });

      });

    });

  });

};
exports.addProduct = (req, res) => {

  const { productName, categoryId } = req.body;

  db.query(
    "INSERT INTO products (productName, categoryId) VALUES (?, ?)",
    [productName, categoryId],
    (err) => {

      if (err) {
        console.error(err);
        return res.send("Database error");
      }

      res.redirect("/products");

    }
  );

};

exports.deleteProduct = (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM products WHERE productId = ?",
    [id],
    (err) => {

      if (err) {
        console.error(err);
        return res.send("Database error");
      }

      res.redirect("/products");

    }
  );

};