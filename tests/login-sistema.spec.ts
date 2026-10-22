import { test, expect } from '@playwright/test';

test.describe('Fluxo de Login - Sistema de Login (E2E)', () => {
    
    // A URL da aplicação hospedada no GitHub Pages
    const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html';

    // O beforeEach garante que todo teste comece do zero na página correta
    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
    });

    test('Cenário 1: Deve carregar a página de login com todos os elementos visíveis', async ({ page }) => {
        // Valida se o título da aba está correto
        await expect(page).toHaveTitle(/LojaQA|Entrar|Login/i);
        
        // Verifica se os campos obrigatórios e o botão de acesso estão na tela usando os IDs corretos
        await expect(page.locator('#email')).toBeVisible(); 
        await expect(page.locator('#password')).toBeVisible(); 
        await expect(page.getByRole('button', { name: /entrar|login/i })).toBeVisible();
    });

    test('Cenário 2: Caminho Feliz - Login com credenciais válidas', async ({ page }) => {
        // Ação (Act) - Utilizando IDs específicos para evitar strict mode violation
        await page.locator('#email').fill('user@system.com');
        await page.locator('#password').fill('UserPassword123');
        await page.getByRole('button', { name: /entrar|login/i }).click();

        // Validação (Assert)
        await expect(page).toHaveURL(/.*painel|.*dashboard|.*index/i);
    });

    test('Cenário 3: Caminho de Erro - Senha incorreta', async ({ page }) => {
        // Ação (Act)
        await page.locator('#email').fill('user@system.com');
        await page.locator('#password').fill('SenhaErrada999');
        await page.getByRole('button', { name: /entrar|login/i }).click();

        // Validação (Assert)
        await expect(page.locator('#errorMessage')).toBeVisible();
    });

    test('Cenário 4: Prevenção - Tentar logar com campos vazios', async ({ page }) => {
        // Clica direto no botão sem preencher nada
         await expect(page.getByRole('button', { name: /entrar|login/i })).toBeDisabled();

        // Valida que o usuário não foi redirecionado e continua na página de login
        await expect(page).toHaveURL(BASE_URL);
    });
});
