$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DynamicLoadingTest.feature");
formatter.feature({
  "line": 4,
  "name": "Validate functionality on dynamic loading of contents",
  "description": "\r\nAuthor: Shashi.madi84@gmail.com\r\nDescription: Tests for dynamically loaded elements",
  "id": "validate-functionality-on-dynamic-loading-of-contents",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@dynamic"
    },
    {
      "line": 3,
      "name": "@progressbar"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Example 1: Element on page that is hidden",
  "description": "",
  "id": "validate-functionality-on-dynamic-loading-of-contents;example-1:-element-on-page-that-is-hidden",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@hidden"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Open the browser for DynamicLoadingTest",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to Dyanamic Loading page for hidden element",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I press the Start button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I wait for the progressbar to end",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see Hello World on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I see \"Example 1: Element on page that is hidden\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I close the browser for DynamicLoadingTest",
  "keyword": "And "
});
formatter.match({
  "location": "DynamicLoadingTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 10350478601,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.Navigate_to_page_ex1()"
});
formatter.result({
  "duration": 790852500,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_press_Start_button()"
});
formatter.result({
  "duration": 138764300,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_wait_till_end()"
});
formatter.result({
  "duration": 5386248400,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_see_Hello_World()"
});
formatter.result({
  "duration": 69993400,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_see_Ex1_Statement()"
});
formatter.result({
  "duration": 88327500,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_close_browser()"
});
formatter.result({
  "duration": 184742301,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Example 2: Element rendered after the fact",
  "description": "",
  "id": "validate-functionality-on-dynamic-loading-of-contents;example-2:-element-rendered-after-the-fact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@fact"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Open the browser for DynamicLoadingTest",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I navigate to Dyanamic Loading page for fact",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I press the Start button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I wait for the progressbar to end",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see Hello World on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I see \"Example 2: Element rendered after the fact\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I close the browser for DynamicLoadingTest",
  "keyword": "And "
});
formatter.match({
  "location": "DynamicLoadingTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 8053381099,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.Navigate_to_page_ex2()"
});
formatter.result({
  "duration": 809257300,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_press_Start_button()"
});
formatter.result({
  "duration": 138243300,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_wait_till_end()"
});
formatter.result({
  "duration": 5478690000,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_see_Hello_World()"
});
formatter.result({
  "duration": 58390800,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_see_Ex2_Statement()"
});
formatter.result({
  "duration": 90653300,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingTest.I_close_browser()"
});
formatter.result({
  "duration": 216359499,
  "status": "passed"
});
formatter.uri("JSAlertsTest.feature");
formatter.feature({
  "line": 4,
  "name": "JavaScript Alerts Test",
  "description": "\nAuthor: Shashi.madi84@gmail.com\nDescription: Tests of different JavaScript alerts",
  "id": "javascript-alerts-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@JS"
    },
    {
      "line": 3,
      "name": "@alert"
    },
    {
      "line": 3,
      "name": "@popup"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Test the JavaScript Alert",
  "description": "",
  "id": "javascript-alerts-test;test-the-javascript-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@alert"
    },
    {
      "line": 9,
      "name": "@popup"
    },
    {
      "line": 9,
      "name": "@ok"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Open the browser for JSAlertsTest",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to JSAlerts Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I press the \"Click for JS Alert\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click OK on the popup",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see \"You successfuly clicked an alert\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the browser for JSAlertsTest",
  "keyword": "And "
});
formatter.match({
  "location": "JSAlertsTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7442898301,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Navigate_to_page_jsalerts()"
});
formatter.result({
  "duration": 545971700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Click for JS Alert",
      "offset": 13
    }
  ],
  "location": "JSAlertsTest.Press_the_button(String)"
});
formatter.result({
  "duration": 117359100,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Click_OK_button()"
});
formatter.result({
  "duration": 32221100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You successfuly clicked an alert",
      "offset": 7
    }
  ],
  "location": "JSAlertsTest.I_see_message(String)"
});
formatter.result({
  "duration": 86930001,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.I_close_browser()"
});
formatter.result({
  "duration": 180461399,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test the JavaScript Confirmation Popup for OK",
  "description": "",
  "id": "javascript-alerts-test;test-the-javascript-confirmation-popup-for-ok",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@confirm"
    },
    {
      "line": 18,
      "name": "@popup"
    },
    {
      "line": 18,
      "name": "@Ok"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Open the browser for JSAlertsTest",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to JSAlerts Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I press the \"Click for JS Confirm\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click OK on the popup",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see \"You clicked: Ok\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close the browser for JSAlertsTest",
  "keyword": "And "
});
formatter.match({
  "location": "JSAlertsTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7304196400,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Navigate_to_page_jsalerts()"
});
formatter.result({
  "duration": 482478301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Click for JS Confirm",
      "offset": 13
    }
  ],
  "location": "JSAlertsTest.Press_the_button(String)"
});
formatter.result({
  "duration": 103342000,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Click_OK_button()"
});
formatter.result({
  "duration": 34928399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You clicked: Ok",
      "offset": 7
    }
  ],
  "location": "JSAlertsTest.I_see_message(String)"
});
formatter.result({
  "duration": 98144100,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.I_close_browser()"
});
formatter.result({
  "duration": 202081600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test the JavaScript Confirmation Popup for Cancel",
  "description": "",
  "id": "javascript-alerts-test;test-the-javascript-confirmation-popup-for-cancel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@confirm"
    },
    {
      "line": 27,
      "name": "@popup"
    },
    {
      "line": 27,
      "name": "@Cancel"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Open the browser for JSAlertsTest",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I navigate to JSAlerts Page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I press the \"Click for JS Confirm\" button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click Cancel on the popup",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I see \"You clicked: Cancel\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I close the browser for JSAlertsTest",
  "keyword": "And "
});
formatter.match({
  "location": "JSAlertsTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7428590100,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Navigate_to_page_jsalerts()"
});
formatter.result({
  "duration": 477481800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Click for JS Confirm",
      "offset": 13
    }
  ],
  "location": "JSAlertsTest.Press_the_button(String)"
});
formatter.result({
  "duration": 108831100,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Click_Cancel_button()"
});
formatter.result({
  "duration": 25963201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You clicked: Cancel",
      "offset": 7
    }
  ],
  "location": "JSAlertsTest.I_see_message(String)"
});
formatter.result({
  "duration": 87575701,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.I_close_browser()"
});
formatter.result({
  "duration": 194810400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Test the JavaScript Input Prompt Popup",
  "description": "",
  "id": "javascript-alerts-test;test-the-javascript-input-prompt-popup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@prompt"
    },
    {
      "line": 36,
      "name": "@popup"
    },
    {
      "line": 36,
      "name": "@OK"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Open the browser for JSAlertsTest",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I navigate to JSAlerts Page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I press the \"Click for JS Prompt\" button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I type \"I am Shashi\" in the textbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click OK on the popup",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I see \"You entered: I am Shashi\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I close the browser for JSAlertsTest",
  "keyword": "And "
});
formatter.match({
  "location": "JSAlertsTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7645179900,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Navigate_to_page_jsalerts()"
});
formatter.result({
  "duration": 530270101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Click for JS Prompt",
      "offset": 13
    }
  ],
  "location": "JSAlertsTest.Press_the_button(String)"
});
formatter.result({
  "duration": 108386800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I am Shashi",
      "offset": 8
    }
  ],
  "location": "JSAlertsTest.Click_Cancel_button(String)"
});
formatter.result({
  "duration": 31612500,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Click_OK_button()"
});
formatter.result({
  "duration": 32596300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You entered: I am Shashi",
      "offset": 7
    }
  ],
  "location": "JSAlertsTest.I_see_message(String)"
});
formatter.result({
  "duration": 62190200,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.I_close_browser()"
});
formatter.result({
  "duration": 199233401,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Test the JavaScript Input Prompt Popup",
  "description": "",
  "id": "javascript-alerts-test;test-the-javascript-input-prompt-popup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@prompt"
    },
    {
      "line": 46,
      "name": "@popup"
    },
    {
      "line": 46,
      "name": "@Cancel"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Open the browser for JSAlertsTest",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I navigate to JSAlerts Page",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I press the \"Click for JS Prompt\" button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I type \"I am Shashi\" in the textbox",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click Cancel on the popup",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I see \"You entered: null\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I close the browser for JSAlertsTest",
  "keyword": "And "
});
formatter.match({
  "location": "JSAlertsTest.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7429467000,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Navigate_to_page_jsalerts()"
});
formatter.result({
  "duration": 456856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Click for JS Prompt",
      "offset": 13
    }
  ],
  "location": "JSAlertsTest.Press_the_button(String)"
});
formatter.result({
  "duration": 120849899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I am Shashi",
      "offset": 8
    }
  ],
  "location": "JSAlertsTest.Click_Cancel_button(String)"
});
formatter.result({
  "duration": 24968400,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.Click_Cancel_button()"
});
formatter.result({
  "duration": 32382601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You entered: null",
      "offset": 7
    }
  ],
  "location": "JSAlertsTest.I_see_message(String)"
});
formatter.result({
  "duration": 102188900,
  "status": "passed"
});
formatter.match({
  "location": "JSAlertsTest.I_close_browser()"
});
formatter.result({
  "duration": 331802900,
  "status": "passed"
});
formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 4,
  "name": "Validate functionality on login page of Application",
  "description": "\r\nAuthor: Shashi.madi84@gmail.com\r\nDescription: Tests login scenarios",
  "id": "validate-functionality-on-login-page-of-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@authentication"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Login is successful",
  "description": "",
  "id": "validate-functionality-on-login-page-of-application;login-is-successful",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@successful"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Open the browser for LoginTest",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I type \"tomsmith\" in the username field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type \"SuperSecretPassword!\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I press the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see logout on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I close the browser for LoginTest",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7601534500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.Navigate_to_login_page()"
});
formatter.result({
  "duration": 597096999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 8
    }
  ],
  "location": "LoginTestSteps.Enter_the_Username(String)"
});
formatter.result({
  "duration": 153627101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 8
    }
  ],
  "location": "LoginTestSteps.Enter_the_Passwoord(String)"
});
formatter.result({
  "duration": 207067099,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.Press_the_LoginButton()"
});
formatter.result({
  "duration": 572944001,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.I_see_LogoutButton()"
});
formatter.result({
  "duration": 66024300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.I_close_browser()"
});
formatter.result({
  "duration": 190871000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login is failed",
  "description": "",
  "id": "validate-functionality-on-login-page-of-application;login-is-failed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Open the browser for LoginTest",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I navigate to login page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I type \"tomsmith\" in the username field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \"Super\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I press the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I see \"Your password is invalid!\" message on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close the browser for LoginTest",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.Open_browser_and_launch_application()"
});
formatter.result({
  "duration": 7303672099,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.Navigate_to_login_page()"
});
formatter.result({
  "duration": 562561500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 8
    }
  ],
  "location": "LoginTestSteps.Enter_the_Username(String)"
});
formatter.result({
  "duration": 176615100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Super",
      "offset": 8
    }
  ],
  "location": "LoginTestSteps.Enter_the_Passwoord(String)"
});
formatter.result({
  "duration": 143991899,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.Press_the_LoginButton()"
});
formatter.result({
  "duration": 474468100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is invalid!",
      "offset": 7
    }
  ],
  "location": "LoginTestSteps.I_see_ErrorMessage(String)"
});
formatter.result({
  "duration": 74985800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.I_close_browser()"
});
formatter.result({
  "duration": 256580900,
  "status": "passed"
});
});