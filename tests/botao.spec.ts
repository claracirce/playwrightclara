import { test, expect } from "@playwright/test";

test("Botão de login visível para o usuário", async ({ page }) => {
    await page.goto("/");

    const button = page.getByRole("button", { name: "login" }); //ação

    await expect(button).toBeVisible(); //verificação

});