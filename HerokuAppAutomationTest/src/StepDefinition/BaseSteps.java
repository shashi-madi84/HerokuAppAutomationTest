package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/* @author: Shashi Poddar
 * This abstract class provides the implementation of the common steps required for all the features
 * */
public abstract class BaseSteps {
	WebDriver driver;			
	   
    public void openBrowser()
    {
    	System.setProperty("webdriver.chrome.driver", "..//Selenium//drivers//chromedriver.exe");					
        driver= new ChromeDriver();					
        driver.manage().window().maximize();	
        driver.get("https://the-internet.herokuapp.com/");
    }
    
    public void closeBrowser()
    {
    	driver.quit();
    }
}
