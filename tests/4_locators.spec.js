// Locators in Playwright - Built in locators

// 1) getByRole()
// 2) getByText()

import { test, expect } from "@playwright/test";

test("Locator Demo", async ({ page }) => {
  // open the url
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // header text
  const headerElement1 = await page.getByRole("heading", {
    name: "Test login",
  });
  await expect(headerElement1).toBeVisible();

  // getByText()
  const headerElement2 = await page.getByText("Test login");
  await expect(headerElement2).toBeVisible();

  //   const usernameLabel = await page.getByText("Username");
  //   await expect(usernameLabel).toBeVisible();

  const blogLink = await page.getByText("Blog"); // find the element
  await expect(blogLink).toBeVisible(); // assertion/validation
  // await blogLink.click();                               // user action

  // url validation
  // const currentUrl =   await page.url();
  // await expect (currentUrl).toContain("/blog/");

  // navigate back to the home page

  // const homeLink = await page.getByText('Home');
  // await homeLink.click();

  // page.getByLabel():

  const usernameLabelElement = await page.getByLabel("username");
  await expect(usernameLabelElement).toBeVisible();

  const passwordLabelElement = await page.getByLabel("password");
  await expect(passwordLabelElement).toBeVisible();

  // page.getByPlaceholder();

  await page.goto("https://dd-qa-trainings.vercel.app/banking/login");

  const usernameInput = await page.getByPlaceholder("Enter username");

  await expect(usernameInput).toBeVisible();

  const passwordInput = await page.getByPlaceholder("Enter password");

  await expect(passwordInput).toBeVisible();

  // page.getByAltText():

  await page.goto("https://practicetestautomation.com/practice-test-login/");

  const imageElement = await page.getByAltText("Practice Test Automation");

  await expect(imageElement).toBeVisible();


  // page.getByTitle('value') => only when title property is present

  // page.getByTestId() 

  // <button data-testid="submit-btn">Submit</button>
  // await page.getByTestId('submit-btn');






});
