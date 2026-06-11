// import statement

import { test, expect } from "@playwright/test";

test("Verify the user login with valid details", async ({ page }) => {
  // open the url
  await page.goto("https://demo.guru99.com/V4/index.php");

  // find the header element
  const headerTextElement = await page.getByRole("heading", {
    name: "Guru99 Bank",
  }); //  await page.getByText('Guru99 Bank'); // unique
  await expect(headerTextElement).toBeVisible();

  // find the userid input element
  const useridElement = await page.getByRole("textbox").first();
  await expect(useridElement).toBeVisible();
  await useridElement.fill("mngr662924");

  // find the password input element

  const passwordElement = await page.getByRole("textbox").last();
  await expect(passwordElement).toBeVisible();
  await passwordElement.fill("hYgEseg");

  // click on the login button
  //   const loginButton = await page.getByText("LOGIN"); // 4 elements

  // css selectors
  // id, class, attributes, parent > child, tagname

  const loginButton = await page.locator('[value="LOGIN"]');
  await loginButton.click();

  // verify the Manger Id : mngr662924

  const loginHeaderElement = await page.locator('[style="color: green"]');

  await expect(loginHeaderElement).toBeVisible();

  // xpath locators

  const newCustomerLink = await page.locator("//a[text()='New Customer']");
  await newCustomerLink.click();
});
