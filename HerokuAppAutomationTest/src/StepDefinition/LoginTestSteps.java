package StepDefinition;		

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertEquals;

import org.hamcrest.CoreMatchers;
import org.openqa.selenium.By;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;		

/* @author: Shashi Poddar
 * This class provides the implementation of the steps in LoginTest.feature file
 * */
public class LoginTestSteps extends BaseSteps {
	
	@Given("^Open the browser for LoginTest$")					
    public void Open_browser_and_launch_application() throws Throwable							
    {		
       	openBrowser();					
    }

    @When("^I navigate to login page$")					
    public void Navigate_to_login_page() throws Throwable							
    {				
    	driver.findElement(By.linkText("Form Authentication")).click();
    }	
    
    /* Accepts dynamic input for the user name field
     * @param username: String */
    @And("^I type \"([^\"]*)\" in the username field$")					
    public void Enter_the_Username(String username) throws Throwable 							
    {		
    	driver.findElement(By.id("username")).sendKeys(username);						
    }
    
    /* Accepts dynamic input for the password field
     * @param password: String */
    @And("^I type \"([^\"]*)\" in the password field$")					
    public void Enter_the_Passwoord(String password) throws Throwable 							
    {								
    	driver.findElement(By.id("password")).sendKeys(password);					
    }
    
    @And("^I press the Login button$")					
    public void Press_the_LoginButton() throws Throwable 							
    {								
    	driver.findElement(By.className("radius")).click();					
    }
    
    @Then("^I see logout on the page$")					
    public void I_see_LogoutButton() throws Throwable 							
    {								
    	String buttonTitle = driver.findElement(By.className("radius")).getText();
    	
    	assertEquals("Logout", buttonTitle);
    }
    
    /* Accepts dynamic error message for comparison
     * @param error: String */
    @Then("^I see \"([^\"]*)\" message on the page$")					
    public void I_see_ErrorMessage(String error) throws Throwable 							
    {								
    	String elementText = driver.findElement(By.id("flash")).getText();   	
    	assertThat(elementText, CoreMatchers.containsString(error));
    }
    
    
    @And("^I close the browser for LoginTest$")					
    public void I_close_browser() throws Throwable 							
    {								
    	closeBrowser();
    }

}		