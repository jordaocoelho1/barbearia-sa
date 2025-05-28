import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mysql from "mysql2";

const app = express();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Conexão bem-sucedida! 🎉");
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000 🚀"));
