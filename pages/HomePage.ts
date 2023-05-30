class HomePage {
  get pageTitle() {
    return $(`//span[@class="title"]`);
  }

  public readonly addToCartBtnLocator: string = `#add-to-cart-`;
  public readonly removeFromCartBtnLocator: string = `#remove-`;

  public async getPageTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  public async clickCartButton(itemName: string, action: string){
    let itemFullLocator: string = '';
    if (action === 'add') {
      itemFullLocator = this.addToCartBtnLocator;
    } else {
      itemFullLocator = this.removeFromCartBtnLocator;
    }
    itemFullLocator = itemFullLocator + `${itemName.toLowerCase().replace(/ /g,'-')}`;

    const cartBtn = await $(itemFullLocator);
    await cartBtn.click();
  }

  public async isRemoveBtnDisplayed(itemName: string): Promise<boolean>{
    let isErrorStyleApplied: boolean = false;
    const itemFullLocator: string = this.removeFromCartBtnLocator + `${itemName.toLowerCase().replace(/ /g,'-')}`;
    const removeFromCartBtn = await $(itemFullLocator);
    if (await removeFromCartBtn.isExisting()) {
      const isVisible: boolean = await removeFromCartBtn.isDisplayed();
      if (isVisible) {
        const currentCssValue = await removeFromCartBtn.getAttribute('class');
        isErrorStyleApplied = currentCssValue.includes('btn_secondary'); // true
      }
    }
    return isErrorStyleApplied;
  }
}

export const homePage = new HomePage();
