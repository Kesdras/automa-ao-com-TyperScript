// 1. Uso de Arrays e Objetos
export interface CasoDeTeste {
  id: number;
  titulo: string;
  status: 'Passou' | 'Falhou' | 'Pendente';
}

export const listaCasosTeste: CasoDeTeste[] = [
  { id: 1, titulo: 'Login válido', status: 'Passou' },
  { id: 2, titulo: 'Checkout com PIX', status: 'Pendente' },
  { id: 3, titulo: 'Filtro de busca', status: 'Passou' }
];

// 2. Simulação de uma Promise
export function simularExecucaoTeste(caso: CasoDeTeste): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulando o tempo de resposta do servidor (1 segundo)
    setTimeout(() => {
      if (caso.status !== 'Pendente') {
        resolve(`O teste "${caso.titulo}" foi executado com sucesso!`);
      } else {
        reject(`O teste "${caso.titulo}" está pendente e não pôde rodar.`);
      }
    }, 1000);
  });
}

// 3. Função Assíncrona com async/await
export async function rodarAutomacao(caso: CasoDeTeste) {
  try {
    /* 
      EXPLANATION: FLUXO ASSÍNCRONO (async/await)
      1. A função 'rodarAutomacao' é declarada como 'async', permitindo o uso do 'await'.
      2. Quando o interpretador chega na linha com 'await simularExecucaoTeste(caso)', 
         a execução desta função pausa temporariamente, liberando a thread principal 
         para outras tarefas (o código não trava a aplicação).
      3. O JavaScript fica aguardando a Promise ser resolvida (resolve) ou rejeitada (reject) 
         após o tempo do setTimeout.
      4. Assim que a Promise retorna o valor, ele é armazenado na constante 'resultado' 
         e o bloco 'try' continua normalmente.
      5. Se houver um erro (reject), o fluxo pula automaticamente para o bloco 'catch'.
    */
    console.log(`Iniciando execução do caso #${caso.id}...`);
    const resultado = await simularExecucaoTeste(caso);
    console.log(resultado);
    return resultado;
  } catch (erro) {
    console.error(`Erro capturado: ${erro}`);
    throw erro;
  }
}
