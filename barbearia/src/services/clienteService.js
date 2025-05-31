const API_URL = "/api";

export async function getClientes() {
  try {
    const response = await fetch(`${API_URL}/clientes`);
    if (!response.ok) {
      throw new Error("Erro ao buscar clientes");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    throw error;
  }
}

export async function getResumoClientes() {
  try {
    const response = await fetch(`${API_URL}/clientes/resumo`);
    if (!response.ok) {
      throw new Error("Erro ao buscar resumo");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar resumo:", error);
    throw error;
  }
}
