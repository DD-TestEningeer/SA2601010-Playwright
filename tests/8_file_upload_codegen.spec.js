

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/upload');
  await expect(page.getByRole('heading', { name: 'File Uploader page for' })).toBeVisible();
  await page.getByTestId('file-input').click();
  await page.getByTestId('file-input').setInputFiles('testData.txt');
  await page.getByTestId('file-submit').click();

  await page.waitForTimeout(10000);
  await expect(page.locator('h1')).toContainText('File Uploaded!');
});