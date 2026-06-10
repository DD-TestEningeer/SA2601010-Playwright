import { test, expect } from "@playwright/test";

test("TC001 - Verify the user login with valid details", async ({ page }) => {
  // test steps

  // open the url
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // find the header element
  const headerElement = await page.getByRole("heading", { name: "Test login" });
  await expect(headerElement).toBeVisible();

  // find the username element

  const testCase1TitleElement = await page.getByRole("heading", {
    name: "Test case 1: Positive LogIn test",
  });

  // WebElement headerElement = driver.findElement(By.xpath("//h5"));

  await expect(testCase1TitleElement).toBeVisible();
});
