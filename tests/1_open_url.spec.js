import { test } from "@playwright/test";

// test case 1 - open url

test("Test Case 001 - Open the google page url", async ({ page }) => {
  // test steps

  await page.goto("https://www.google.co.in/");

  await page.goto("https://playwright.dev/");
});
