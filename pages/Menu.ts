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
            await this.cartBtn.click();
          }
          case 'All Items': {
            await this.allItemsBtn.click();
          }
          case 'About': {
            await this.aboutBtn.click();
          }
          default: {
            throw new Error(`Cannot find option for page ${pageName}`);
          }
        }
    }
}

export const menu = new Menu();
