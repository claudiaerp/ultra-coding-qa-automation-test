import { ChainablePromiseElement } from 'webdriverio';

class LoginPage {
  get username() {
    return $('#user-name');
  }
  get password() {
    return $('#password');
  }
  get loginBtn() {
    return $('#login-button');
  }
  get loginErrorH3() {
    return $(`//div[@class="error-message-container error"]//h3`);
  }

  async login(email: string, password: string): Promise<void> {
    await this.setUsername(email);
    await this.setPassword(password);
    await this.clickLogin();
  }

  async setUsername(email: string): Promise<void> {
    await this.username.clearValue();
    await this.username.setValue(email);
  }

  async setPassword(password: string): Promise<void> {
    await this.password.clearValue();
    await this.password.setValue(password);
  }

  async clickLogin(): Promise<void> {
    this.loginBtn.click();
  }

  public async getErrorMessage(): Promise<string> {
    return await this.loginErrorH3.getText();
  }
}

export const loginPage = new LoginPage();
