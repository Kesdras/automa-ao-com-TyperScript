import { Page, Locator } from '@playwright/test';

/**
 * Page Object da tela de login da LojaQA.
 * REGRA DE OURO: nenhum expect() aqui dentro. Só ações e Locators.
 */
export class LoginPage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly statusMessage: Locator;

  constructor(private page: Page) {
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginBtn');
    this.errorMessage = page.locator('#errorMessage');
    this.statusMessage = page.locator('#statusMessage');
  }

  async goto(): Promise<void> {
    await this.page.goto('login.html');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Locators expostos para validação nos testes
  get email(): Locator {
    return this.emailInput;
  }

  get password(): Locator {
    return this.passwordInput;
  }

  get botaoEntrar(): Locator {
    return this.loginButton;
  }

  get mensagemErro(): Locator {
    return this.errorMessage;
  }

  get mensagemStatus(): Locator {
    return this.statusMessage;
  }
}
