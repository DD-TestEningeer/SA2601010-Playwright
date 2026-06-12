// User signup

import { test, expect } from "@playwright/test";

test("Verify the user signup with valid details", async ({ page }) => {
  // open url
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");

  // page header
  const headerElement = await page.getByText("Contact List App");
  await expect(headerElement).toBeVisible();

  // click on the signup button

  const singupButton = await page.locator('#signup');
  
  await expect(singupButton).toBeVisible();

  await singupButton.click();



    await page.waitForTimeout(10000);

  // verify that user navigates to the add user page
  const headerElement2 = await page.getByText("Add User");
  await expect(headerElement2).toBeVisible();

  // enter first name
  await page.getByPlaceholder("First Name").fill("Dnyaneshwar");

  // enter last name
  await page.getByPlaceholder("Last Name").fill("Divekar");

  // enter email
  await page.getByPlaceholder("Email").fill("dd1211@test.com");

  // enter password
  await page.getByPlaceholder("Password").fill("Test@12345");

  // click on the submit button
  await page.getByText("Submit").click();


  await page.waitForTimeout(10000);


});
