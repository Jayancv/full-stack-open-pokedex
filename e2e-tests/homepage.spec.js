const { test, describe, expect } = require('@playwright/test')

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto(BASE_URL)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('Navigate pokemon', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.click('a[href="/pokemon/pidgeotto"]')
    await expect(page.getByText('pidgeotto')).toBeVisible()
    await expect(page.getByText('keen eye')).toBeVisible()
    await expect(page.getByText('big pecks')).toBeVisible()
  })
})