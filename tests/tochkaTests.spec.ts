import { test, expect, FileChooser } from "@playwright/test";

test("Application Form All Fields Are Filled", async ({ page }) => {
  await page.goto("https://to4ka.us/listings/new/business");
  await page
    .locator('select[class="c-custom-dropdown__control"]')
    .first()
    .selectOption("it-services");
  await page
    .locator("label")
    .filter({ hasText: "Рекламное продвижение" })
    .click();
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page
    .locator('div[class="dropzone-custom-content"]')
    .click({ force: true });
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(__dirname + "/../assets/1.jpeg");
  await page.locator('[id="__BVID__61"]').click();
  await page.locator('[id="__BVID__61"]').fill("ITPROBE, LLC");
  await page.locator('[id="__BVID__65"]').click();
  await page.locator('[id="__BVID__65"]').fill("https://boxingshowtimes.com/");
  await page.locator('[id="__BVID__70"]').click();
  await page.locator('[id="__BVID__70"]').fill("7701");
  await page.getByText("7701 Delridge Way SouthwestSeattle, WA, USA").click();
  await page.getByRole("combobox").nth(1).selectOption("3");
  await page.locator(".CodeMirror-scroll").click();
  await page.locator("pre").nth(1).click();
  await page
    .getByRole("application")
    .getByRole("textbox")
    .fill(
      "We answer three simple questions.What To Watch, When and Where.Users can easily browse through our listings of fights, create schedules, and find the best places for them to enjoy a night of boxing. We always keep it cool and Up-To-Date."
    );
  await page.locator('[id="__BVID__83"]').type("+11111111111");
  await page.locator('[id="__BVID__84"]').fill("box23@gmail.com");
  await page.locator('[id="__BVID__87"]').fill("Kirill");
  await page.locator('[id="__BVID__90"]').fill("Bulakh");
  await page
    .locator("label")
    .filter({
      hasText:
        "Скрыть мои контактные данные от незарегистрированных пользователей",
    })
    .locator("span")
    .nth(1)
    .click();
  await page
    .locator("label")
    .filter({
      hasText:
        "Я соглашаюсь с Условиями использования и даю разрешение администрации сайта to4k",
    })
    .locator("span")
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Опубликовать" }).nth(1).click();
  // await expect(page).toHaveURL(
  //   "https://to4ka.us/catalog/albuquerque/it-services/all/dfg-it-uslugi-v-albukerke_982ba133-ef65-43fb-a081-77b10654416f?suggest-premium=1"
  // );
});

test("Application Form Without Fields With Asterisk", async ({ page }) => {
  await page.goto("https://to4ka.us/listings/new/business");
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page
    .locator('div[class="dropzone-custom-content"]')
    .click({ force: true });
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(__dirname + "/../assets/1.jpeg");
  await page.locator('[id="__BVID__65"]').click();
  await page.locator('[id="__BVID__65"]').fill("https://boxingshowtimes.com/");
  await page.locator('[id="__BVID__70"]').click();
  await page.locator('[id="__BVID__70"]').fill("7701");
  await page.getByText("7701 Delridge Way SouthwestSeattle, WA, USA").click();
  await page.locator("pre").nth(1).click();
  await page.getByRole("application").getByRole("textbox").fill("");
  await page
    .locator("label")
    .filter({
      hasText:
        "Скрыть мои контактные данные от незарегистрированных пользователей",
    })
    .locator("span")
    .nth(1)
    .click();
  await page
    .locator("label")
    .filter({
      hasText:
        "Я соглашаюсь с Условиями использования и даю разрешение администрации сайта to4k",
    })
    .locator("span")
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Опубликовать" }).nth(1).click();
});

test("Application Form Is Not Filled", async ({ page }) => {
  await page.goto("https://to4ka.us/listings/new/business");
  await page.getByRole("button", { name: "Опубликовать" }).nth(1).click();
});

test("Application Form Is Not Correct Filled", async ({ page }) => {
  await page.goto("https://to4ka.us/listings/new/business");
  await page.getByRole("combobox").first().selectOption("it-services");
  await page
    .locator("label")
    .filter({ hasText: "Рекламное продвижение" })
    .click();
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page
    .locator('div[class="dropzone-custom-content"]')
    .click({ force: true });
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(__dirname + "/../assets/1.jpeg");
  await page.locator('[id="__BVID__61"]').fill("12345sau!/@");
  await page.locator('[id="__BVID__65"]').fill("https://парPAR.ру");
  await page.locator('[id="__BVID__70"]').fill("москва россия");
  // await page.getByText("7701 Delridge Way SouthwestSeattle, WA, USA").click();
  await page.getByRole("combobox").nth(1).selectOption("19");
  await page.locator(".CodeMirror-scroll").click();
  await page.locator("pre").nth(1).click();
  await page
    .getByRole("application")
    .getByRole("textbox")
    .fill("Парим Жарим Soar 666 !@>/");
  await page.locator('[id="__BVID__83"]').type("99999999999");
  await page.locator('[id="__BVID__84"]').fill("12345собака.руm");
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти*Zadaev12");
  await page.locator('[id="__BVID__90"]').fill("12bvtyb_Залупкин");
  await page
    .locator("label")
    .filter({
      hasText:
        "Скрыть мои контактные данные от незарегистрированных пользователей",
    })
    .locator("span")
    .nth(1)
    .click();
  await page
    .locator("label")
    .filter({
      hasText:
        "Я соглашаюсь с Условиями использования и даю разрешение администрации сайта to4k",
    })
    .locator("span")
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Опубликовать" }).nth(1).click();
});
