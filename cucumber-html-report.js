const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
screenshotsDirectory: 'cypress/screenshots/',
storeScreenshots: true,
failedSummaryReport: true,
metadata: {
browser: {
name: "chrome",
version: "119",
},
device: "Local test machine",
platform: {
name: "windows",
version: "10",
},
},
});