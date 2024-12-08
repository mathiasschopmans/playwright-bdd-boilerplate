import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I open url {string}", async ({ page }, url) => {
  await page.goto(url);
});

When("I click link {string}", async ({ page }, name) => {
  await page.getByRole("link", { name }).click();
});

Then("I see {string} in title", async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});

Then("I see {string} as headline", async ({ page }, name) => {
  await expect(page.getByRole("heading", { name })).toBeVisible();
});

Then(
  "I see {string} as headline with level {string}",
  async ({ page }, name, level) => {
    const heading = page.getByRole("heading", { name });

    // first assertion to check that a heading with the given name is visible
    await expect(heading).toBeVisible();

    // second assertion to check for the level
    const actualLevel = await heading.evaluate((el) => el.tagName);
    expect(actualLevel, "unexpected level of heading").toEqual(`H${level}`);
  },
);
