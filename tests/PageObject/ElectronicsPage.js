import { test, expect } from '@playwright/test';

exports.ElectronicsPage=
class ElectronicsPage
{   


    constructor(page)
    {
        this.page = page
        this.ElectronicsLink = "(//a[contains(text(),'Electronics')])[1]"
        this.CellPhones = "//li[@class='inactive']//a[contains(text(),'Cell phones ')]"      
        this.addtocart = "//a[contains(text(),'Nokia Lumia 1020')]/parent::h2//parent::div//div[@class='add-info']//div[@class='buttons']//button[contains(text(),'Add to cart')]"
    }

    async ClickRegisterLink()
    {
        await this.page.locator("//img[@alt='nopCommerce demo store']").click()
        await this.page.locator(this.ElectronicsLink).click()
    }

    async ClickOncameraAndPhotos()
    {
        await this.page.locator(this.CellPhones).click()
    }

    async ClickOnProduct()
    {
       element = await this.page.$$('//h2[@class="product-title"]')
    }

    async AddItemsToCart()
    {
        await this.page.locator(this.addtocart).click()
        await expect (this.page.locator("//div[@class='bar-notification success']")).toBeVisible()

    }

   




}