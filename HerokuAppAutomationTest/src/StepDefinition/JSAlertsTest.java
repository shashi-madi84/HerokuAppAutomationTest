package StepDefinition;	

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertEquals;

import org.hamcrest.CoreMatchers;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;	

/* @author: Shashi Poddar
 * This class provides the implementation of the steps in JSAlertsTest.feature file
 * */
public class JSAlertsTest extends BaseSteps {
		
	@Given("^Open the browser for JSAlertsTest$")					
    public void Open_browser_and_launch_application() throws Throwable							
    {		
       	openBrowser();					
    }
	
	@When("^I navigate to JSAlerts Page$")					
    public void Navigate_to_page_jsalerts() throws Throwable							
    {				
		//click on "JavaScripts Alerts" button
		driver.findElement(By.linkText("JavaScript Alerts")).click();
    	
    }
	
	/* Accepts dynamic input for the button text and clicks after locating
	 * @param btnText: String */
	@And("^I press the \"([^\"]*)\" button$")					
    public void Press_the_button(String btnText) throws Throwable							
    {				
		driver.findElement(By.xpath("//button[text()='"+ btnText +"']")).click();   	
    }
	
	@And("^I click OK on the popup$")					
    public void Click_OK_button() throws Throwable							
    {				
		driver.switchTo().alert().accept();	
    }
	
	@And("^I click Cancel on the popup$")					
    public void Click_Cancel_button() throws Throwable							
    {				
		driver.switchTo().alert().dismiss();;	
    }
	
	/* Accepts dynamic input text for the input prompt 
	* @param input: String */
	@And("^I type \"([^\"]*)\" in the textbox$")					
    public void Click_Cancel_button(String input) throws Throwable							
    {				
		driver.switchTo().alert().sendKeys(input);	
    }
	
	/* Accepts dynamic message for the comparison
	  * @param msg: String */
	@Then("^I see \"([^\"]*)\" on the page$")					
    public void I_see_message(String msg) throws Throwable							
    {				
		String result = driver.findElement(By.id("result")).getText();
		assertEquals(msg, result);
    }
			
    @And("^I close the browser for JSAlertsTest$")					
    public void I_close_browser() throws Throwable 							
    {								
    	closeBrowser();
    }
}
