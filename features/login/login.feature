@login
Feature: Logging into Swag Labs
  As a user
  I want to be able to log into Swag Labs
  So that I can buy its products

  @validLogin
  Scenario: Logging into Swag Labs with a valid user
    Given I login as an "standard_user" user
  #Then I should be redirected to the Home page

  @invalidLogin
  Scenario Outline: Logging into Swag Labs with an invalid user should fail
    Given  I login as an "<invalid_user>" user
    Then I should be on the login page
    And I should see an error displayed with the following message
      | <error_message> |

    Examples:
      | invalid_user      | error_message                                                             |
      | locked_out_user   | Epic sadface: Sorry, this user has been locked out.                       |
      | not_existent_user | Epic sadface: Username and password do not match any user in this service |
