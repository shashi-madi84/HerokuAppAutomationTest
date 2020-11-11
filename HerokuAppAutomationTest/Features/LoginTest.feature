

@login @authentication
Feature: Validate functionality on login page of Application 

Author: Shashi.madi84@gmail.com
Description: Tests login scenarios

@successful
Scenario: Login is successful
  Given Open the browser for LoginTest
  When I navigate to login page
  And I type "tomsmith" in the username field
  And I type "SuperSecretPassword!" in the password field
  And I press the Login button
  Then I see logout on the page
  And I close the browser for LoginTest

@failed
Scenario: Login is failed
  Given Open the browser for LoginTest 
  When I navigate to login page
  And I type "tomsmith" in the username field
  And I type "Super" in the password field
  And I press the Login button
  Then I see "Your password is invalid!" message on the page
  And I close the browser for LoginTest