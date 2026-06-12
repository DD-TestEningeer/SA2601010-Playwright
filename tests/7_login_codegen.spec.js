

// login with valid details using codegen 

import { test, expect } from '@playwright/test';

test('test case 1', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('strong')).toMatchAriaSnapshot(`- strong: Congratulations student. You successfully logged in!`);
  await page.getByRole('link', { name: 'Log out' }).click();
});

test('test case 2', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('testInvalidUser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
});