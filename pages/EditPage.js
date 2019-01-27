var EditPage = function () {
    var wrapper = element(by.className("main-view-edit"));
    var firstNameInput = element(by.model("selectedEmployee.firstName"));
    var lastNameInput = element(by.model("selectedEmployee.lastName"));
    var startDateInput = element(by.model("selectedEmployee.startDate"));
    var emailInput = element(by.model('selectedEmployee.email'));
    var updateBtn = element(by.buttonText("Update"));

    this.editUser = function(firstName,lastName,startDate, email){
        firstNameInput.clear();
        firstNameInput.sendKeys(firstName);
        lastNameInput.clear();
        lastNameInput.sendKeys(lastName);
        startDateInput.clear();
        startDateInput.sendKeys(startDate);
        emailInput.clear();
        emailInput.sendKeys(email);
        updateBtn.click();
    }

    this.isDisplayed = function () {
        return wrapper.isDisplayed();
    }
}

module.exports = new EditPage();

