import { test, expect } from '@playwright/test';

exports.MyAccountPage=
class MyAccountPage
{
    constructor(page)
    {
        this.page = page
        this.MyAccount = "(//a[contains(text(),'My account')])[1]"
        this.Address = "(//a[contains(text(),'Addresses')])[1]"    
        this.AddNew = "//button[contains(text(),'Add new')]"  
        this.FirstName = "//input[@id='Address_FirstName']"
        this.LastName="//input[@id='Address_LastName']"
        this.Email = "//input[@id='Address_Email']"
        this.Company = "//input[@id='Address_Company']"
        this.Country = "//select[@id='Address_CountryId']"
        this.State = "//select[@id='Address_StateProvinceId']"
        this.City = "//input[@id='Address_City']"
        this.Address1= "//input[@id='Address_Address1']"
        this.Address2 = "//input[@id='Address_Address2']"
        this.Zip = "//input[@id='Address_ZipPostalCode']"
        this.PhoneNumber = "//input[@id='Address_PhoneNumber']"
        this.SaveBtn = "//button[contains(text(),'Save')]"
    }


    
    async ClickOnMyAccount()
    {
        await this.page.locator(this.MyAccount).click()
    }

    async ClickOnAddress()
    {
        await this.page.locator(this.Address).click()
    }

    async ClickOnAddNewBtn()
    {
        await this.page.locator(this.AddNew).click()
    }

    async EnterFirstName(firstname)
    {
        await this.page.locator(this.FirstName).fill(firstname)
    }

    async EnterLastName(lastname)
    {
        await this.page.locator(this.LastName).fill(lastname)
    }

    async EnterEmail(email)
    {
        await this.page.locator(this.Email).fill(email)
    }

    async EnterCompany(company)
    {
        await this.page.locator(this.Company).fill(company)
    }

    async SelectCountry(country)
    {
        await this.page.locator(this.Country).selectOption(country)
    }

    async SelectState(state)
    {
        await this.page.locator(this.State).selectOption(state)
    }

    async EnterCity(city)
    {
        await this.page.locator(this.City).fill(city)
    }

    async EnterAddress1(address1)
    {
        await this.page.locator(this.Address1).fill(address1)
    }

    async EnterAddress2(address2)
    {
        await this.page.locator(this.Address2).fill(address2)
    }

    async EnterZipCode(zip)
    {
        await this.page.locator(this.Zip).fill(zip)
    }

    async EnterPhoneNumber(phonenumber)
    {
            await this.page.locator(this.PhoneNumber).fill(phonenumber)
    }

    async ClickOnSaveBtn()
    {
        await this.page.locator(this.SaveBtn).click()
        await expect (this.page.locator("//p[contains(text(),'The new address has been added successfully.')]")).toBeVisible()
        await this.page.locator("//span[@title='Close']") .click()       
    }

}