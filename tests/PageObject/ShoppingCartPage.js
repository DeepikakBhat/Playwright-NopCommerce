import { test, expect } from '@playwright/test';

exports.ShoppingCartPage=
class ShoppingCartPage
{

    constructor(page)
    {
        this.page = page
        this.shoppingcartlink = "//span[contains(text(),'Shopping cart')]"
        this.termsandcondition = "//input[@name='termsofservice']"
        this.checkout = "//button[@name='checkout']"
        this.onclickBilling = "//button[@onclick='Billing.save()']"
        this.onclickshippingmtd = "//button[@onclick='ShippingMethod.save()']"
        this.onclickpaymentmtd= "//button[@onclick = 'PaymentMethod.save()']"
        this.onclickpaymentinfo = "//button[@onclick = 'PaymentInfo.save()']"
        this.confirmorder = "//button[@onclick = 'ConfirmOrder.save()']"
        this.continuebtn = "//button[@class='button-1 order-completed-continue-button']"

    }



//gotoshoppingcart
async ClickOnShoppinCartPage()
{
    await this.page.locator(this.shoppingcartlink).click()
}

async CheckoutTheitem()
{

    await this.page.locator(this.termsandcondition).click()
    await this.page.locator(this.checkout).click()

}


async SubmitTheItem()
{
    await this.page.locator(this.onclickBilling).click()
    await this.page.locator(this.onclickshippingmtd).click()
    await this.page.locator(this.onclickpaymentmtd).click()
    await this.page.locator(this.onclickpaymentinfo).click()
    await this.page.locator(this.confirmorder).click()
    await this.page.screenshot({ path: 'tests/screenshot/' + Date.now()+'OrderConfirm.png', fullPage: true });
    await expect (this.page.locator("//h1[normalize-space()='Thank you']")).toBeVisible()
    await expect (this.page.locator("//strong[normalize-space()='Your order has been successfully processed!']")).toBeVisible()
    await this.page.locator(this.continuebtn).click()
}

}





