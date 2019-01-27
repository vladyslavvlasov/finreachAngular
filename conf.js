exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/employeeSpec.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
    },
    capabilities: {
        browserName: 'chrome'
    },
    params: {
        login: {
            username: 'Luke',
            password: 'Skywalker'
        }
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        global.EC = protractor.ExpectedConditions;
    }
};