var loginPage = require("../pages/LoginPage");
var menuPage = require("../pages/MenuPage");
var createPage = require("../pages/CreatePage");
var editPage = require("../pages/EditPage");
const FIRST_NAME = "Slava";
const LAST_NAME = "APELLIDO";
const START_DATE = "2019-01-27";
const EMAIL = "slava.apellido@test.com";
const NEW_FIRST_NAME = "Slava2";
const NEW_LAST_NAME = "APELLIDO2";
const NEW_START_DATE = "2020-01-27";
const NEW_EMAIL = "newslava.apellido@test.com";

describe("Employees testing suite", function () {
    it("should login and create new employee", () => {
        loginPage.get();
        loginPage.login(browser.params.login.username, browser.params.login.password);
        expect(menuPage.isDisplayed()).toBe(true);
        menuPage.getUsersByName(FIRST_NAME, LAST_NAME).then((usersArr) => {
            this.countOfUsers = usersArr.length;
        });
        menuPage.clickCreate();
        expect(createPage.isDisplayed()).toBe(true);
        createPage.createNewUser(FIRST_NAME, LAST_NAME, START_DATE, EMAIL);
        expect(menuPage.isDisplayed()).toBe(true);
        menuPage.getUsersByName(FIRST_NAME, LAST_NAME).then((arr) => {
            expect(arr.length).toEqual(this.countOfUsers + 1);
        });
    });

    it ("should edit a new employee", ()=>{
        menuPage.getUsersByName(NEW_FIRST_NAME,NEW_LAST_NAME).then((usersArr)=>{
            this.countOfUpdatedUsers =usersArr.length;
        });
        menuPage.getUsersByName(FIRST_NAME,LAST_NAME).then((arr)=>{
            menuPage.clickEditUser(arr[0]);
        });
        expect(editPage.isDisplayed()).toBe(true);
        editPage.editUser(NEW_FIRST_NAME, NEW_LAST_NAME, NEW_START_DATE, NEW_EMAIL);
        expect(menuPage.isDisplayed()).toBe(true);
        menuPage.getUsersByName(NEW_FIRST_NAME, NEW_LAST_NAME).then((arr) => {
            expect(arr.length).toEqual(this.countOfUpdatedUsers + 1);
        });
    });

})