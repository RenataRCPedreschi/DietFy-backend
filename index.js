require("dotenv").config();
const { connection, authenticate } = require("./db/db");
const express = require("express");

const app = express();

app.use(express.json());

authenticate(connection);
connection.sync();

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3000");
})