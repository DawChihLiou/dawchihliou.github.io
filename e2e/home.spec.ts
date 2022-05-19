import { test, expect } from '@playwright/test'

test('should navigate to the contact page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Hire Me')
  await expect(page).toHaveURL('http://localhost:3000/contact')
  await expect(page.locator('h1')).toContainText('Get in Touch')
})

test('should navigate to the expertise page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=See more about my approach')
  await expect(page).toHaveURL('http://localhost:3000/expertise')
  await expect(page.locator('h1')).toContainText('Build to Win')
})

test('should navigate to the work page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=See more of my work')
  await expect(page).toHaveURL('http://localhost:3000/work')
  await expect(page.locator('h1')).toContainText(
    'I Build Meaningful Products and Open Source Software'
  )
})

test('should navigate to the articles page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=See more articles')
  await expect(page).toHaveURL('http://localhost:3000/articles')
  await expect(page.locator('h1')).toContainText(
    'I Write to Share What I Learned'
  )
})
