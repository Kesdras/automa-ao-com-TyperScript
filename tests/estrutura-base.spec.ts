import { test, expect } from '@playwright/test';

test('Verificar se o campo de busca da Wikipedia está visível', async ({ page }) => {
  
  await page.goto('https://www.wikipedia.org');

  const campoBusca = page.locator('#searchInput');

  await expect(campoBusca).toBeVisible();
});