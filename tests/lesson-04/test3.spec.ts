import { test } from "@playwright/test";

test("Todo list", async ({ page }) => {
    await test.step("Navigate to material page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bài 3", async () => {
        await page.click('//*[@href="03-xpath-todo-list.html"]')
    });
    await test.step("Add 100 todo tasks", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id = "new-task"]').fill(`To do ${i}`);
            await page.click('//button[@id = "add-task"]'); // click add task button sau moi lan add
        }
    });
    await test.step("Remove odd-numbered tasks", async () => {
        for (let i = 1; i <= 100; i += 2) {
            let deleteButton = page.locator(`//button[@id="to-do-${i}-delete"]`);
            page.once('dialog', async dialog => {
                await dialog.accept();
            });
            await deleteButton.click();
            await page.waitForTimeout(200);
        }

    });

})