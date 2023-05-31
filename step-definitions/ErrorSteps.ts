import { Then } from '@cucumber/cucumber';
import { errors } from '../pages/Errors';

Then(/^I should see an error displayed with the following message$/, async function(dataTable) {
    const expectedErrorMessage: string = String(dataTable.raw()[0]);
    expect(await errors.isErrorMessageDisplayed()).toEqual(true);
    const actualErrorMessage: string = await errors.getErrorMessage();
    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  });
  
  