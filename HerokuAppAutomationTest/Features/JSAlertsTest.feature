

@JS @alert @popup
Feature: JavaScript Alerts Test

Author: Shashi.madi84@gmail.com
Description: Tests of different JavaScript alerts

  @alert @popup @ok
  Scenario: Test the JavaScript Alert
    Given Open the browser for JSAlertsTest
	  When I navigate to JSAlerts Page
	  And I press the "Click for JS Alert" button
	  And I click OK on the popup
	  Then I see "You successfuly clicked an alert" on the page
	  And I close the browser for JSAlertsTest
    
  @confirm @popup @Ok
  Scenario: Test the JavaScript Confirmation Popup for OK 
    Given Open the browser for JSAlertsTest
	  When I navigate to JSAlerts Page
	  And I press the "Click for JS Confirm" button
	  And I click OK on the popup
	  Then I see "You clicked: Ok" on the page
	  And I close the browser for JSAlertsTest
	  
	@confirm @popup @Cancel
  Scenario: Test the JavaScript Confirmation Popup for Cancel
    Given Open the browser for JSAlertsTest
	  When I navigate to JSAlerts Page
	  And I press the "Click for JS Confirm" button
	  And I click Cancel on the popup
	  Then I see "You clicked: Cancel" on the page
	  And I close the browser for JSAlertsTest

  @prompt @popup @OK
  Scenario: Test the JavaScript Input Prompt Popup
    Given Open the browser for JSAlertsTest
	  When I navigate to JSAlerts Page
	  And I press the "Click for JS Prompt" button
	  And I type "I am Shashi" in the textbox	  
	  And I click OK on the popup
	  Then I see "You entered: I am Shashi" on the page
	  And I close the browser for JSAlertsTest
	  
	@prompt @popup @Cancel
  Scenario: Test the JavaScript Input Prompt Popup
    Given Open the browser for JSAlertsTest
	  When I navigate to JSAlerts Page
	  And I press the "Click for JS Prompt" button
	  And I type "I am Shashi" in the textbox	  
	  And I click Cancel on the popup
	  Then I see "You entered: null" on the page
	  And I close the browser for JSAlertsTest
