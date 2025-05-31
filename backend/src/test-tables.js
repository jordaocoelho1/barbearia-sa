const mysql = require("mysql2/promise");

const dbConfig = {
  host: "127.0.0.1",
  user: "lidernetwork",
  password: "301420629",
  database: "barbearia_sa",
};

async function testDatabase() {
  let connection;
  try {
    console.log("Tentando conectar ao banco...");
    connection = await mysql.createConnection(dbConfig);
    console.log("Conexão estabelecida!");

    console.log("\nVerificando tabelas...");
    const [tables] = await connection.execute(
      `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = ?
    `,
      [dbConfig.database]
    );

    console.log(
      "Tabelas encontradas:",
      tables.map((t) => t.TABLE_NAME)
    );

    if (tables.length > 0) {
      for (const table of tables) {
        const [count] = await connection.execute(
          `SELECT COUNT(*) as count FROM ${table.TABLE_NAME}`
        );
        console.log(`\nRegistros em ${table.TABLE_NAME}:`, count[0].count);
      }
    }
  } catch (error) {
    console.error("Erro:", error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

testDatabase();
