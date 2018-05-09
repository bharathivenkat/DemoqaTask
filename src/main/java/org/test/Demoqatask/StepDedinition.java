package org.test.Demoqatask;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDedinition {
	WebDriver driver;
	@Given("^user is in the Demoqa page$")
	public void user_is_in_the_Demoqa_page() throws Throwable {
	   System.setProperty("webdriver.chrome.driver",
			   "C:\\Users\\User\\Desktop\\bharathi Excep\\Demoqatask\\driver\\chromedriver.exe");
	   driver=new ChromeDriver();
	   driver.get("http://demoqa.com/registration/");
	} 

	@When("^user passes the text into the textbox$")
	public void user_passes_the_text_into_the_textbox() throws Throwable {
	   driver.findElement(By.id("name_3_firstname")).sendKeys("my fname");
	   driver.findElement(By.id("name_3_lastname")).sendKeys("my lName");
	  driver.findElement(By.name("phone_9")).sendKeys("1234567890");
	  driver.findElement(By.name("username")).sendKeys("hello");
	  driver.findElement(By.id("email_1")).sendKeys("hello@gmail.com");
	  driver.findElement(By.name("description")).sendKeys("hi");
	  driver.findElement(By.id("password_2")).sendKeys("123456");
	  driver.findElement(By.id("confirm_password_password_2")).sendKeys("123456");
	}

	@Then("^verify the textboxs$")
	public void verify_the_textbox() throws Throwable {
		Assert.assertTrue(driver.findElement(By.id("name_3_firstname")).getAttribute("value").equals("my fname"));
		Assert.assertTrue(driver.findElement(By.id("name_3_lastname")).getAttribute("value").equals("my lName"));
		Assert.assertTrue(driver.findElement(By.id("phone_9")).getAttribute("value").equals("1234567890"));
		Assert.assertTrue(driver.findElement(By.id("username")).getAttribute("value").equals("hello"));
		Assert.assertTrue(driver.findElement(By.id("email_1")).getAttribute("value").equals("\"hello@gmail.com"));
		Assert.assertTrue(driver.findElement(By.id("description")).getAttribute("value").equals("hi"));
		Assert.assertTrue(driver.findElement(By.id("password_2")).getAttribute("value").equals("123456"));
		Assert.assertTrue(driver.findElement(By.id("confirm_password_password_2")).getAttribute("value").equals("123456"));
		System.out.println("All the textbox values are verified");

	}

	@When("^user clicks on the checkbox$")
	public void user_clicks_on_the_checkbox() throws Throwable {
WebElement e1=driver.findElement(By.name("checkbox_5[]"));
e1.click();
	}

	@Then("^user verifies whether the checkbox is selected or not$")
	public void user_verifies_whether_the_checkbox_is_selected_or_not() throws Throwable {
		WebElement e1 = driver.findElement(By.name("checkbox_5[]"));

		Assert.assertEquals("dance", e1.getAttribute("value"));
		

	}

	@When("^user clicks on the radio button$")
	public void user_clicks_on_the_radio_button() throws Throwable {
		WebElement e=driver.findElement(By.xpath("//input[@value='married']"));
		e.click();

	}

	@Then("^user verifies whether the radio is selected or not$")
	public void user_verifies_whether_the_radio_is_selected_or_not() throws Throwable {
		WebElement e=driver.findElement(By.xpath("//input[@value='married']"));
		//boolean selected =e.isSelected();
		Assert.assertEquals("married", e.getAttribute("value"));
	

	}

	@When("^user clicks the dropdown menu$")
	public void user_clicks_the_dropdown_menu() throws Throwable {
		WebElement contry = driver.findElement(By.id("dropdown_7"));
		   Select a = new Select(contry);
		   a.selectByVisibleText("Afghanistan");

	}

	@Then("^user verifies whether the dropdown default value is same or not$")
	public void user_verifies_whether_the_dropdown_default_value_is_same_or_not() throws Throwable {
		WebElement contry = driver.findElement(By.xpath("//*[@id='dropdown_7']"));
		
		Assert.assertEquals("Afghanistan", contry.getText());
		
		
	}


}
