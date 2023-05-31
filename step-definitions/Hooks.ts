import { After, AfterAll, Before, BeforeAll, setWorldConstructor} from '@wdio/cucumber-framework';
import { CustomWorld } from '../support/World';
import { menu } from '../pages/Menu';

BeforeAll({}, async function() {
  setWorldConstructor(CustomWorld);
});

Before({}, async function() {
  await browser.setWindowSize(1840, 940);
});

After({ tags: '@resetAppState' }, async function() {
  await menu.openLeftMenu();
  await menu.resetAppState();
  await menu.logout();
});

AfterAll({}, async function() {
  await browser.deleteSession()
});