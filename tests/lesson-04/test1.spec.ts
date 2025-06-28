import { test } from "@playwright/test";

test("Register Page", async ({ page }) => {
    await test.step("Navigate to material page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bài 1", async () => {
        await page.click('//*[@href="01-xpath-register-page.html"]')
    });
    await test.step("fill form", async () => {
        await page.locator('//*[@id="username"]').fill('anhtn');
        await page.locator('//*[@id="email"]').pressSequentially('nhatanhnd009@gmail.com');

        await page.locator('//input[@id = "female"]').check();
        await page.locator('//input[@id ="reading"]').check();
        await page.locator('//input[@id ="cooking"]').check();

        await page.locator('//select[@id ="interests"]').selectOption("technology");
        await page.locator('//select[@id ="country"]').selectOption("australia");
        await page.locator('//*[@id="dob"]').pressSequentially("23/05/1994");

        await page.locator('//*[@id = "profile"]').setInputFiles("test-data/maxresdefault-1.jpg");
        await page.locator('//*[@id="bio"]').fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n when an unknown printer took a galley of type and scrambled it to make a type specimen book. ');

        // Slider (Rating)
        const rateUSBoundingBox = await page.locator("//*[@id='rating']").boundingBox();
        if (rateUSBoundingBox) {
            const x = rateUSBoundingBox.width / 3;
            const y = rateUSBoundingBox.height / 2;
            await page.locator("//*[@id='rating']").click({
                position: { x, y }

            });
        } else {
            console.log("Rating slider not found");
        };

        await page.locator('//*[@id = "favcolor"]').fill("#d585c7");
        await page.locator('//*[@id ="newsletter"]').check();
        await page.locator('//*[@class ="slider round"]').click();
        

        const startRatingBoundingBox = await page.locator("//*[@id='starRating']").boundingBox();
        if (startRatingBoundingBox) {
            const x = (startRatingBoundingBox.width * 9) / 10;
            const y = startRatingBoundingBox.height / 2;
            await page.locator("//div[@id='starRating']").click({
                position: { x, y }

            });
        } else {
            console.log("Star rating not found");
        }
        //await page.locator('//*[@id="customDate"]').pressSequentially("27/06/2025"); //Ko work

        //click submit button
        await page.click('//*[@type ="submit"]');

    });
});
