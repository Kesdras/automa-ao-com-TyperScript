import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { test as authTest, expect as authExpect } from '../fixtures/auth.fixture';

test.describe('Login LojaQA (POM)', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Cenário 1 - Caminho feliz: cliente válido acessa o painel', async ({ page }) => {
    await loginPage.login('user@system.com', 'UserPassword123');

    await expect(page).toHaveURL(/painel\.html/);
  });

  test('Cenário 2 - Caminho triste: senha incorreta exibe erro', async () => {
    await loginPage.login('user@system.com', 'SenhaErrada999');

    await expect(loginPage.mensagemErro).toBeVisible();
  });

  test('Cenário 3 - Regra de negócio: botão inicia desabilitado', async () => {
    await expect(loginPage.botaoEntrar).toBeDisabled();
  });
});

// Demonstração de uso da fixture customizada
authTest('Fixture: página autenticada já está no painel', async ({ paginaAutenticada }) => {
  await authExpect(paginaAutenticada).toHaveURL(/painel\.html/);
});
