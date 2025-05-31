require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const dbConfig = {
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "lidernetwork",
  password: process.env.DB_PASS || "301420629",
  database: process.env.DB_NAME || "barbearia_sa",
};

// Função de teste de conexão
async function testDbConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute("SELECT 1");
    await connection.end();
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso");
    return true;
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
    return false;
  }
}

// Rota para buscar resumo dos clientes
app.get("/api/clientes/resumo", async (req, res) => {
  let connection;
  try {
    // Estabelecer conexão
    connection = await mysql.createConnection(dbConfig);

    // Verificar se as tabelas existem
    const [tables] = await connection.execute(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = '${dbConfig.database}'
      AND table_name IN ('clientes', 'usuarios')
    `);

    const existingTables = tables.map((t) => t.TABLE_NAME);
    console.log("Tabelas encontradas:", existingTables);

    if (
      !existingTables.includes("clientes") ||
      !existingTables.includes("usuarios")
    ) {
      throw new Error("Tabelas necessárias não encontradas");
    }

    // Query única para todas as informações
    const query = `
      SELECT 
        (SELECT COUNT(*) FROM clientes) as total,
        (SELECT COUNT(*) FROM usuarios WHERE status = 1 AND tipo = 'cliente') as ativos,
        0 as novos,
        (SELECT COUNT(*) FROM clientes WHERE MONTH(data_nascimento) = MONTH(CURDATE())) as aniversariantes
    `;

    const [result] = await connection.execute(query);

    res.json({
      total: result[0].total || 0,
      ativos: result[0].ativos || 0,
      novos: result[0].novos || 0,
      aniversariantes: result[0].aniversariantes || 0,
    });
  } catch (error) {
    console.error("Erro detalhado:", error);
    res.status(500).json({
      error: "Erro ao buscar resumo dos clientes",
      details: error.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (err) {
        console.error("Erro ao fechar conexão:", err);
      }
    }
  }
});

// Rota para buscar clientes
app.get("/api/clientes", async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(`
      SELECT 
        c.id,
        u.nome,
        c.telefone,
        c.cpf,
        c.data_nascimento,
        c.pontos,
        c.nivel,
        c.ultima_visita,
        u.status
      FROM clientes c
      INNER JOIN usuarios u ON c.usuario_id = u.id
      ORDER BY u.nome
    `);
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ error: "Erro ao buscar clientes" });
  } finally {
    if (connection) await connection.end();
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  // Testar conexão com o banco ao iniciar
  await testDbConnection();
});
