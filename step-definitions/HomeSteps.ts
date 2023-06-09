import { When, Then, DataTable} from '@cucumber/cucumber';
import { homePage } from '../pages/HomePage';
import { menu } from '../pages/Menu';

When(/^I (add|remove) the following products? (to|from) the cart$/, async function(action: string, option: string, dataTable: DataTable) {
  await browser.pause(1500);
  const products = dataTable.hashes()[0]['products_names'].split(',');
  for (const product of products) {
    await homePage.clickCartButton(product, action);
  }
});

Then(/^The products? should be( added| removed)( to| from) the cart/, async function(action: string, option: string, dataTable: DataTable) {
  const products = dataTable.hashes()[0]['products_names'].split(',');
  action = action.trim();
  let expectedNumberOfProducts: number = 0;
  for (const product of products) {
    const isRemoveBtnDisplayed: boolean = await homePage.isRemoveBtnDisplayed(product);
    const expectedVisibility: boolean = (action === 'added') ? true : false;
    expect(expectedVisibility).toEqual(isRemoveBtnDisplayed); 
    (action === 'added') ? expectedNumberOfProducts++ : 0;
  }
  const actualNumberOfProducts = await menu.getNumberOfProducts();
  expect(expectedNumberOfProducts).toEqual(actualNumberOfProducts);  
});
  