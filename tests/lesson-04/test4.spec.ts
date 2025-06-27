import { test } from "@playwright/test";

test("personal-note", async ({ page }) => {
    await test.step("Navigate to material page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bài 3", async () => {
        await page.click('//*[@href="04-xpath-personal-notes.html"]')
    });

    await test.step("Add 10 notes", async () => {
        for (let i = 1; i <= 10; i++) {
            await page.locator('//input[@id ="note-title"]').fill(`Đề Tiếng Anh thi tốt nghiệp THPT 202${i}`);
            await page.locator('//*[@id ="note-content"]').fill(`Đề Tiếng Anh thi tốt nghiệp THPT có: \n4${i} câu hỏi \ntrong 5${i} phút, giảm 10 câu so với năm ngoái`); // ko xuống dòng được
            await page.click('//button[@id = "add-note"]');
            await page.waitForTimeout(100);
        }

    });

    await test.step("Search notes", async () => {
        await page.locator('//input[@id = "search"]').fill("2025");
        let result = await page.locator('//div[@id = "note-count"]').textContent();
        console.log(result);
    })
})