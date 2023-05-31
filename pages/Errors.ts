class Errors {
  constructor() {}

  get loginErrorH3() {
    return $(`//div[@class="error-message-container error"]//h3`);
  }

  public async isErrorMessageDisplayed(): Promise<boolean> {
    return await this.loginErrorH3.isDisplayed();
  }

  public async getErrorMessage(): Promise<string> {
    return await this.loginErrorH3.getText();
  }
}

export const errors = new Errors();