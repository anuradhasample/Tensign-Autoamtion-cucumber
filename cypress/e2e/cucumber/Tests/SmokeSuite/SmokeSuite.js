/// <reference types="cypress" />
///<reference types="cypress-iframe" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import login from "../../PageActions/Loginpage/LoginPageActions";
import smoke from "../../PageActions/SmokeSuite.js/SmokeSuite"
Given("I navigate to the HomePage", () => {
    login.clickonPlan();
});
Given("User should have existing procurement", () => {
    smoke.verifyExistingProcurement();
});
When("click on Advertisement", () => {
    smoke.clickOnAdvertisement();
   
});
And("Navigate to plan tab", () => {
    smoke.navigateToPlan();
    
});
Then("Validate plan tab", () => {
    smoke.validatePlanTab();    
});

Given("User should be in Prepare tab", () => {
    smoke.verifyPublicContractNotice();
});
When("Upload the Document", () => {
   smoke.uploadDocument();
});
Then("Navigate to the Advertisement tab", () => {
    smoke.verifyCreateadvertisement();
});


   


    

 
   

