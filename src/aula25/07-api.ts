// Exemplo de teste de API REST pública (JSONPlaceholder)
async function consultarApiPublica() {
  console.log("Buscando dados na API...");

  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // Valida se o status HTTP é de sucesso (ex: 200)
    if (!resposta.ok) {
      throw new Error(`Erro HTTP! Status: ${resposta.status}`);
    }

    const dados = await resposta.json();

    console.log("Requisição feita com sucesso!");
    console.log("Dados retornados:", dados);
    console.log(`Título da tarefa: "${dados.title}"`);
    console.log(`Está concluída? ${dados.completed ? "Sim" : "Não"}`);

  } catch (erro) {
    console.error("Deu ruim na requisição:", erro);
  }
}

consultarApiPublica();