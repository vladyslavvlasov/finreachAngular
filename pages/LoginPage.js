var LoginPage = function () {
    const PAGE_URL = "https://cafetownsend-angular-rails.herokuapp.com/login";
    var userName = element(by.model("user.name"));
    var password = element(by.model("user.password"));
    var submitBtn = element(by.css("button[type='submit']"));

    this.get = function () {
        browser.get(PAGE_URL);
    }

    this.login = function (name, pass) {
        userName.sendKeys(name);
        password.sendKeys(pass);
        submitBtn.click();
    }



}

module.exports = new LoginPage();