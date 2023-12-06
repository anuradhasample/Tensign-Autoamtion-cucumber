/// <reference types="cypress" />
///<reference types="cypress-iframe" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../PageActions/Loginpage/LoginPageActions";
Given("Navigate to the Website", () => {
login.enterURL();
});
When("Enter valid credentials", (datatable) => {
datatable.hashes().forEach((element) => {
login.enterUserNamePassword(element.email, element.validpassword);
});
});
And("User click on login button", () => {
login.clickSubmitButton();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();

});