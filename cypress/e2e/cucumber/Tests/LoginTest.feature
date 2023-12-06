Feature: Log in Feature

  Scenario: Login Functionality
    Given Navigate to the Website
    When Enter valid credentials
      | email         | validpassword |
      | justina_buyer | test123       |
    And User click on login button
    Then Validate the title after login

