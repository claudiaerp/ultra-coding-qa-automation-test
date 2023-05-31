import { When, Then, DataTable} from '@cucumber/cucumber';
import { cartPage } from '../pages/CartPage';
import users from '../test-data/users.json';

When(/^I can see the following products in my cart$/, async function(dataTable: DataTable) {
    const products = dataTable.hashes()[0]['products_names'].split(',');
    for (const product of products) {
      expect(await cartPage.isProductExistent(product)).toEqual(true);
    }
});

Then(/^I proceed to the checkout/, async function() {
  await cartPage.clickCheckoutButton();
});


Then(/^I enter (valid|invalid) personal information details/, async function(option: string) {
  if (option === 'valid') {
    const user = users[this.currentUser];
    await cartPage.inputPersonalInfo(user.first_name, user.last_name, user.postal_code);
  } else {
    await cartPage.inputPersonalInfo('', '', '');
  }
});

Then(/^I confirm the order/, async function() {
  await cartPage.clickFinishBtn();
});

Then(/^I receive feedback that my personal information details are incorrect/, async function() {
  await cartPage.clickFinishBtn();
});


Then(/^Continue button (should|should not) be disabled$/, async function(option: string) {
  if (option === 'should') {
    expect(await cartPage.isContinueBtnDisabled()).toEqual(true);
  } else {
    expect(await cartPage.isContinueBtnDisabled()).toEqual(false);
  }
});

Then(/^Checkout button (should|should not) be disabled$/, async function(option: string) {
  if (option === 'should') {
    expect(await cartPage.isCheckoutBtnDisabled()).toEqual(true);
  } else {
    expect(await cartPage.isCheckoutBtnDisabled()).toEqual(false);
  }
});
