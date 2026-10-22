import { test, expect } from '../fixtures/auth.fixture';

interface Cenario {
  nome: string;
  email: string;
  senha: string;
  sucesso: boolean;
}

// Massa de dados oficial exibida na tela de login da LojaQA
const cenarios: Cenario[] = [
  { nome: 'cliente válido', email: 'user@system.com', senha: 'UserPassword123', sucesso: true },
  { nome: 'admin válido', email: 'admin@system.com', senha: 'AdminPassword123', sucesso: true },
  { nome: 'lojista válido', email: 'lojista@system.com', senha: 'SellerPass123', sucesso: true },
  { nome: 'senha errada', email: 'user@system.com', senha: 'SenhaErrada999', sucesso: false },
  { nome: 'usuário bloqueado', email: 'blocked@system.com', senha: 'Blocked123', sucesso: false },
];

for (const cenario of cenarios) {
  test(`Login data-driven: ${cenario.nome}`, async ({ page, loginPage }) => {
    // 1. Navegar para a página de login antes de tentar interagir com os elementos
    await loginPage.goto();

    // 2. Realizar a ação de login
    await loginPage.login(cenario.email, cenario.senha);

    if (cenario.sucesso) {
      await expect(page).toHaveURL(/painel\.html/);
    } else {
      // Confirme se no seu Page Object o atributo se chama mensagemErro ou errorMessage
      await expect(loginPage.mensagemErro).toBeVisible();
    }
  });
}