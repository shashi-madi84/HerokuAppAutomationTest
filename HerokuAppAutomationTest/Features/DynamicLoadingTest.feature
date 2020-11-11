

@dynamic @progressbar
Feature: Validate functionality on dynamic loading of contents 

Author: Shashi.madi84@gmail.com
Description: Tests for dynamically loaded elements

@hidden
Scenario: Example 1: Element on page that is hidden
  Given Open the browser for DynamicLoadingTest
  When I navigate to Dyanamic Loading page for hidden element
  And I press the Start button
  And I wait for the progressbar to end
  Then I see Hello World on the page
  And I see "Example 1: Element on page that is hidden"
  And I close the browser for DynamicLoadingTest

@fact
Scenario: Example 2: Element rendered after the fact
  Given Open the browser for DynamicLoadingTest 
  When I navigate to Dyanamic Loading page for fact
  And I press the Start button
  And I wait for the progressbar to end
  Then I see Hello World on the page
  And I see "Example 2: Element rendered after the fact"
  And I close the browser for DynamicLoadingTest