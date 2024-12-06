import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: "steps/*.{ts,js}",
});

export default defineConfig({
  testDir,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["junit", { outputFile: "test-results/results.xml" }], ["html"]],
});
