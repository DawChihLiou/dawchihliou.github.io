import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'iPhone 13',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 13'],
      },
    },
  ],
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'e2e',

  // Each test is given 30 seconds
  timeout: 30000,

  // Two retries for each test
  retries: 2,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 2 : undefined,

  use: {
    // Record trace for each test, but remove it from successful test runs
    trace: 'retain-on-failure',

    // Record video only when retrying a test for the first time.
    video: 'on-first-retry',
  },
}
export default config
