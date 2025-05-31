require("dotenv").config();
const mysql = require("mysql2/promise");

async function testConnection() {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };

  try {
    console.log("Tentando conectar com:", config);
    const connection = await mysql.createConnection(config);
    console.log("Conexão estabelecida!");

    console.log("\nTestando tabela usuarios...");
    const [usuarios] = await connection.execute(
      "SELECT COUNT(*) as count FROM usuarios"
    );
    console.log("Total de usuários:", usuarios[0].count);

    console.log("\nTestando tabela clientes...");
    const [clientes] = await connection.execute(
      "SELECT COUNT(*) as count FROM clientes"
    );
    console.log("Total de clientes:", clientes[0].count);

    await connection.end();
  } catch (error) {
    console.error("Erro ao testar conexão:", error);
  }
}

testConnection();
