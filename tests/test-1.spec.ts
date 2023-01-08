import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://to4ka.us/listings/new/business");
  await page
    .getByRole("combobox")
    .first()
    .selectOption("russian-banya-and-sauna");
  await page.locator('[id="__BVID__61"]').click();
  await page.locator('[id="__BVID__61"]').fill("12345sau");
  await page.locator('[id="__BVID__61"]').press("CapsLock");
  await page.locator('[id="__BVID__61"]').fill("14235sauНаШишках");
  await page.getByPlaceholder("https://to4ka.us").click();
  await page.getByPlaceholder("https://to4ka.us").fill("пар");
  await page.getByPlaceholder("https://to4ka.us").press("CapsLock");
  await page.getByPlaceholder("https://to4ka.us").fill("парPAR.");
  await page.getByPlaceholder("https://to4ka.us").press("CapsLock");
  await page.getByPlaceholder("https://to4ka.us").fill("парPAR.ру");
  await page.locator('[id="__BVID__70"]').click();
  await page.locator('[id="__BVID__70"]').fill("москва россия");
  await page.getByRole("combobox").nth(1).selectOption("19");
  await page.getByRole("combobox").nth(1).click();
  await page.locator(".CodeMirror-scroll").click();
  await page.getByRole("application").getByRole("textbox").fill("Парим Жарим");
  await page.getByPlaceholder("+1 (___) ___ ____").click();
  await page.getByPlaceholder("+1 (___) ___ ____").fill("+1 (999) 999 99999");
  await page.getByPlaceholder("me@example.com").click();
  await page.getByPlaceholder("me@example.com").fill("12345собака.ру");
  await page.locator('[id="__BVID__87"]').click();
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти");
  await page.locator('[id="__BVID__87"]').press("CapsLock");
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти*");
  await page.locator('[id="__BVID__87"]').press("CapsLock");
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти*");
  await page.locator('[id="__BVID__87"]').press("CapsLock");
  await page.locator('[id="__BVID__87"]').press("CapsLock");
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти*");
  await page.locator('[id="__BVID__87"]').press("CapsLock");
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти*Zadaev");
  await page.locator('[id="__BVID__90"]').click();
  await page.locator('[id="__BVID__90"]').fill("12bvtyb");
  await page.locator('[id="__BVID__87"]').click();
  await page.locator('[id="__BVID__87"]').fill("Ухтар-балы_махти*Zadaev1");
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
  await page.locator(".CodeMirror-lines").click();
  await page.getByRole("application").getByRole("textbox").fill(" ");
  await page.getByRole("application").getByRole("textbox").press("CapsLock");
  await page.getByRole("application").getByRole("textbox").fill(" Л");
  await page.getByRole("application").getByRole("textbox").press("CapsLock");
  await page.getByRole("application").getByRole("textbox").fill("Soar Broil ");
  await page.getByRole("button", { name: "Опубликовать" }).nth(1).click();
});
