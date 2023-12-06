import 'cypress-iframe'
import 'cypress-file-upload';
const locators = require("../../PageElements/Locators.json")
class LoginPageActions {
  enterURL() {
    cy.visit('https://staging.tendsign.com/buyer/index.aspx');
  }
  enterUserNamePassword(username, password) {
    cy.get(locators.loginPageLocators.usernameText).type(username);
    cy.get(locators.loginPageLocators.passwordText).type(password);
    return this;
  }
  clickSubmitButton() {
    cy.wait(2000)
    //  cy.get('input[value="Log in"]').click();
    cy.get(locators.loginPageLocators.clickloginButton).click({ force: true });
    return this;
  }
  verifyPageTitle() {
    
    cy.title().wait(2000).should("eq", "Mercell TendSign");
  }
  
}
 
const login = new LoginPageActions();
export default login;