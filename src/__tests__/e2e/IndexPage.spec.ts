import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('click Vite logo open Vite official website blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'Vite logo' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Vite | Next Generation Frontend Tooling');
});

test('click Vue logo open Vue official website blank tab', async ({ page, context }) => {
  await page.getByTitle('#icon-vue').click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Vue.js - The Progressive JavaScript Framework | Vue.js');
});

test('homepage count button interact', async ({ page }) => {
  await page.getByRole('button', { name: 'count is 0' }).click();
  await expect(page.getByRole('button', { name: 'count is 1' })).toBeVisible();
  await page.getByRole('button', { name: 'count is 1' }).click();
  await expect(page.getByRole('button', { name: 'count is 2' })).toBeVisible();
});

test('click create-vue link open Vue quick start blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'create-vue' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Quick Start | Vue.js');
});

test('click Volar link open language-tools github blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'Volar' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('GitHub - vuejs/language-tools: ⚡ High-performance Vue language tooling based-on Volar.js');
});

test('locale change interact', async ({ page }) => {
  await page.getByRole('button', { name: 'English' }).click();
  await expect(page.getByRole('button', { name: '中文' })).toBeVisible();
  await expect(page.getByRole('button', { name: '登入' })).toBeVisible();
  await page.getByRole('button', { name: '中文' }).click();
  await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'login' })).toBeVisible();
});

test('login and logout test', async ({ page }) => {
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login!' })).toBeVisible();
  await page.getByLabel('Account').fill('root');
  await page.getByLabel('Password').fill('123456789');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page.getByRole('button', { name: 'logout' })).toBeVisible();
  await page.getByRole('button', { name: 'logout' }).click();
  await expect(page.getByRole('button', { name: 'login' })).toBeVisible();
});

test('click create-vue link open Vue quick start blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'create-vue' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Quick Start | Vue.js');
});

test('click Volar link open language-tools github blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'Volar' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle(
    'GitHub - vuejs/language-tools: ⚡ High-performance Vue language tooling based-on Volar.js'
  );
});
