package StepDefinition;	

import static org.hamcrest.MatcherAssert.assertThat;

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
 * This class provides the implementation of the steps in DynamicLoadingTest.feature file
 * */
public class DynamicLoadingTest extends BaseSteps {
	
	WebElement waitForElement;
		
	@Given("^Open the browser for DynamicLoadingTest$")					
    public void Open_browser_and_launch_application() throws Throwable							
    {		
       	openBrowser();					
    }
	
    @When("^I navigate to Dyanamic Loading page for hidden element$")					
    public void Navigate_to_page_ex1() throws Throwable							
    {				
    	driver.findElement(By.linkText("Dynamic Loading")).click();
    	
    	//To click on "Example 1: Element on page that is hidden"
    	driver.findElement(By.linkText("Example 1: Element on page that is hidden")).click();
    	
    }	

    @And("^I press the Start button$")					
    public void I_press_Start_button() throws Throwable 							
    {		
    	driver.findElement(By.id("start")).findElement(By.tagName("button")).click();						
    }
    
    @And("^I wait for the progressbar to end$")					
    public void I_wait_till_end() throws Throwable 							
    {
    	// Wait for element to be visible
    	Wait<WebDriver> wait = new WebDriverWait(driver, 30);
    	waitForElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));		
    }
    
    @Then("^I see Hello World on the page$")
    public void I_see_Hello_World() throws Throwable 							
    {						
		String elementText = waitForElement.findElement(By.tagName("h4")).getText();
	
		assertThat(elementText, CoreMatchers.containsString("Hello World!"));	
    }
    
    @And("^I see \"Example 1: Element on page that is hidden\"$")
    public void I_see_Ex1_Statement() throws Throwable 	{
    	String elementText = driver.findElement(By.id("content")).findElement(By.tagName("h4")).getText();
		assertThat(elementText, CoreMatchers.containsString("Example 1: Element on page that is hidden"));
    }
    
    @When("^I navigate to Dyanamic Loading page for fact$")					
    public void Navigate_to_page_ex2() throws Throwable							
    {				
    	driver.findElement(By.linkText("Dynamic Loading")).click();
    	
    	//To click on "Example 2: Element rendered after the fact"
    	driver.findElement(By.linkText("Example 2: Element rendered after the fact")).click();
   	
    }	
    
    @And("^I see \"Example 2: Element rendered after the fact\"$")
    public void I_see_Ex2_Statement() throws Throwable 	{
    	String elementText = driver.findElement(By.id("content")).findElement(By.tagName("h4")).getText();
		assertThat(elementText, CoreMatchers.containsString("Example 2: Element rendered after the fact"));
    }   
    
    @And("^I close the browser for DynamicLoadingTest$")					
    public void I_close_browser() throws Throwable 							
    {								
    	closeBrowser();
    }
}
