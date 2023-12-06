Feature:Smoke Suite 

  Background: 
    Given Navigate to the Website
    When Enter valid credentials
      | email         | validpassword |
      | justina_buyer | test123       |
    And User click on login button
    Then Validate the title after login

  Scenario: validate the plan tab
    Given User should have existing procurement
    When click on Advertisement
    And Navigate to plan tab
    Then Validate plan tab


  # Scenario:Validate the Prepare tab
  #   Given click on Advertisement
  #   When Upload the Document
  #   Then Navigate to the Advertisement tab

  


