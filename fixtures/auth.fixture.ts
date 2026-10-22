import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type AuthFixtures = {
  loginPage: LoginPage;
  paginaAutenticada: Page;
};

export const CLIENTE_VALIDO = {
  email: 'user@system.com',
  password: 'UserPassword123',
};

export const test = base.extend<AuthFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  paginaAutenticada: async ({ page, loginPage }, use) => {
    await loginPage.login(CLIENTE_VALIDO.email, CLIENTE_VALIDO.password);
    await page.waitForURL(/painel\.html/);
    await use(page);
  },
});

export { expect };