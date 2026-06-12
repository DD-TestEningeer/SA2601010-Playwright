

import {expect, test} from '@playwright/test';


test("Web Interactions Demo", async({page})=>{

    // open url 
    await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

    // Textbox => form filling  element.sendKeys(), element.type(), Playwright => element.fill()


// 1. Text Input
    await page.getByPlaceholder('Type something').fill('Sample Test Data');

    // Find the message element and check for the visibility 
    const textMessageElement = await page.locator('#textInputMsg');

    // const textData = await textMessageElement.innerText();


    await expect(textMessageElement).toBeVisible();
    await expect(textMessageElement).toHaveText("Typed: Sample Test Data");

// 2. Password Input
await page.locator('#passwordField').fill('Test@1234556');

// 3. Email Input
await page.locator('#emailField').fill('test@gmail.com');


// 4. Number Input
await page.locator('#numberField').fill('1222');

// 5. Radio Button
await page.locator('#maleRadio').click();
await page.waitForTimeout(2000); // manual wait
await page.locator('#femaleRadio').click();

// 6. Checkboxes
await page.locator('#subscribeChk').check();
await page.waitForTimeout(2000); // manual wait
await page.locator('#subscribeChk').uncheck();

// 7. Dropdown
await page.locator('#dropdownField').selectOption('Audi'); // by value
await page.locator('#dropdownField').selectOption({label : 'BMW'}); // by label

// 8. Multi-Select
await page.locator('#multiSelectField').selectOption(['Apple', 'Banana']);

// 9. File Upload
await page.locator('#fileUploadField').setInputFiles('C:\\Users\\hp\\Documents\\StarAgile\\SA2601010\\6_Playwright\\Playwright-Automation\\testData.txt');

 











await page.waitForTimeout(10000); // manual wait


// await page.locator('#subscribeChk').check();


});