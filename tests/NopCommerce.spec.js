import { test, expect } from '@playwright/test';
import { RegisterPage } from './PageObject/Register';
import { LoginPage } from './PageObject/LoginPage';
import { ElectronicsPage } from './PageObject/ElectronicsPage';
import { MyAccountPage } from './PageObject/MyAccountPage';
import { ShoppingCartPage } from './PageObject/ShoppingCartPage';



const userData = JSON.parse(JSON.stringify(require("C:/Users/deepi/OneDrive - Sakshath Technologies Private Limited/Desktop/playwright/NopCommerce/Fixtures/NopCommerce.json")))


test.only("Register - login - add cellphone to cart" , async ({page}) =>
{
 
  const RP = new RegisterPage(page)
  const LP = new LoginPage(page)
  const el = new ElectronicsPage(page)
  const MA = new MyAccountPage(page)
  const SC = new ShoppingCartPage(page)

  await RP.goToNOPCommercePage()

  //Register User validations
  await RP.ClickRegisterLink()
  await RP.ClickOnGender(userData.gender)
  await RP.EnterFirstName(userData.firstname)
  await RP.EnterLastName(userData.lastname)
  await RP.EnterDate(userData.birthdate)
  await RP.EnterMonth(userData.birthmonth)
  await RP.EnterYear(userData.birthyear)
  await RP.EnterEmail(userData.email)
  await RP.EnterCompanyName(userData.companyname)
  await RP.EnterPassword(userData.password)
  await RP.EnterConfirmPassword(userData.password)
  await RP.ClickOnRegister()
  await page.screenshot({ path: 'tests/screenshot/' + Date.now()+'Registerpage.png', fullPage: true });
  await expect (page.locator("//div[@class='result']")).toContainText('Your registration completed')
  await RP.ClickOnContinuebtnInsuccessmsgPage()
  await expect (page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible()

  //login page validations
  await LP.ClickOnLogin()
  await LP.EnterEmail(userData.email)
  await LP.EnterPassword(userData.password)
  await LP.ClickLoginBtn()
  await page.screenshot({ path: 'tests/screenshot/' + Date.now()+'LoginPage.png', fullPage: true });
  await expect (page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible()

  //Add address details validations 
  await MA.ClickOnMyAccount()
  await MA.ClickOnAddress()
  await MA.ClickOnAddNewBtn()
  await MA.EnterFirstName(userData.firstname)
  await MA.EnterLastName(userData.lastname)
  await MA.EnterEmail(userData.email)
  await MA.EnterCompany(userData.companyname)
  await MA.SelectCountry(userData.country)
  await MA.SelectState(userData.state)
  await MA.EnterCity(userData.city)
  await MA.EnterAddress1(userData.address1)
  await MA.EnterAddress2(userData.address2)
  await MA.EnterZipCode(userData.zipcode)
  await MA.EnterPhoneNumber(userData.phonenumber)
  await MA.ClickOnSaveBtn()

// add electronics page validationa

  await el.ClickRegisterLink()
  await el.ClickOncameraAndPhotos()

//add to cart
  await el.AddItemsToCart()
//shoppincart page
  await SC.ClickOnShoppinCartPage()
  await SC.CheckoutTheitem()
  await SC.SubmitTheItem()
//logout of page
  await page.locator("//a[contains(text(),'Log out')]").click()
  await page.close()

})
