import { Given, Then } from '@cucumber/cucumber';
import { loginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

Given(/^I login as an "(.+)" user/, async function(userRole: string) {
  await browser.maximizeWindow()
  await browser.url(browser.options.baseUrl);
  this.currentUser = userRole;
  const user = users[userRole];
  await loginPage.login(user.username, user.password);
});

Then(/^I should be on the login page/, async function() {
  await expect(loginPage.username).toBeDisplayed();
  await expect(loginPage.password).toBeDisplayed();
});


