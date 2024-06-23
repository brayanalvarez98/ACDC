import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('test', async ({ page }) => {
  await page.goto('https://app.universoacdc.com/');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').fill('info@universoacdc.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('example1234!');

  // Haz clic en el botón de inicio de sesión
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('banner').locator('span').click();
  await page.getByRole('button', { name: 'Misiones Diarias' }).click();

  // Espera un momento para verificar que la página se ha cargado después del inicio de sesión
  await page.waitForTimeout(5000); 

    



  });
