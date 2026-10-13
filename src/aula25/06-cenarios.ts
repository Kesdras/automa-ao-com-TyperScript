interface CenarioQA {
  id: number;
  nome: string;
  frequencia: "alta" | "baixa";
  estabilidade: "estavel" | "instavel";
  criticidade: "alta" | "baixa";
}

const cenarios: CenarioQA[] = [
  { id: 1, nome: "Login com credenciais válidas", frequencia: "alta", estabilidade: "estavel", criticidade: "alta" },
  { id: 2, nome: "Checkout com cartão de crédito", frequencia: "alta", estabilidade: "estavel", criticidade: "alta" },
  { id: 3, nome: "Validação visual do banner promocional", frequencia: "baixa", estabilidade: "instavel", criticidade: "baixa" },
  { id: 4, nome: "Teste exploratório de usabilidade na Home", frequencia: "baixa", estabilidade: "instavel", criticidade: "baixa" },
  { id: 5, nome: "Recuperação de senha por e-mail", frequencia: "alta", estabilidade: "estavel", criticidade: "alta" }
];

function decidirAutomacao(cenario: CenarioQA): boolean {
  // Regra de decisão: automatizar se for frequente, estável e crítico
  if (cenario.frequencia === "alta" && cenario.estabilidade === "estavel" && cenario.criticidade === "alta") {
    return true;
  } else {
    return false;
  }
}

let totalAutomatizaveis = 0;

console.log("=== AVALIAÇÃO DE CENÁRIOS DE AUTOMAÇÃO ===");

for (const cenario of cenarios) {
  const automatizar = decidirAutomacao(cenario);

  if (automatizar) {
    totalAutomatizaveis++;
    console.log(`[AUTOMATIZAR] Cenário ${cenario.id}: ${cenario.nome}`);
  } else {
    console.log(`[NÃO AUTOMATIZAR] Cenário ${cenario.id}: ${cenario.nome}`);
  }
}

console.log(`\nResultado: ${totalAutomatizaveis} cenários automatizáveis de ${cenarios.length} analisados.`);