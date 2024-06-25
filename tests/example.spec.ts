import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.universoacdc.com/');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').fill('info@universoacdc.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('example1234!');

  // Haz clic en el botón de inicio de sesión
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('banner').locator('span').click();
  await page.getByRole('button', { name: 'Mi perfil' }).click();

  // Espera un momento para verificar que la página se ha cargado después del inicio de sesión
  await page.waitForTimeout(5000); 

      });
