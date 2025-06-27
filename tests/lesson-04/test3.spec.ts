import { test } from "@playwright/test";

test("Todo list", async ({ page }) => {
    test.setTimeout(120000);
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
        page.on('dialog', async dialog => {
            await dialog.accept();
        })
        for (let i = 1; i <= 100; i += 2) {
            let deleteButton = page.locator(`//button[@id="to-do-${i}-delete"]`);
            // page.once('dialog', async dialog => {
            //     await dialog.accept();
            // }); // hàm này là chạy từng lần một khác với page.on là chạy cả page sẽ phải set ngoài
            await deleteButton.click();
            await page.waitForTimeout(100);
        }

    });

})