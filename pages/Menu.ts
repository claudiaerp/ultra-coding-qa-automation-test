class Menu {
    get burgerMenuBtn() {
      return $('#react-burger-menu-btn');
    }

    get cartBtn() {
      return $('#shopping_cart_container');  
    }

    get allItemsBtn() {
      return $('#inventory_sidebar_link'); 
    }

    get aboutBtn() {
      return $('#about_sidebar_link');
    }

    get logoutBtn() {
      return $('#logout_sidebar_link');
    }

    get resetAppBtn() {
      return $('#reset_sidebar_link');
    }

    get pageTitle() {
      return $(`//span[@class="title"]`);
    }

    public async getPageTitle(): Promise<string> {
      return await this.pageTitle.getText();
    }

    public async getNumberOfProducts(): Promise<number> {
      const numberOfProducts = await this.cartBtn.getText();
      if (numberOfProducts === '') {
        return Number(0);
      } else {
        return Number(numberOfProducts);
      }
    }

    public async goToPage(pageName: string) {
        switch (pageName) {
          case 'Cart': {
            await this.pageTitle.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            await this.cartBtn.click();
            break;
          }
          case 'All Items': {
            await this.allItemsBtn.click();
            break;
          }
          case 'About': {
            await this.aboutBtn.click();
            break;
          }
          default: {
            throw new Error(`Cannot find option for page ${pageName}`);
          }
        }
    }

    public async openLeftMenu(): Promise<void> {
      await this.burgerMenuBtn.click();
    }

    public async resetAppState(): Promise<void> {
      await this.resetAppBtn.click();
    }

    public async logout(): Promise<void> {
      await this.logoutBtn.click();
    }
}

export const menu = new Menu();
