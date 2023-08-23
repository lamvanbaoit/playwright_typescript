import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('demo first', async ({ page }) => {
   let username: string = 'standard_user';
   let password: string = 'secret_sauce';
   const loginPage = new LoginPage(page);
   await loginPage.loginToApplication(username, password);
});