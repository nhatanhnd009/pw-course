import { test } from "@playwright/test";

test("Register Page", async ({ page }) => {
    await test.step("Navigate to material page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bài 2", async () => {
        await page.click('//*[@href="02-xpath-product-page.html"]')
    });

    await test.step("Add product", async () => {
        // Double click product 1
        await page.dblclick('//button[@data-product-id = "1"]')

        // Triple click product 2
        await page.locator('//button[@data-product-id = "2"]').click(
            {
                clickCount: 3
            }
        );

        // Single click product 3
        await page.click('//button[@data-product-id = "3"]')
    });
})