exports.LoginPage =
class LoginPage
{

    constructor(page)
    {
        this.page = page
        this.LogiInlink = "//a[contains(text(),'Log in')]";
        this.Email = "//input[@id='Email']";
        this.Password = "//input[@id='Password']";
        this.LoginBtn = "//button[contains(text(),'Log in')]"
    }

    async ClickOnLogin()
    {
        await this.page.locator(this.LogiInlink).click()
    }

    async EnterEmail(email)
    {
        await this.page.locator(this.Email).fill(email)
    }

    async EnterPassword(password)
    {
        await this.page.locator(this.Password).fill(password)
    }

    async ClickLoginBtn()
    {
        await this.page.locator(this.LoginBtn).click()
    }



}