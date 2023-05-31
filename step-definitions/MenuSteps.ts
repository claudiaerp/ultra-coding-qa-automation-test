import { When, Then, DataTable} from '@cucumber/cucumber';
import { menu } from '../pages/Menu';
import { homePage } from '../pages/HomePage';

When(/^I go to "(.+)" page/, async function(pageName: string) {
  await menu.goToPage(pageName);
});

Then(/^I should be redirected to the "(.+)" page/, async function(pageName: string, pageTitle: DataTable) {
  expect(menu.pageTitle).toBeDisplayed();
  expect(await menu.getPageTitle()).toEqual(pageTitle.hashes()[0]['page_title']);
});