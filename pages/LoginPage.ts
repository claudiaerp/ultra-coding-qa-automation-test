class LoginPage{
  get username() {
    return $('#user-name');
  }
  get password() {
    return $('#password');
  }
  get loginBtn() {
    return $('#login-button');
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
}

export const loginPage = new LoginPage();
