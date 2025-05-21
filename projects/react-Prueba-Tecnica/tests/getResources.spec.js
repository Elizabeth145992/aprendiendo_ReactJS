// @ts-check
import { test, expect } from '@playwright/test';

const localHostUrl = "http://localhost:5173/";
const catPrefixUrl = 'https://cataas.com/'
test('app shows random fact and image', async ({ page }) => {
  await page.goto(localHostUrl);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textConten = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textConten?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(catPrefixUrl)).toBeTruthy();

});

