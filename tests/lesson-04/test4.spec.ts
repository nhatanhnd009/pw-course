import { test } from "@playwright/test";

test("personal-note", async ({ page }) => {
    test.setTimeout(1200000);
    await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe');
    const article = await page.locator('//article[@class = "item-news item-news-common thumb-left"]');
    const count = await article.count();
    const lstData: any[] = [];
    for (let i = 0; i < count; i++) {
        const item = article.nth(i);
        const title = await item.locator('//*[@class="title-news"]/a').innerText();
        const description = await item.locator('//*[@class="description"]/a').innerText();
        if (title && description) {
            //const obj = { title: title, description: description};
            lstData.push({ title, description });
        }
    }
    //console.log(lstData);

    await test.step("Navigate to material page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bài 4", async () => {
        await page.click('//*[@href="04-xpath-personal-notes.html"]')
    });

    /**
     * Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc-cong-nghe
     */
    await test.step("Add 10 note", async () => {
        for (let i = 0; i < lstData.length; i++) {
            if (lstData[i]) {
                await page.locator('//input[@id = "note-title"]').fill(`${lstData[i].title}`);
                await page.locator('//textarea[@id = "note-content"]').fill(`${lstData[i].description}`);
                await page.click('//button[@id = "add-note"]'); // click add task button sau moi lan add
            }
        }
    });

    await test.step("Search Item", async () => {
        await page.locator('//input[@id = "search"]').fill("Vệ tinh NASA");
    });

});