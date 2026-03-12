const express = require("express");
const bodyParser = require("body-parser");
const app = require("./app.js")
const dotenv = require("dotenv")
dotenv.config()

const {checkConnection} = require("./db.js")


app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  try {
    await checkConnection
    
    
  } catch (error) {
    console.log(error,"connection to database failed ")
    
  }
});