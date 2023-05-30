import { When } from '@cucumber/cucumber';
import { menu } from '../pages/Menu';

When(/^I go to "(.+)" page/, async function(pageName: string) {
  menu.goToPage(pageName);
});
