var MenuPage = function () {
    var createBtn = element(by.id("bAdd"));
    var editBtn = element(by.id("bEdit"));
    var deleteBtn = element(by.id("bDelete"));
    var wrapper = element(by.className("main-view-wrapper-employees"));
    var allEmployees = element.all(by.repeater("employee in employees"));


    this.isDisplayed = function () {
        return wrapper.isDisplayed();
    }

    this.clickCreate = function () {
        createBtn.click();
    }

    this.getUsersByName = function (firstName, lastName) {
        return allEmployees.filter((employee) => {
            return employee.getText().then((text) => {
                return text === firstName +" " + lastName;
            })
        })
    };

    this.clickEditUser = function (user) {
        user.click();
        editBtn.click();
    }



};

module.exports = new MenuPage();