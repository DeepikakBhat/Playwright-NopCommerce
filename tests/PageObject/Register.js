exports.RegisterPage =
class RegisterPage 
{

    constructor(page)
    {
        this.page = page;
        this.RegisterLink = "//a[contains(text(),'Register')]";
        this.GenderFemale = "//input[@id='gender-female']";
        this.GenderMale = "//input[@id='gender-male']" ;
        this.FirstName = "//input[@id='FirstName']";
        this.LastName = "//input[@id='LastName']";
        this.Date = "//select[@name='DateOfBirthDay']";
        this.Month = "//select[@name='DateOfBirthMonth']";
        this.Year = "//select[@name='DateOfBirthYear']";
        this.Email = "//input[@id='Email']";
        this.CompanyName = "//input[@id='Company']" ;
        this.Password = "//input[@id='Password']" ;
        this.ConfirmPassword = "//input[@id='ConfirmPassword']" ;
        this.Registerbtn = "//button[@id='register-button']";
        this.Message = "//div[contains(text(),'Your registration completed')]"
        this.ContainInsuccessmsg = "//a[contains(text(),'Continue')]";

        
        
    }


    async goToNOPCommercePage()
    {
        await this.page.goto("https://demo.nopcommerce.com/");
    }

    async ClickRegisterLink()
    {
        await this.page.locator(this.RegisterLink).click();

    }

    async ClickOnGender(gendername)
    {

        if( gendername = 'female' )
        {
            await this.page.locator(this.GenderFemale ).click()
        } else  await this.page.locator(this.GenderMale ).click()
    }

    async EnterFirstName(firstname)
    {
        await this.page.locator(this.FirstName).fill(firstname)
    }

    async EnterLastName(lastname)
    {
        await this.page.locator(this.LastName).fill(lastname)
    }

    async EnterDate(date)
    {
        await this.page.locator(this.Date).selectOption(date)
    }

    async EnterMonth(month)
    {
        await this.page.locator(this.Month).selectOption(month)
    }

    async EnterYear(year)
    {
        await this.page.locator(this.Year).selectOption(year)
    }

    async EnterEmail(email)
    {
        await this.page.locator(this.Email).fill(email)
    }

    async EnterCompanyName(company)
    {
        await this.page.locator(this.CompanyName).fill(company)
    }

    async EnterPassword(password)
    {
        await this.page.locator(this.Password).fill(password)
    }

    async EnterConfirmPassword(confirmpassword)
    {
        await this.page.locator(this.ConfirmPassword).fill(confirmpassword)
    }

    async ClickOnRegister()
    {
        await this.page.locator(this.Registerbtn).click()
    }

    async ValidateSuccessMsg()
    {
        await this.page(this.Message)
    }

    async ClickOnContinuebtnInsuccessmsgPage()
    {
        await this.page.locator(this.ContainInsuccessmsg).click()
    }

}