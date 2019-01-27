var CreatePage = function () {
    var firstNameInput = element(by.model("selectedEmployee.firstName"));
    var lastNameInput = element(by.model("selectedEmployee.lastName"));
    var startDateInput = element(by.model("selectedEmployee.startDate"));
    var emailInput = element(by.model('selectedEmployee.email'));
    var submitBtn = element(by.css("button[type='submit'][ng-Show='isCreateForm']"));
    var cancelBtn = element(by.className("bCancel"));
    var wrapper = element(by.className("main-view-wrapper-create"));

    this.createNewUser = function(firstName,lastName,startDate, email){
        firstNameInput.sendKeys(firstName);
        lastNameInput.sendKeys(lastName);
        startDateInput.sendKeys(startDate);
        emailInput.sendKeys(email);
        submitBtn.click();
    }

    this.isDisplayed = function () {
        return wrapper.isDisplayed();
    }


}

module.exports = new CreatePage();