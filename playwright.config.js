import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: "steps/*.{ts,js}",
});

export default defineConfig({
  testDir,
  reporter: [["junit", { outputFile: "test-results/results.xml" }], ["html"]],
});
