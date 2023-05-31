class CartPage {
    get products() {
        return $$(`//div[@class="inventory_item_name"]`);
    }

    get checkoutBtn() {
        return $('#checkout');
    }

    get firstNameTxt() {
        return $('#first-name');
    }

    get lastNameTxt() {
        return $('#last-name');
    }

    get postalCodeTxt() {
        return $('#postal-code');
    }

    get continueBtn(){
        return $('#continue');
    }

    get finishBtn(){
        return $('#finish');
    }

    get error() {
        return $(`//div[@class="error-message-container error"]`);
    }
    
    public async isProductExistent(itemName: string): Promise<boolean>{
        const productsNames = await this.products.map(product => product.getText());
        const isProductExistent = productsNames.includes(itemName);
        return isProductExistent;
    }

    public async clickCheckoutButton(){
        await this.checkoutBtn.click();
    }

    public async inputPersonalInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.setFirstName(firstName);
        await this.setLastName(lastName);
        await this.setPostalCode(postalCode);
        await this.clickContinueBtn();
    }

    public async setFirstName(firstName: string): Promise<void> {
        await this.firstNameTxt.clearValue();
        await this.firstNameTxt.setValue(firstName);
    }
    
    public async setLastName(lastName: string): Promise<void> {
        await this.lastNameTxt.clearValue();
        await this.lastNameTxt.setValue(lastName);
    }

    public async setPostalCode(postalCode: string): Promise<void> {
        await this.postalCodeTxt.clearValue();
        await this.postalCodeTxt.setValue(postalCode);
    }
    
    public async clickCheckoutBtn(): Promise<void> {
        await this.checkoutBtn.click();
    }

    public async clickContinueBtn(): Promise<void> {
        await this.continueBtn.click();
    }

    public async clickFinishBtn(): Promise<void> {
        await this.finishBtn.click();
    }

    public async isContinueBtnDisabled(): Promise<boolean> {
        return (await this.continueBtn.getAttribute('disabled')) === 'true';
    }

    public async isCheckoutBtnDisabled(): Promise<boolean> {
        return (await this.checkoutBtn.getAttribute('disabled')) === 'true';
    }
}
export const cartPage = new CartPage();