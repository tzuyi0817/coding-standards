import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('homepage count button interact', async ({ page }) => {
  await page.getByRole('button', { name: 'count is 0' }).click();
  await expect(page.getByRole('button', { name: 'count is 1' })).toBeVisible();
  await page.getByRole('button', { name: 'count is 1' }).click();
  await expect(page.getByRole('button', { name: 'count is 2' })).toBeVisible();
});

test('locale change interact', async ({ page }) => {
  await page.getByRole('button', { name: 'English' }).click();
  await expect(page.getByRole('button', { name: '中文' })).toBeVisible();
  await page.getByRole('button', { name: '中文' }).click();
  await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
});
